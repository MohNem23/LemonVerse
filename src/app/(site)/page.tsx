import { HomePage } from "@/components/pages/home-page";
import { StructuredData } from "@/components/seo/structured-data";
import { homeFaqs } from "@/content/faqs";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Don't Drill the Language. Live the Story.",
  description:
    "Unlock fluency through high-stakes immersion across LemonNoir and LemonGrove. LemonVerse replaces repetitive drills with interactive adventures for the whole family.",
  path: "/",
});

export default function HomeRoute() {
  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            title: "LemonVerse language immersion",
            description:
              "LemonVerse unlocks fluency through narrative immersion in LemonNoir and LemonGrove, with one family-ready ecosystem and 600+ scenarios.",
            path: "/",
          }),
          faqJsonLd(homeFaqs),
        ]}
      />
      <HomePage />
    </>
  );
}
