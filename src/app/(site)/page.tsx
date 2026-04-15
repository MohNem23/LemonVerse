import { HomePage } from "@/components/pages/home-page";
import { StructuredData } from "@/components/seo/structured-data";
import { homeFaqs } from "@/content/faqs";
import { buildMetadata, faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Immersive AI Language Learning for Kids, Teens, Adults, and Families",
  description:
    "LemonVerse is an AI-powered language-learning platform built around two core worlds: LemonGrove for children and LemonNoir for teens and adults, with shared family plans and guided immersion.",
  path: "/",
});

export default function HomeRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Immersive AI Language Learning for Kids, Teens, Adults, and Families",
            description:
              "LemonVerse is an AI-powered language-learning platform built around two core worlds: LemonGrove for children and LemonNoir for teens and adults, with shared family plans and guided immersion.",
            path: "/",
          }),
          serviceJsonLd({
            title: "LemonVerse language immersion",
            description:
              "LemonVerse is an AI-powered language-learning platform built around two core worlds, LemonGrove and LemonNoir, plus guided family learning.",
            path: "/",
          }),
          faqJsonLd(homeFaqs),
        ]}
      />
      <HomePage />
    </>
  );
}
