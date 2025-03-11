import PageHeading from "@/app/_components/page-heading";
import { formatPrice } from "@/lib/utils";

export default function PocketsSection() {
  return (
    <section id="pockets">
      <PageHeading tag="h2" text="Ценови пакети" />
      <div className="py-5 md:py-20 px-5">
        <ul className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-10">
          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <div className="absolute -left-6 -top-2 text-white font-semibold rounded-lg bg-secondary py-2 px-4 z-40">
              ПРОМОЦИЯ
            </div>
            <h3 className="text-3xl font-semibold text-center">
              Икономичен Пакет "Бърз Старт"
            </h3>
            <p className="text-muted-foreground text-center">
              Перфектен за малки бизнеси, фрийлансъри или индивидуални
              предприемачи, които искат да започнат с минимална инвестиция.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(390)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Безплатна регистрация на домейн за 1 година + хостинг за 12
                  месеца.
                </i>
              </li>
              <li>
                До 3 основни страници (Начало, Услуги/Продукти, Контакти).
              </li>
              <li>Готов респонсив шаблон с адаптация към фирмения стил.</li>
              <li>Формуляр за контакт и връзки към социални мрежи.</li>
              <li>Основна SEO настройка (заглавия, мета описания).</li>
              <li>Бързо изпълнение – до 5 работни дни.</li>
              <li>Вграждане на лого.</li>
              <li>Напълване с информация предоставена от клиента.</li>
              <li>Адаптивен дизайн (подходящ за мобилни устройства).</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>

          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <div className="absolute -left-10 xl:-left-6 md:-top-5 text-white font-semibold rounded-lg bg-secondary py-2 px-4 z-40">
              ПРОМОЦИЯ
            </div>
            <h3 className="text-3xl font-semibold text-center">
              Пакет "Видимост"
            </h3>
            <p className="text-muted-foreground text-center">
              Идеален за малък бизнес, който иска професионално онлайн
              присъствие без големи инвестиции.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(590)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Настройване на фирмен email (yourname@yourdomain.com).
                </i>
              </li>
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Безплатна изработка на професионално лого.
                </i>
              </li>
              <li>
                До 5 страници (Начало, За нас, Услуги/Продукти, Галерия,
                Контакти).
              </li>
              <li>Мобилно-оптимизиран дизайн по готов шаблон.</li>
              <li>Интегрирана форма за запитвания.</li>
              <li>Връзка със социални мрежи.</li>
              <li>Напълване с информация предоставена от клиента.</li>
              <li>Базова SEO оптимизация (заглавия, ключови думи).</li>
              <li>Интеграция с Google Карта.</li>
              <li>Време за изработка: до 7 работни дни.</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>

          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <div className="absolute -left-10 xl:-left-6 md:-top-5 text-white font-semibold rounded-lg bg-secondary py-2 px-4 z-40">
              ПРОМОЦИЯ
            </div>
            <h3 className="text-3xl font-semibold text-center">
              Пакет "Бизнес Онлайн"
            </h3>
            <p className="text-muted-foreground text-center">
              Подходящ за малки и средни компании, които искат по-завършено
              представяне и по-голяма функционалност.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(790)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Безплатна регистрация на домейн за 1 година + хостинг за 12
                  месеца.
                </i>
              </li>
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Настройване на фирмен email (yourname@yourdomain.com).
                </i>
              </li>
              <li>До 8 страници (вкл. портфолио, новини или блог).</li>
              <li>Мобилно-оптимизиран дизайн по готов шаблон.</li>
              <li>Респонсив дизайн с персонализация на цветове и лого.</li>
              <li>Интегрирана форма за запитвания.</li>
              <li>Връзка със социални мрежи.</li>
              <li>Базова SEO оптимизация (заглавия, ключови думи).</li>
              <li>Интеграция с Google Карта.</li>
              <li>Време за изработка: до 7 работни дни.</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>

          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <div className="absolute left-10 xl:-left-6 md:-top-5 text-white font-semibold rounded-lg bg-secondary py-2 px-4 z-40">
              ПРОМОЦИЯ
            </div>
            <h3 className="text-3xl font-semibold text-center">
              Базов пакет "Старт"
            </h3>
            <p className="text-muted-foreground text-center">
              Идеален за малки бизнеси и стартъпи, които искат да имат
              професионално онлайн присъствие.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(1200)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Безплатна регистрация на домейн за 1 година + хостинг за 12
                  месеца.
                </i>
              </li>
              <li>
                <i>
                  <strong className="font-semibold text-secondary">
                    Промоция
                  </strong>
                  : Настройване на един или повече фирмени имейли
                  (yourname@yourdomain.com).
                </i>
              </li>
              <li>
                До 5 вътрешни страници (Начало, За нас, Услуги, Галерия,
                Контакти).
              </li>
              <li>
                Модерен респонсив дизайн (подходящ за мобилни устройства).
              </li>
              <li>
                Интеграция с формуляр за запитвания и основни социални мрежи.
              </li>
              <li>Базова SEO оптимизация</li>
              <li>Бързо зареждане на страниците на сайта</li>
              <li>Интеграция с Google Analytics.</li>
              <li>
                Начална SEO оптимизация + регистрация в Google My Business.
              </li>
              <li>Безплатна поддръжка за първите 30 дни</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>

          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <h3 className="text-3xl font-semibold text-center">
              Бизнес пакет "Развитие"
            </h3>
            <p className="text-muted-foreground text-center">
              Подходящ за утвърдени фирми, които искат по-детайлно представяне и
              допълнителни функционалности.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(2400)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>До 15 вътрешни страници.</li>
              <li>Индивидуален дизайн спрямо бранда на компанията.</li>
              <li>Галерия/портфолио с неограничен брой проекти.</li>
              <li>Интегрирана форма за оферти/запитвания.</li>
              <li>Многоезична поддръжка (до 2 езика).</li>
              <li>Разширена SEO оптимизация.</li>
              <li>Интеграция с Google Analytics и Google Maps.</li>
              <li>Бързо зареждане на страниците на сайта.</li>
              <li>2 месеца безплатна поддръжка.</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>

          <li className="bg-white relative border-4 border-gray-100 p-5 lg:p-10 shadow-lg rounded space-y-5 text-lg">
            <h3 className="text-3xl font-semibold text-center">
              Корпоративен пакет "Премиум"
            </h3>
            <p className="text-muted-foreground text-center">
              Идеален за големи компании, които търсят мащабно онлайн присъствие
              и специфични решения.
            </p>
            <div className="text-2xl font-semibold text-center">
              {formatPrice(5000)}
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>Неограничен брой страници и секции.</li>
              <li>
                Персонализиран UX/UI дизайн, съобразен с потребителското
                изживяване.
              </li>
              <li>
                Интеграция с външни системи (CRM, ERP, складови системи и др.).
              </li>
              <li>Онлайн каталог или продуктов листинг.</li>
              <li>Интегрирана форма за оферти/запитвания.</li>
              <li>Многоезична поддръжка (до 4 езика).</li>
              <li>Разширена SEO оптимизация.</li>
              <li>Внедряване на чат система за комуникация с клиенти.</li>
              <li>3 месеца безплатна техническа поддръжка.</li>
            </ul>
            <p>
              <strong className="font-semibold">Важно</strong>: тази цена не е
              крайна, така че подлежи на договаряне, според изискванията на
              клиента.
            </p>
            <div className="text-center">
              <button className="text-xl text-white bg-secondary hover:bg-primary duration-300 py-5 px-10 rounded-lg">
                Направете запитване
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}