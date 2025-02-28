import PageLinkIcon from "@/app/_components/page-link-icon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] py-10flex flex-col gap-10">
      <div className="w-full h-full flex justify-center items-center bg-black relative py-10">
        <Image
          src="/images/classfield-hero-background.png"
          alt="Фоново изображение - уеб програмиране"
          width={1920}
          height={600}
          priority
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <div className="text-white text-xl max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Изработка на сайт за обяви
          </h1>
          <p>
            Аз съм уеб програмист на свободна практика, който създава сайтове и
            уеб приложения. Мога да направя за Вас модерна, функционална и лесна
            за управления онлайн платформа, която да отговаря на изцяло на
            Вашите изисквания.
          </p>
          <p>
            Мога да изградя необходимите функционалности, които улесняват
            публикуването и управлението на обяви. Също така, сайта ще е
            технически оптимизиран за много бързо зареждане на страниците,
            подобно на сайтът, който в момента използвате и напълно адаптивен за
            всички устройства.
          </p>
          <PageLinkIcon
            icon="ChevronDown"
            link="#functionalities"
            text="Вижте повече"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
