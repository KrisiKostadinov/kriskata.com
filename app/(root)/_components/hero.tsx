"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex flex-col gap-10">
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Image
          src={"/images/hero-home-image.png"}
          alt="Изработка на сайтове и уеб приложения"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-10"
        />
        <div className="text-white max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <p className="text-lg md:text-xl">
            Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Изработка на сайтове и уеб приложения
          </h1>
          <p className="text-lg md:text-xl">
            Креативни и функционални уеб решения за Вашия бизнес
          </p>
        </div>
      </div>
    </section>
  );
}