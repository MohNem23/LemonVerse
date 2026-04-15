import { WorldsPage } from "@/components/pages/worlds-page";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Language Learning Worlds",
  description:
    "Explore LemonVerse's two-world model: LemonGrove for children and LemonNoir for teens and adults, where scenarios and games are library entries inside each world.",
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
              "Explore LemonVerse's two-world model: LemonGrove for children and LemonNoir for teens and adults, with scenarios and games treated as entries in each world library.",
            path: "/worlds",
          }),
        ]}
      />
      <WorldsPage />
    </>
  );
}
