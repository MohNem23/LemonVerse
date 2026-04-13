import type { Metadata } from "next";
import { absoluteUrl, lastUpdated, siteConfig } from "@/brand/site-metadata";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords: [...siteConfig.keywords, ...keywords],
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: canonical,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
    robots: {
      index: true,
      follow: true,
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
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.organizationType,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    areaServed: "Worldwide",
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
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
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
    name: title,
    serviceType: "AI-powered language learning",
    url: absoluteUrl(path),
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
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
      "@type": "Organization",
      name: siteConfig.legalName,
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
