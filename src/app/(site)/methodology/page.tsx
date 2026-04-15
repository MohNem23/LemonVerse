import { MethodologyPage } from "@/components/pages/methodology-page";
import { StructuredData } from "@/components/seo/structured-data";
import { methodologyFaqs } from "@/content/faqs";
import { methodologyContent } from "@/content/methodology";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Narrative Language Acquisition Method",
  description:
    "Learn why LemonVerse replaces flashcard drills with narrative immersion, emotional anchoring, and 600+ contextual scenarios that build a real fluency reflex.",
  path: "/methodology",
  ogType: "article",
});

export default function MethodologyRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Narrative Language Acquisition Method",
            description:
              "See how LemonVerse uses narrative acquisition, guided immersion, and two core worlds to help learners build language through context instead of drills.",
            path: "/methodology",
          }),
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
