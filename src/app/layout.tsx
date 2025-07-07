import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
