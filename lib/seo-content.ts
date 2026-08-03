import { CONTACT_EMAIL, TELEGRAM_LINK } from "./links";

export const SITE_URL = "https://algeria-melbet.com";
export const SITE_NAME = "Melbet Algeria";
export const SITE_LOCALE_LANGUAGES = ["en", "fr", "ar"] as const;
export const HOME_LAST_REVIEWED = "2026-07-31";
export const PARTNERSHIP_LAST_REVIEWED = "2026-07-29";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const homeSeo = {
  title: "Melbet Algeria: Live Football, Casino Games, and Offers",
  description:
    "Compare live football, casino games, slots, live games, esports, and current offers on Melbet Algeria with fast mobile access.",
} as const;

export const partnershipSeo = {
  title: "Melbet Algeria Partnership: Partner and Agent Routes",
  description:
    "Talk with Melbet Algeria about partner and agent routes, onboarding steps, reporting, and direct Telegram or email contact.",
} as const;

export function getGlobalSeoGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": ORGANIZATION_ID,
        "@type": "Organization",
        email: CONTACT_EMAIL,
        logo: `${SITE_URL}/logo.svg`,
        name: SITE_NAME,
        sameAs: [TELEGRAM_LINK],
        url: SITE_URL,
      },
      {
        "@id": WEBSITE_ID,
        "@type": "WebSite",
        inLanguage: [...SITE_LOCALE_LANGUAGES],
        name: SITE_NAME,
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        url: SITE_URL,
      },
    ],
  };
}

export function getHomePageSeoGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        about: [
          { "@type": "Thing", name: "live football" },
          { "@type": "Thing", name: "casino games" },
          { "@type": "Thing", name: "slots" },
          { "@type": "Thing", name: "live games" },
          { "@type": "Thing", name: "esports" },
          { "@type": "Thing", name: "mobile offers" },
        ],
        author: {
          "@id": ORGANIZATION_ID,
        },
        dateModified: HOME_LAST_REVIEWED,
        description: homeSeo.description,
        inLanguage: [...SITE_LOCALE_LANGUAGES],
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        name: homeSeo.title,
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        url: `${SITE_URL}/`,
      },
    ],
  };
}

export function getPartnershipPageSeoGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/partnership/#webpage`,
        about: [
          { "@type": "Thing", name: "partnership" },
          { "@type": "Thing", name: "partner route" },
          { "@type": "Thing", name: "agent route" },
          { "@type": "Thing", name: "onboarding" },
          { "@type": "Thing", name: "reporting" },
        ],
        author: {
          "@id": ORGANIZATION_ID,
        },
        dateModified: PARTNERSHIP_LAST_REVIEWED,
        description: partnershipSeo.description,
        inLanguage: [...SITE_LOCALE_LANGUAGES],
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        name: partnershipSeo.title,
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        url: `${SITE_URL}/partnership/`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            item: `${SITE_URL}/`,
            name: "Home",
            position: 1,
          },
          {
            "@type": "ListItem",
            item: `${SITE_URL}/partnership/`,
            name: "Partnership",
            position: 2,
          },
        ],
      },
    ],
  };
}

export function toJsonLd(value: unknown) {
  return JSON.stringify(value);
}
