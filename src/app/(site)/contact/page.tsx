import { ContactPage } from "@/components/pages/contact-page";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact LemonVerse about demos, partnerships, schools, press, family accounts, or launch questions.",
  path: "/contact",
});

export default function ContactRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Contact Us",
            description:
              "Contact LemonVerse about demos, partnerships, schools, press, family accounts, or launch questions.",
            path: "/contact",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPage />
    </>
  );
}
