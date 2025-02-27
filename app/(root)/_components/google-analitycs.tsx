import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";
import PageLinkIcon from "@/app/_components/page-link-icon";

export default function GoogleAnalitycs() {
  return (
    <section className="bg-white py-10">
      <PageHeading text="Интеграция на Google Analytics" tag="h2" />
      <div className="container mx-auto lg:px-10 grid lg:grid-cols-2 sm:gap-10 items-center">
        <div className="text-lg lg:mt-10 py-10 px-5 md:p-0 space-y-5 max-sm:text-center max-lg:order-2">
          <p>
            Всеки клиент, който заяви изработка на уеб сайт от мен, ще получи
            безплатна интеграция с Google Analytics. А какво представлява Google
            Analytics? Това е безплатна онлайн платформа, предназначена да
            улесни проследяването и анализа на трафика към Вашия сайт.
          </p>
          <p className="text-xl font-semibold">Какви ползи ще получите?</p>
          <ul className="space-y-2">
            <DisplayItem text="Проследяване на класирането на сайта Ви в Google." />
            <DisplayItem text="Анализ на ключовите думи, по които потребителите Ви намират." />
            <DisplayItem text="Информация за броя на импресиите и кликванията от търсачката." />
            <DisplayItem text="Откриване и коригиране на технически грешки, които могат да повлияят на SEO." />
            <DisplayItem text="Индексиране на нови страници за по-бързо показване в резултатите от търсенето." />
          </ul>
          <p>
            С интеграцията на Google Search Console ще имате пълен контрол върху
            SEO ефективността на Вашия сайт и ще можете да подобрите видимостта
            си в Google! 🚀
          </p>
          <PageLinkIcon
            icon="Phone"
            link="/contacts"
            text="Свържете се с мен"
          />
        </div>
        <Image
          src={"/images/google-analitycs.png"}
          alt="Интеграция на Google Analytics"
          width={900}
          height={600}
          priority
          className="max-lg:order-1"
        />
      </div>
    </section>
  );
}

type DisplayItemProps = {
  text: string;
};

function DisplayItem({ text }: DisplayItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Image
        src={"/illustrations/check-mark.png"}
        alt={text}
        width={40}
        height={40}
      />
      <span className="max-lg:text-left">{text}</span>
    </li>
  );
}