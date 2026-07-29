import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import Footer from "./layout/Footer";
import LanguageProvider from "./layout/LanguageProvider";
import PageShell from "./layout/PageShell";
import TopBar from "./layout/TopBar";
import {
  SITE_NAME,
  SITE_URL,
  getGlobalSeoGraph,
  homeSeo,
  toJsonLd,
} from "@/lib/seo-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeSeo.title,
  description: homeSeo.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: homeSeo.title,
    description: homeSeo.description,
  },
  twitter: {
    card: "summary",
    title: homeSeo.title,
    description: homeSeo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050806] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(getGlobalSeoGraph()) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-82437M124J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-G-82437M124J" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);}
            window.gtag('js', new Date());
            window.gtag('config', 'G-82437M124J'); // Dedicated GA4 stream.
          `}
        </Script>
        <LanguageProvider>
          <PageShell>
            <div className="flex min-h-screen flex-col">
              <TopBar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PageShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
