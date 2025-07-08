import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ClientConfirmationEmail,
  AdminNotificationEmail,
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 submissions per 15 minutes per IP

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
  refferer: string;
  honeypot?: string; // Honeypot field
  submittedAt: number; // Client timestamp for timing analysis
}

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return `rate_limit_${ip}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return true;
  }

  // Reset if window has passed
  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return true;
  }

  // Check if under limit
  if (record.count < RATE_LIMIT_MAX_REQUESTS) {
    record.count++;
    return true;
  }

  return false;
}

function validateFormData(data: ContactFormData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Honeypot check - if filled, it's likely a bot
  if (data.honeypot && data.honeypot.trim() !== "") {
    errors.push("Spam detected");
  }

  // Timing check - if submitted too quickly, might be a bot
  const submissionTime = Date.now() - data.submittedAt;
  if (submissionTime < 3000) {
    // Less than 3 seconds
    errors.push("Form submitted too quickly");
  }

  // Basic validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters");
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.eventType) {
    errors.push("Event type is required");
  }

  if (!data.date) {
    errors.push("Date is required");
  }

  if (!data.message) {
    errors.push("Message is required");
  }

  // Content-based spam detection
  const spamKeywords = [
    "bitcoin",
    "cryptocurrency",
    "investment",
    "loan",
    "casino",
    "viagra",
  ];
  const content = `${data.name} ${data.message} ${data.refferer}`.toLowerCase();
  const hasSpamKeywords = spamKeywords.some((keyword) =>
    content.includes(keyword)
  );

  if (hasSpamKeywords) {
    errors.push("Spam content detected");
  }

  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    errors.push("Too many links in message");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Validate form data and check for spam
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: "Kevin Sutandi Photography <noreply@kevinsutandi.com>",
      to: [data.email],
      subject: "Thank you for your photography inquiry!",
      react: ClientConfirmationEmail({ name: data.name }),
    });

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: "Website Contact Form <noreply@kevinsutandi.com>",
      to: ["kevinesutandi@gmail.com"],
      subject: `New Photography Inquiry from ${data.name}`,
      react: AdminNotificationEmail({ formData: data }),
    });

    // Log results for debugging (remove in production)
    console.log("Client email result:", clientEmailResult);
    console.log("Admin email result:", adminEmailResult);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully and emails sent!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Internal server error. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
