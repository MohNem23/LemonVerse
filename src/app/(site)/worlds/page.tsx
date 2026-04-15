import { WorldsPage } from "@/components/pages/worlds-page";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Language Learning Worlds",
  description:
    "Explore LemonVerse's two flagship worlds, LemonNoir and LemonGrove, with over 600 hand-crafted scenarios designed to move learners from study mode to lived fluency.",
  path: "/worlds",
});

export default function WorldsRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Language Learning Worlds",
            description:
              "Explore LemonVerse's two-world model: LemonGrove for children and LemonNoir for teens and adults, where scenarios and games are library entries inside each world.",
            path: "/worlds",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Worlds", path: "/worlds" },
          ]),
          serviceJsonLd({
            title: "LemonVerse story worlds",
            description:
              "LemonNoir delivers cinematic immersion for teens and adults, while LemonGrove delivers curiosity-led discovery for children, all inside one narrative ecosystem.",
            path: "/worlds",
          }),
        ]}
      />
      <WorldsPage />
    </>
  );
}
