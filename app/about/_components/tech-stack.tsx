import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";

export default function TechStack() {
  return (
    <section className="bg-white" aria-labelledby="tech-stack-heading">
      <PageHeading
        text="Използвани от мен технологии"
        tag="h2"
        id="tech-stack-heading"
      />
      <div className="container mx-auto py-10 px-5 md:px-0">
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
          <DisplayItem
            src="/technologies/javascript.png"
            alt="JavaScript - основен език за Front-end разработка"
          />
          <DisplayItem
            src="/technologies/next.png"
            alt="Next.js - Full-stack framework за React"
          />
          <DisplayItem
            src="/technologies/nodejs.png"
            alt="Node.js - среда за изпълнение на JavaScript на сървъра"
          />
          <DisplayItem
            src="/technologies/react.png"
            alt="React - библиотека за изграждане на UI"
          />
          <DisplayItem
            src="/technologies/typescript.png"
            alt="TypeScript - статично типизиран JavaScript"
          />
          <DisplayItem
            src="/technologies/tailwind.png"
            alt="Tailwind CSS - бърз CSS framework"
          />
          <DisplayItem
            src="/technologies/mysql.png"
            alt="MySQL - релационна база данни за уеб приложения"
          />
          <DisplayItem
            src="/technologies/mongodb.png"
            alt="MongoDB - NoSQL база данни за гъвкаво съхранение на данни"
          />
          <DisplayItem
            src="/technologies/html5.png"
            alt="HTML5 - основен език за структура на уеб страниците"
          />
          <DisplayItem
            src="/technologies/css.png"
            alt="CSS - стилове за дизайн и оформление на уеб сайтове"
          />
          <DisplayItem
            src="/technologies/seo.png"
            alt="SEO - оптимизация за търсачки за по-добра видимост в Google"
          />
          <DisplayItem
            src="/technologies/rest-api.png"
            alt="REST API - архитектурен стил за комуникация между уеб услуги"
          />
        </ul>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  src: string;
  alt: string;
};

function DisplayItem({ src, alt }: DisplayItemProps) {
  return (
    <li className="border-4 border-gray-100 rounded-md p-10">
      <Image
        src={src}
        alt={alt}
        width={240}
        height={240}
        title={alt}
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </li>
  );
}
