import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: "Mike Herron",
    images: [{ url: siteContent.meta.image }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.image],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
