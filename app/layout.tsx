import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael Herron",
  description: "Marketing executive and fractional CMO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
