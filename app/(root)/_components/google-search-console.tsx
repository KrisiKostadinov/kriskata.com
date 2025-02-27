import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";
import PageLinkIcon from "@/app/_components/page-link-icon";

export default function GoogleSearchConsole() {
  return (
    <section className="bg-white py-10">
      <PageHeading text="Интеграция на Google search console" tag="h2" />
      <div className="container mx-auto lg:px-10 grid lg:grid-cols-2 sm:gap-10 items-center">
        <Image
          src={"/images/google-search-console.png"}
          alt="Интеграция на Google Analytics"
          width={900}
          height={600}
          priority
          className="max-lg:order-1"
        />
        <div className="text-lg lg:mt-10 py-10 px-5 md:p-0 space-y-5 max-sm:text-center max-lg:order-2">
          <p>
            Ако поръчате изработка на уеб сайт от мен, ще получите и безплатна
            интеграция с Google Search Console. Това е изключително полезен
            инструмент, който Ви помага да разберете как сайтът Ви се представя
            в Google. С него можете да следите индексирането, да откривате
            технически проблеми и да получавате ценна информация за това как
            потребителите намират Вашия сайт в търсачката.
          </p>
          <p className="text-xl font-semibold">Как ще Ви е полезен?</p>
          <ul className="space-y-2">
            <DisplayItem text="Ще виждаш на кои позиции излиза сайтът ти в Google." />
            <DisplayItem text="Ще разбереш по какви ключови думи те намират потребителите." />
            <DisplayItem text="Ще получиш данни за кликванията и импресиите от търсенето." />
            <DisplayItem text="Ще можеш да откриваш и оправяш грешки, които влияят на SEO." />
            <DisplayItem text="Ще заявиш индексиране на нови страници, за да се показват по-бързо в Google." />
          </ul>
          <p>
            С Google Search Console ще имаш ясен поглед върху това как се
            представя сайтът ти и как да го направиш още по-видим! 🚀
          </p>
          <PageLinkIcon
            icon="Phone"
            link="/contacts"
            text="Свържете се с мен"
          />
        </div>
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