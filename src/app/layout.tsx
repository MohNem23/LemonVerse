import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/seo/structured-data";
import { fontVariables } from "@/brand/fonts";
import { absoluteUrl, siteConfig } from "@/brand/site-metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const socialImageAlt = `${siteConfig.name} immersive AI language learning`;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const facebookAdmins = process.env.NEXT_PUBLIC_FACEBOOK_ADMINS
  ?.split(",")
  .map((item) => item.trim())
  .filter(Boolean);

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  referrer: "strict-origin-when-cross-origin",
  category: "education",
  classification: "Education Technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/twitter-image"),
        alt: socialImageAlt,
      },
    ],
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    siteId: siteConfig.twitterSiteId,
    creatorId: siteConfig.twitterCreatorId,
  },
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
    ? { appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID }
    : facebookAdmins && facebookAdmins.length > 0
      ? { admins: facebookAdmins }
      : undefined,
  pinterest: {
    richPin: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION,
    other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  appLinks: {
    web: {
      url: absoluteUrl("/"),
      should_fallback: true,
    },
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#111317",
    "apple-mobile-web-app-title": siteConfig.name,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111317" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
