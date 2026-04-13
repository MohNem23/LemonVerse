import { PricingPage } from "@/components/pages/pricing-page";
import { StructuredData } from "@/components/seo/structured-data";
import { pricingFaqs } from "@/content/faqs";
import { pricingContent } from "@/content/pricing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, offerCatalogJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing and Family Plans",
  description:
    "Compare LemonVerse pricing for the two-world learning model, including the Unified Family Bundle, solo access, and family profile coverage.",
  path: "/pricing",
});

export default function PricingRoute() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          offerCatalogJsonLd({
            title: "LemonVerse pricing",
            description:
              "Compare LemonVerse pricing for the two-world learning model, including the Unified Family Bundle, solo access, and family profile coverage.",
            path: "/pricing",
            offers: pricingContent.offers,
          }),
          faqJsonLd(pricingFaqs),
        ]}
      />
      <PricingPage />
    </>
  );
}
