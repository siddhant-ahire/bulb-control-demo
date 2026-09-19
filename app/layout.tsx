import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bulb Control",
  description: "A Next.js bulb ON/OFF control demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
