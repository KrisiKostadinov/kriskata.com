import PageHeading from "@/app/_components/page-heading";

export default function WorkProcess() {
  return (
    <section className="bg-white">
      <PageHeading text="Начин на работа" tag="h2" />
      <div className="container mx-auto py-10">
        <p className="max-w-xl mx-auto text-center text-lg">
          Създаването на уеб сайт или уеб приложение е процес, който изисква
          добра комуникация, стратегическо планиране и внимание към детайлите.
          Ето как протича моята работа:
        </p>
      </div>
      <div className="container mx-auto pb-10 text-lg text-center px-5 md:px-0">
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          <WorkStep
            image="/illustrations/meeting.svg"
            title="Консултация и анализ"
            description="Провеждам среща с клиента, за да разбера целите на проекта, целевата аудитория и ключовите функционалности."
          />
          <WorkStep
            image="/illustrations/planning.svg"
            title="Планиране и стратегия"
            description="Определяме целите на проекта, функционалностите и ключовите аспекти за UX/UI, за да изградим ефективна стратегия за разработка."
          />
          <WorkStep
            image="/illustrations/development.svg"
            title="Разработка и интеграция"
            description="Изграждам функционалността на уеб сайта с помощта на модерни технологии и оптимизирам производителността."
          />
          <WorkStep
            image="/illustrations/testing.svg"
            title="Тестване и оптимизация"
            description="Провеждам обстойно тестване на уеб сайта, за да гарантирам неговата бързина, сигурност и безпроблемна работа на всички устройства."
          />
          <WorkStep
            image="/illustrations/rocket-1.svg"
            title="Пускане на сайта"
            description="След като всичко е финализирано и клиентът е доволен, уеб сайтът се качва на жив сървър с необходимите настройки за SEO и сигурност."
          />
          <WorkStep
            image="/illustrations/support.svg"
            title="Поддръжка и развитие"
            description="Осигурявам поддръжка и допълнителни подобрения според нуждите на клиента, за да гарантирам дългосрочната ефективност на уеб сайта."
          />
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";

type WorkStepProps = {
  image: string;
  title: string;
  description: string;
};

function WorkStep({ image, title, description }: WorkStepProps) {
  const titleId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <article
      className="border-4 border-gray-100 rounded-md p-5 space-y-5 hover:shadow-lg duration-300"
      aria-labelledby={titleId}
    >
      <Image
        src={image}
        alt={`${title} - етап от процеса на работа`}
        width={400}
        height={300}
        loading="lazy"
        className="w-[400px] h-[300px] mx-auto object-contain"
      />
      <h3 id={titleId} className="text-2xl font-semibold">
        {title}
      </h3>
      <p>{description}</p>
    </article>
  );
}