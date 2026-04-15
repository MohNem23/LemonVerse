import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/seo/structured-data";
import { FaqList } from "@/components/shared/faq-list";
import { extendedFaqs } from "@/content/faqs";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Read the most common questions about LemonVerse, including the two-world model, how the methodology works, what the family plan includes, and how to contact the team.",
  path: "/faq",
});

export default function FaqRoute() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            title: "Frequently Asked Questions",
            description:
              "Read the most common questions about LemonVerse, including the two-world model, how the methodology works, what the family plan includes, and how to contact the team.",
            path: "/faq",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqJsonLd(extendedFaqs),
        ]}
      />
      <div className="pb-24">
        <section className="py-14">
          <Container className="space-y-6">
            <span className="eyebrow">FAQ</span>
            <h1 className="font-serif text-5xl font-bold text-foreground sm:text-6xl">
              Frequently asked questions
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">
              This page exists for both human readers and answer engines. Every response is phrased in
              direct, quoteable language so LemonVerse is easier to index and summarize accurately.
            </p>
          </Container>
        </section>
        <section className="py-10">
          <Container>
            <FaqList items={extendedFaqs} />
          </Container>
        </section>
      </div>
    </>
  );
}
