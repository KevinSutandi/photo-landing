import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "@/components/Topbar";

const acuminPro = localFont({
  src: "./fonts/Acumin-RPro.otf",
  variable: "--font-acumin-pro",
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
        className={`${acuminPro.variable} antialiased`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  );
}
