import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/services/creation-of-a-classifieds-website/_components/hero";
import Functionalities from "@/app/services/creation-of-a-classifieds-website/_components/functionalities";
import PriceSection from "@/app/services/creation-of-a-classifieds-website/_components/price";
import Plan from "@/app/services/creation-of-a-classifieds-website/_components/plan";
import CustomCallToAction from "@/app/services/creation-of-a-classifieds-website/_components/custom-call-to-action";
import HostingAndDomain from "@/app/services/creation-of-a-classifieds-website/_components/hosting-and-domain";

export default function Page() {
  return (
    <PageWrapper>
      <Hero />
      <Functionalities />
      <PriceSection />
      <Plan />
      <HostingAndDomain />
      <CustomCallToAction />
    </PageWrapper>
  );
}
