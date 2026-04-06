import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mherron.com'),
  title: "Mike Herron | Chief Marketing Officer | SaaS, FinTech & Enterprise Technology",
  description: "Marketing executive with 25+ years building global marketing organizations. Drove $15M+ partnership revenue, 200%+ community growth, 14% revenue increases across Fortune 500 brands including Disney, Google, AT&T, and United Airlines.",
  keywords: "Mike Herron, Chief Marketing Officer, CMO, Marketing Executive, SaaS Marketing, FinTech Marketing, Enterprise Technology, Brand Strategy, Growth Marketing, Chicago CMO, Marketing Consultant",
  authors: [{ name: "Michael Herron", url: "https://mherron.com" }],
  creator: "Michael Herron",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mherron.com",
    title: "Mike Herron | Chief Marketing Officer",
    description: "25+ years driving measurable marketing results for technology and fintech companies. Former CMO at Kadena, Chain, and Lukka. Based in Chicago.",
    siteName: "Mike Herron",
    images: [{
      url: "/fullhead.png",
      width: 500,
      height: 500,
      alt: "Mike Herron - Chief Marketing Officer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Herron | Chief Marketing Officer",
    description: "Marketing executive with 25+ years experience. $1B+ capital raised. Fortune 500 clients. Chicago-based.",
    images: ["/fullhead.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michael R. Herron",
              alternateName: "Mike Herron",
              url: "https://mherron.com",
              image: "https://mherron.com/fullhead.png",
              sameAs: [
                "https://www.linkedin.com/in/mherron54"
              ],
              jobTitle: "Chief Marketing Officer",
              worksFor: {
                "@type": "Organization",
                name: "Michael Herron LLC"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chicago",
                addressRegion: "IL",
                addressCountry: "US"
              },
              knowsAbout: [
                "Brand Strategy",
                "Go-to-Market Planning",
                "Product Marketing",
                "Digital Transformation",
                "Growth Marketing",
                "SaaS Marketing",
                "FinTech Marketing",
                "Partnership Development"
              ],
              alumniOf: [
                { "@type": "Organization", name: "Kadena" },
                { "@type": "Organization", name: "Chain Global" },
                { "@type": "Organization", name: "Lukka" },
                { "@type": "Organization", name: "U.S. Cellular" }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
