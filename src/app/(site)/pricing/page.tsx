import { PricingPage } from "@/components/pages/pricing-page";
import { StructuredData } from "@/components/seo/structured-data";
import { pricingFaqs } from "@/content/faqs";
import { pricingContent } from "@/content/pricing";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, offerCatalogJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing and Family Plans",
  description:
    "Compare LemonGrove Solo ($4.99), LemonNoir Solo ($5.99), and the Unified Family Bundle ($8.99) with up to five learner profiles and 600+ scenarios.",
  path: "/pricing",
});

export default function PricingRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Pricing and Family Plans",
            description:
              "Compare LemonVerse pricing for the two-world learning model, including the Unified Family Bundle, solo access, and family profile coverage.",
            path: "/pricing",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          offerCatalogJsonLd({
            title: "LemonVerse pricing",
            description:
              "Choose LemonGrove Solo, LemonNoir Solo, or the Unified Family Bundle with full two-world access for households.",
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
