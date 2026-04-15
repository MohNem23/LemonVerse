import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen snap-y snap-proximity pt-24">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
