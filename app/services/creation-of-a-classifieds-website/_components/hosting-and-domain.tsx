import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";

export default function HostingAndDomain() {
  return (
    <section className="bg-white">
      <PageHeading text="Хостинг и домейн" tag="h2" />
      <div className="container mx-auto grid lg:grid-cols-2 items-center lg:gap-10 px-5">
        <div className="text-lg max-lg:text-center py-5 md:py-10 space-y-6 max-md:px-5 max-lg:order-2">
          <p>
            За да не се занимавате с излишни разходи в началото, давам Ви
            <strong> безплатен хостинг</strong> за една година при изработка на
            сайт. Хостингът е осигурен от моите партньори от Jump.BG, така че
            можете да разчитате на бърз и стабилен сайт без никакви допълнителни
            такси през първата година.
          </p>
          <p>
            Сайтът Ви ще работи безпроблемно, ще се зарежда бързо и ще има
            достатъчно място за всичките ти обяви. След изтичането на безплатния
            период можете да решите дали да подновите услугата или да преминете
            към по-висок хостинг план, след като бизнесът Ви се развие
            достатъчно много.
          </p>
        </div>
        <Image
          src={"/illustrations/hosting.svg"}
          alt="Хостинг и домейн"
          width={600}
          height={400}
          loading="lazy"
          className="max-lg:order-1"
        />
      </div>
    </section>
  );
}