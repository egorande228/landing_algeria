import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { SITE_NAME, SITE_URL, getHomePageSeoGraph, homeSeo, toJsonLd } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(getHomePageSeoGraph()) }}
      />
      <HomePageClient />
    </>
  );
}
