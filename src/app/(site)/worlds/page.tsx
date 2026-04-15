import { WorldsPage } from "@/components/pages/worlds-page";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from "@/lib/seo";

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
