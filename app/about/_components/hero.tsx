import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex flex-col gap-10">
      <div className="w-full h-full flex justify-center items-center bg-black">
        <Image
          src={"/images/programming.png"}
          alt="Изработка на сайтове и уеб приложения"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="text-white max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <Image
            src={"/images/Kristian.png"}
            alt="Кристиан Костадинов"
            width={200}
            height={200}
            priority
            className="object-cover mx-auto rounded-full border-4 border-gray-100 shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Кристиан Костадинов
          </h1>
          <div className="text-lg md:text-xl">
            <p>
              Аз съм Кристиан, уеб програмист на свободна практика, фокусиран
              върху изграждането на ефективни, иновативни и персонализирани уеб
              решения. Работя с PHP, Node.js и други технологии, за да създавам
              бързи, сигурни и добре оптимизирани приложения, без ограниченията
              на готовите уеб сайт шаблони.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
