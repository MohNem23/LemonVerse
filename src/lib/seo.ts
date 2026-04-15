import type { Metadata } from "next";
import { absoluteUrl, lastUpdated, siteConfig } from "@/brand/site-metadata";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

function organizationId() {
  return `${absoluteUrl("/")}#organization`;
}

function websiteId() {
  return `${absoluteUrl("/")}#website`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.name}`;
  const mergedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]));

  const openGraphImage = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: fullTitle,
  };
  const twitterImage = {
    url: absoluteUrl("/twitter-image"),
    alt: fullTitle,
  };

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-US": path,
      },
    },
    keywords: mergedKeywords,
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: canonical,
      title: fullTitle,
      description,
      images: [openGraphImage],
      ...(ogType === "article"
        ? {
            publishedTime: lastUpdated,
            modifiedTime: lastUpdated,
            authors: [siteConfig.legalName],
            tags: mergedKeywords.slice(0, 10),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [twitterImage],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      siteId: siteConfig.twitterSiteId,
      creatorId: siteConfig.twitterCreatorId,
    },
    pinterest: {
      richPin: true,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "article:modified_time": lastUpdated,
    },
  };
}

export function organizationJsonLd() {
  const sameAs =
    siteConfig.socialProfiles.length > 0 ? { sameAs: siteConfig.socialProfiles } : {};

  return {
    "@context": "https://schema.org",
    "@type": siteConfig.organizationType,
    "@id": organizationId(),
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    areaServed: "Worldwide",
    ...sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "Language acquisition",
      "Narrative learning",
      "AI tutoring",
      "Family language learning",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@id": organizationId(),
    },
    isAccessibleForFree: false,
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en",
    isPartOf: {
      "@id": websiteId(),
    },
    about: {
      "@id": organizationId(),
    },
    dateModified: lastUpdated,
    datePublished: lastUpdated,
    primaryImageOfPage: absoluteUrl("/opengraph-image"),
    publisher: {
      "@id": organizationId(),
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    isPartOf: {
      "@id": websiteId(),
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: title,
    serviceType: "AI-powered language learning",
    url: absoluteUrl(path),
    description,
    provider: {
      "@id": organizationId(),
    },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: siteConfig.familyBundlePrice,
      priceCurrency: siteConfig.currency,
      availability: "https://schema.org/InStock",
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  author,
}: {
  title: string;
  description: string;
  path: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    url: absoluteUrl(path),
    dateModified: lastUpdated,
    datePublished: lastUpdated,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@id": organizationId(),
    },
  };
}

export function offerCatalogJsonLd({
  title,
  description,
  path,
  offers,
}: {
  title: string;
  description: string;
  path: string;
  offers: Array<{ name: string; price: string; description: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${absoluteUrl(path)}#offers`,
    name: title,
    description,
    url: absoluteUrl(path),
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
      },
      price: offer.price,
      priceCurrency: siteConfig.currency,
      availability: "https://schema.org/InStock",
    })),
  };
}
