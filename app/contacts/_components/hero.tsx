import Image from "next/image";

import PageHeading from "@/app/_components/page-heading";

export default function Hero() {
  return (
    <header className="relative w-full">
      <h1 className="bg-white text-4xl font-extrabold text-center py-10">КОНТАКТИ</h1>
      <div className="w-full h-full flex justify-center items-center bg-black relative py-10">
        <Image
          src="/images/contacts.png"
          alt="Фоново изображение - уеб програмиране"
          width={1920}
          height={600}
          priority
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <div className="text-white max-w-[900px] text-center space-y-10 px-5 md:px-0 z-10">
          <p className="text-lg md:text-xl">
            Създавам модерни, бързи и високофункционални дигитални решения,
            съобразени с най-новите технологии и UX/UI тенденции. Гарантирам
            безупречна визия, висока производителност и впечатляващо онлайн
            присъствие. Нека превърнем идеите Ви в реалност!
          </p>
          <p className="text-lg md:text-xl">
            За малки проекти заплащането се извършва след завършване на
            работата, а за по-големи проекти – поетапно, в зависимост от
            сложността и изискванията. Така имате сигурност, че инвестицията Ви
            е оправдана и проектът се развива според Вашите очаквания.
          </p>
        </div>
      </div>
      <PageHeading tag="h2" text="Информация за контакти" />
    </header>
  );
}
