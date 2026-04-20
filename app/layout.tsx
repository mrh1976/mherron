import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://mherron.com'),
  title: "Michael Herron | Fractional CMO | Free Audit | Chicago",
  description: "Chicago-based fractional CMO offering free marketing audits for SaaS, FinTech, and blockchain companies. 25+ years experience. Former CMO at Kadena, Chain, Lukka. Request your free audit today.",
  keywords: "Fractional CMO, Free Marketing Audit, Marketing Consultant, Chicago Marketing, Michael Herron, SaaS Marketing, FinTech Marketing, Blockchain Marketing, Marketing Strategy Audit, Free Marketing Assessment",
  // ... rest stays the same
}

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
