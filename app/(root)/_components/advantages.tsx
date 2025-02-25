import Image from "next/image";

import PageLinkIcon from "@/app/_components/page-link-icon";
import PageHeading from "@/app/_components/page-heading";

export default function Advantages() {
  return (
    <section className="bg-white space-y-10 pb-10">
      <PageHeading tag={"h2"} text="Предимства на персонализираните сайтове" />
      <div className="relative z-20">
        <p className="text-lg text-center max-w-3xl mx-auto py-10 px-5 md:p-0">
          В днешния дигитален свят готовите CMS платформи като WordPress може да
          изглеждат като лесно решение, но те често водят до компромиси в
          скоростта, сигурността и гъвкавостта. С персонализирана разработка
          получавате напълно персонализирано, бързо и мащабируемо решение,
          съобразено с вашите нужди.
        </p>
        <div className="container mx-auto px-5 text-lg md:p-0 mt-10">
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <DisplayItem
              image="save-money"
              heading="По-ниски дългосрочни разходи"
              content="Макар че първоначалната инвестиция в custom сайт може да е по-висока, в дългосрочен план спестявате разходи за платени плъгини, ненужни обновления и хостинг с високи изисквания."
            />
            <DisplayItem
              image="rocket"
              heading="По-бърза скорост и висока производителност"
              content="Готовите платформи разчитат на множество плъгини и тежки теми, които забавят зареждането на страниците. При custom разработка кодът е оптимизиран и лек, което води до по-добро потребителско изживяване и по-висок рейтинг в Google."
            />
            <DisplayItem
              image="cyber-security"
              heading="Максимална сигурност"
              content="Готовите CMS често стават обект на хакерски атаки заради използването на уязвими плъгини. Custom уеб сайтът не разчита на външни зависимости, което минимизира рисковете и гарантира по-висока защита на данните."
            />
            <DisplayItem
              image="seo"
              heading="По-добра SEO-оптимизация"
              content="CMS платформите генерират ненужен код и забавят зареждането, което влияе негативно на SEO. При custom разработка сайтът е оптимизиран за търсачките, което помага за по-добро класиране в Google и повече органичен трафик."
            />
            <DisplayItem
              image="web-design"
              heading="Уникален дизайн и функционалност"
              content="Готовите теми ограничават възможностите за персонализация и често водят до еднообразни сайтове. Custom решение означава изцяло персонализиран дизайн и функционалности, изградени спрямо конкретните ви бизнес нужди."
            />
            <DisplayItem
              image="jigsaw"
              heading="Гъвкавост и лесно разширяване"
              content="При стандартните CMS, ако искате нови функционалности, често сте ограничени от възможностите на плъгините. Custom решенията дават пълна свобода за добавяне и мащабиране на функциите, без да зависите от външен софтуер."
            />
          </ul>
        </div>
      </div>
      <div className="relative text-white bg-black text-lg mt-10 py-10 min-h-[300px]">
        <Image
          src={"/illustrations/Simple Shiny.svg"}
          alt="Изработка на уеб сайтове и уеб приложения"
          fill
          className="absolute top-0 left-0 object-cover z-10"
        />
        <div className="relative z-20">
          <p className="max-w-2xl mx-auto text-center text-xl">
            Персонализираните уеб решения са по-бързи, по-сигурни, по-ефективни
            и напълно съобразени с вашите бизнес нужди. Искате модерен, уникален
            и устойчив уеб сайт, като този, който да Ви отличава от
            конкуренцията?
          </p>
          <div className="text-center mt-10">
            <PageLinkIcon
              text="Свържете се с мен"
              link="/contacts"
              icon="Phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  image: string;
  heading: string;
  content: string;
};

function DisplayItem({ image, heading, content }: DisplayItemProps) {
  return (
    <li className="relative border shadow-xl rounded-lg p-5 space-y-5 text-center hover:-translate-y-5 hover:scale-105 duration-300">
      <div className="relative z-20 space-y-5">
        <Image
          src={`/illustrations/${image}.png`}
          alt="По-ниски дългосрочни разходи"
          width={200}
          height={200}
          priority
          className="mx-auto"
        />
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p>{content}</p>
      </div>
    </li>
  );
}
