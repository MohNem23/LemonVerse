import { MethodologyPage } from "@/components/pages/methodology-page";
import { StructuredData } from "@/components/seo/structured-data";
import { methodologyFaqs } from "@/content/faqs";
import { methodologyContent } from "@/content/methodology";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Narrative Language Acquisition Method",
  description:
    "Learn why LemonVerse replaces flashcard drills with narrative immersion, emotional anchoring, and 600+ contextual scenarios that build a real fluency reflex.",
  path: "/methodology",
});

export default function MethodologyRoute() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Methodology", path: "/methodology" },
          ]),
          articleJsonLd({
            title: "Narrative Language Acquisition Method",
            description:
              "LemonVerse uses comprehensible input, emotional anchoring, and narrative persistence to turn language into a lived reflex instead of a memorized list.",
            path: "/methodology",
            author: methodologyContent.author.name,
          }),
          faqJsonLd(methodologyFaqs),
        ]}
      />
      <MethodologyPage />
    </>
  );
}
