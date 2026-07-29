import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyUs from "./components/WhyUs";
import FinalCtaSection from "./components/FinalCTASection";
import PathsSection from "./components/PathsSection";
import BenefitsSection from "./components/BenefitsSection";
import {
  SITE_NAME,
  SITE_URL,
  getPartnershipPageSeoGraph,
  partnershipSeo,
  toJsonLd,
} from "@/lib/seo-content";

export const metadata: Metadata = {
  title: partnershipSeo.title,
  description: partnershipSeo.description,
  alternates: {
    canonical: "/partnership/",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/partnership/`,
    siteName: SITE_NAME,
    title: partnershipSeo.title,
    description: partnershipSeo.description,
  },
  twitter: {
    card: "summary",
    title: partnershipSeo.title,
    description: partnershipSeo.description,
  },
};

export default function PartnershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(getPartnershipPageSeoGraph()),
        }}
      />
      <div className="flex flex-col">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <WhyUs />
        <PathsSection />
        <FinalCtaSection />
      </div>
    </>
  );
}
