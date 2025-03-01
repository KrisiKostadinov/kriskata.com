import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/services/creation-of-a-company-website/_components/hero";
import WhyMe from "@/app/services/creation-of-a-company-website/_components/why-me";

export default function Page() {
  return (
    <PageWrapper>
      <Hero />
      <WhyMe />
    </PageWrapper>
  );
}