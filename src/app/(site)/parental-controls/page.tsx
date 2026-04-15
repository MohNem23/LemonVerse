import { SimplePage } from "@/components/pages/simple-page";
import { StructuredData } from "@/components/seo/structured-data";
import { parentalControlsContent } from "@/content/legal";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Parental Controls",
  description: parentalControlsContent.description,
  path: "/parental-controls",
});

export default function ParentalControlsRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Parental Controls",
            description: parentalControlsContent.description,
            path: "/parental-controls",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Parental Controls", path: "/parental-controls" },
          ]),
        ]}
      />
      <SimplePage {...parentalControlsContent} />
    </>
  );
}
