import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative w-full min-h-[600px] py-10flex flex-col gap-10">
      <div className="w-full h-full flex justify-center items-center bg-black relative py-10">
        <Image
          src="/images/programming.png"
          alt="Фоново изображение - уеб програмиране"
          width={1920}
          height={600}
          priority
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <div className="text-white max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <Image
            src="/images/Kristian.png"
            alt="Профилна снимка на Кристиан Костадинов - уеб програмист"
            width={200}
            height={200}
            loading="lazy"
            className="object-cover mx-auto rounded-full border-4 border-gray-100 shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Кристиан Костадинов
          </h1>
          <p className="text-lg md:text-xl">
            Аз съм Кристиан, уеб програмист на свободна практика, фокусиран
            върху изграждането на ефективни, иновативни и персонализирани уеб
            решения. Работя с PHP, Node.js и други технологии, за да създавам
            бързи, сигурни и добре оптимизирани приложения, без ограниченията на
            готовите уеб сайт шаблони.
          </p>
        </div>
      </div>
    </header>
  );
}
