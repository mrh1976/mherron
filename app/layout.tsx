import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mherron.com'),
  title: "Mike Herron | Chief Marketing Officer | SaaS, FinTech & Enterprise Technology",
  description: "Marketing executive with 25+ years building global marketing organizations. Drove $15M+ partnership revenue, 200%+ community growth, 14% revenue increases across Fortune 500 brands including Disney, Google, AT&T, and United Airlines.",
  keywords: "Mike Herron, Chief Marketing Officer, CMO, Marketing Executive, SaaS Marketing, FinTech Marketing, Enterprise Technology, Brand Strategy, Growth Marketing, Chicago CMO, Marketing Consultant",
  authors: [{ name: "Michael Herron", url: "https://mherron.com" }],
  creator: "Michael Herron",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mherron.com",
    title: "Mike Herron | Chief Marketing Officer",
    description: "25+ years driving measurable marketing results for technology and fintech companies. Former CMO at Kadena, Chain, and Lukka. Based in Chicago.",
    siteName: "Mike Herron",
    images: [{
      url: "/og-image-2026.jpg",
      width: 1200,
      height: 630,
      alt: "Mike Herron - Chief Marketing Officer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Herron | Chief Marketing Officer",
    description: "Marketing executive with 25+ years experience. $1B+ capital raised. Fortune 500 clients. Chicago-based.",
    images: ["/og-image-2026.jpg"],
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
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1HLYS59QVZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1HLYS59QVZ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
