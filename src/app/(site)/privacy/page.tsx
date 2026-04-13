import { SimplePage } from "@/components/pages/simple-page";
import { StructuredData } from "@/components/seo/structured-data";
import { privacyContent } from "@/content/legal";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: privacyContent.description,
  path: "/privacy",
});

export default function PrivacyRoute() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <SimplePage {...privacyContent} />
    </>
  );
}
