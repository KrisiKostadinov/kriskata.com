import Image from "next/image";
import PageHeading from "@/app/_components/page-heading";
import PageLinkIcon from "@/app/_components/page-link-icon";

export default function Portfolio() {
  return (
    <section className="bg-white">
      <PageHeading text="Малка част от моите проекти" tag="h2" />
      <div className="container mx-auto py-5 lg:py-10 text-lg text-center md:text-xl max-lg:px-5">
        <ul className="grid lg:grid-cols-2 gap-10">
          <DisplayItem
            heading="Тапицер Експрес"
            link="https://tapicerexpress.com"
            src="/tapicerexpress.png"
            alt="уеб сайт за тапицерски услуги - Тапицер Експрес"
            text="Изработка на уеб сайт за тапицерски услуги."
          />
          <DisplayItem
            heading="Ясен Строй"
            link="https://qsenstroi.com"
            src="/yasen-stroi.png"
            alt="уеб сайт за ремонт на покриви - Ясен Строй"
            text="Изработка на уеб сайт за ремонт на покриви."
          />
          <DisplayItem
            heading="Елит Конструкшън"
            link="https://elitconstrykshan.com"
            src="/elitconstrykshan.png"
            alt="уеб сайт за ремонт на покриви - Елит Конструкшън"
            text="Изработка на уеб сайт за ремонт на покриви."
          />
          <DisplayItem
            heading="Автошкола Купандолски"
            link="https://kupandolski.com"
            src="/kupandolski.png"
            alt="Редизайн на уеб сайт - Автошкола Купандолски"
            text="Редизайн на уеб сайта на Автошкола Купандолски."
          />
        </ul>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  heading: string;
  src: string;
  alt: string;
  text: string;
  link: string;
};

function DisplayItem({ heading, src, alt, text, link }: DisplayItemProps) {
  return (
    <li className="space-y-5 shadow-lg rounded-md py-5">
      <h3 id={heading.replace(/\s+/g, "-").toLowerCase()} className="text-center text-3xl font-extrabold">
        {heading}
      </h3>
      <figure className="mx-auto md:w-[600px]">
        <Image
          src={`/portfolio${src}`}
          alt={alt}
          width={600}
          height={400}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
        <figcaption className="text-sm text-gray-500 mt-2">{text}</figcaption>
      </figure>
      <PageLinkIcon
        text="Вижте проекта"
        icon="Globe"
        link={link}
        className="mx-auto"
        target="_blank"
        aria-label={`Разгледайте проекта ${heading}`}
      />
    </li>
  );
}