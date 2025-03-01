import Image from "next/image";

import PageLinkIcon from "@/app/_components/page-link-icon";

export default function Hero() {
  return (
    <section className="relative w-full py-10flex flex-col gap-10">
      <div className="w-full h-full flex justify-center items-center bg-black relative py-10">
        <Image
          src="/images/izrabotka-na-company-website.png"
          alt="Фоново изображение - уеб програмиране"
          width={1920}
          height={600}
          priority
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <div className="text-white text-xl max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Изработка на фирмен сайт
          </h1>
          <p>
            Аз съм независим уеб програмист с богат опит в създаването на
            сайтове и уеб приложения. Готов съм да разработя за Вас модерен,
            интуитивен и напълно функционален фирмен уеб сайт, съобразен изцяло
            с Вашите нужди и изисквания.
          </p>
          <p>
            Искате фирмен уебсайт? Няма проблем! Ще Ви направя такъв, че дори
            конкуренцията да започне да го разглежда със завист. Чист, бърз и
            лесен за управление – точно както трябва. Ще има всичко важно:
            информация за бизнеса Ви, услуги, контактна форма, а ако трябва –
            дори секция за котката на шефа. Кажете какво Ви трябва, а аз ще го
            превърна в реалност! 😎
          </p>
          <PageLinkIcon
            icon="ChevronDown"
            link="#more-details"
            text="Вижте повече"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
