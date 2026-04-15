import { ContactPage } from "@/components/pages/contact-page";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact LemonVerse for family support, school pilots, partnerships, and press inquiries. Every message is reviewed by a real team member.",
  path: "/contact",
});

export default function ContactRoute() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
