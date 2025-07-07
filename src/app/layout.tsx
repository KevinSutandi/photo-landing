import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";

const acuminPro = localFont({
  src: "./fonts/Acumin-RPro.otf",
  variable: "--font-acumin-pro",
});

const acuminProItalic = localFont({
  src: "./fonts/Acumin-ItPro.otf",
  variable: "--font-acumin-pro-italic",
});

const acuminProBold = localFont({
  src: "./fonts/Acumin-BdPro.otf",
  variable: "--font-acumin-pro-bold",
});

const acuminProBoldItalic = localFont({
  src: "./fonts/Acumin-BdItPro.otf",
  variable: "--font-acumin-pro-bold-italic",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300", "200", "100"],
});

export const metadata: Metadata = {
  title: "Kevin Sutandi",
  description: "Kevin Sutandi Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acuminPro.variable} ${acuminProItalic.variable} ${acuminProBold.variable} ${acuminProBoldItalic.variable} ${poppins.variable} antialiased`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  );
}
