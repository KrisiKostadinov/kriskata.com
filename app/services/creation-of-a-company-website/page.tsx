import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/services/creation-of-a-company-website/_components/hero";
import WhyMe from "@/app/services/creation-of-a-company-website/_components/why-me";
import PriceSection from "@/app/services/creation-of-a-company-website/_components/price";
import PocketsSection from "@/app/services/creation-of-a-company-website/_components/pockets";

export default function Page() {
  return (
    <PageWrapper>
      <Hero />
      <WhyMe />
      <PriceSection />
      <PocketsSection />
    </PageWrapper>
  );
}