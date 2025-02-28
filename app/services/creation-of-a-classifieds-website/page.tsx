import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/services/creation-of-a-classifieds-website/_components/hero";
import Functionalities from "@/app/services/creation-of-a-classifieds-website/_components/functionalities";
import PriceSection from "@/app/services/creation-of-a-classifieds-website/_components/price";

export default function Page() {
  return (
    <PageWrapper>
      <Hero />
      <Functionalities />
      <PriceSection />
    </PageWrapper>
  );
}
