import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";

export default function Support() {
  return (
    <section className="bg-white">
      <PageHeading text="Поддръжка на сайта" tag="h2" />
      <div className="container mx-auto grid lg:grid-cols-2 items-center lg:gap-10 px-5">
        <Image
          src={"/illustrations/hosting.svg"}
          alt="Поддръжка на сайта"
          width={600}
          height={400}
          loading="lazy"
          className="max-lg:order-1"
        />
        <div className="text-lg max-lg:text-center py-5 md:py-10 space-y-6 max-md:px-5 max-lg:order-2">
          <p>
            След като сайтът Ви за обяви е готов, аз осигурявам постоянна
            поддръжка, за да сте сигурни, че всичко работи безпроблемно.
            Поддръжка включва редовни обновления на системата, както и бързо
            решение на всякакви технически проблеми, които могат да възникнат.
          </p>
          <p>
            В случай че имате нужда от помощ или искате да добавите нови функции
            към сайта си, аз съм тук, за да Ви съдействам. Всички актуализации,
            настройки и техническа оптимизация ще бъдат извършени от мен, без да
            се налага да се притеснявате.
          </p>
          <p>
            Можете да разчитате на мен за бърза и надеждна помощ, за да може
            Вашият сайт за обяви да работи винаги на високо ниво.
          </p>
        </div>
      </div>
    </section>
  );
}
