import { SimplePage } from "@/components/pages/simple-page";
import { StructuredData } from "@/components/seo/structured-data";
import { termsContent } from "@/content/legal";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: termsContent.description,
  path: "/terms",
});

export default function TermsRoute() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <SimplePage {...termsContent} />
    </>
  );
}
