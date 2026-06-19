import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GT-PHWW8K8J');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-PHWW8K8J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
