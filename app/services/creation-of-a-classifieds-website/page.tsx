import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/services/creation-of-a-classifieds-website/_components/hero";
import Functionalities from "@/app/services/creation-of-a-classifieds-website/_components/functionalities";
import PriceSection from "@/app/services/creation-of-a-classifieds-website/_components/price";
import Plan from "@/app/services/creation-of-a-classifieds-website/_components/plan";

export default function Page() {
  return (
    <PageWrapper>
      <Hero />
      <Functionalities />
      <PriceSection />
      <Plan />
    </PageWrapper>
  );
}
