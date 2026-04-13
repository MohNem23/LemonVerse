import { MethodologyPage } from "@/components/pages/methodology-page";
import { StructuredData } from "@/components/seo/structured-data";
import { methodologyFaqs } from "@/content/faqs";
import { methodologyContent } from "@/content/methodology";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Narrative Language Acquisition Method",
  description:
    "See how LemonVerse uses narrative acquisition, guided immersion, and two core worlds to help learners build language through context instead of drills.",
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
              "LemonVerse uses narrative acquisition, guided immersion, and two core worlds to help learners build language through context instead of drills.",
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
