import PageHeading from "@/app/_components/page-heading";
import { formatPrice } from "@/lib/utils";

export default function Plan() {
  return (
    <section id="plan" className="bg-white py-10">
      <PageHeading text="План за създаване на сайт за обяви" tag="h2" />
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-lg space-y-6 py-5 md:py-10 max-md:px-5">
          <p className="max-w-xl mx-auto">
            Това е примерен план за изработка на сайт за публикуване на обяви.
            Ще разгледаме основните функционалности и възможности, които сайтът
            ще предлага.
          </p>
          <div className="shadow-lg rounded-md p-10 border-t space-y-5">
            <h3 className="text-2xl font-semibold">Описание на проекта</h3>
            <p>
              Сайтът за обяви ще предоставя платформа за публикуване, управление
              и търсене на различни обяви (напр. недвижими имоти, автомобили,
              работа, услуги и др.). Ще разполага с интуитивен интерфейс и
              адаптивен дизайн, за да бъде достъпен както от настолни компютри,
              така и от мобилни устройства.
            </p>
            <h3 className="text-2xl font-semibold">Основни функционалности</h3>
            <ul className="text-left space-y-2">
              <li>
                <strong className="text-xl">Регистрация и вход</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Регистрация чрез имейл или социални мрежи (Google,
                    Facebook).
                  </li>
                  <li>
                    Различни нива на потребители (обикновени потребители, бизнес
                    профили, администратори).
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">Публикуване на обяви</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Потребителите могат да добавят нови обяви с изображения,
                    заглавие, описание, цена и контакти.
                  </li>
                  <li>
                    Опция за маркиране на обява като &quot;ВИП&quot; или &quot;Специална&quot;.
                  </li>
                  <li>Възможност за редактиране и изтриване на обявите.</li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">Категории и филтри</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Категории по типове обяви (напр. недвижими имоти,
                    автомобили, услуги и др.).
                  </li>
                  <li>
                    Филтриране по цена, местоположение, дата на публикуване и
                    ключови думи.
                  </li>
                  <li>Търсачка с автоматично довършване.</li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">Чат и комуникация</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Вграден чат между потребителите за директна комуникация.
                  </li>
                  <li>Система за известия при получено съобщение.</li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">Плащания и монетизация</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Интеграция с онлайн плащания (Stripe, PayPal, Revolut) за
                    премиум обяви.
                  </li>
                  <li>Абонаментни планове за бизнес потребители.</li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">SEO и анализи:</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    Оптимизация за търсачки (SEO-friendly URL-и, мета тагове).
                  </li>
                  <li>
                    Google Analytics за следене на трафика и поведението на
                    потребителите.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-xl">Модерация и сигурност</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>Опция за докладване на обяви и потребители.</li>
                  <li>Автоматична проверка за спам и фалшиви обяви.</li>
                  <li>SSL сертификат за сигурност.</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold">Цена и време за разработка</h3>
            <ul className="text-left space-y-2">
              <li>
                <strong>Базов пакет (основни функции)</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    от {formatPrice(1000)} до {formatPrice(2500)} лв.
                  </li>
                  <li>Време за разработка: 1-2 седмици</li>
                </ul>
              </li>
              <li>
                <strong>Разширен пакет (премиум функции, чат, плащания)</strong>
                <ul className="ml-10 list-disc space-y-2 pt-2">
                  <li>
                    от {formatPrice(3000)} до {formatPrice(6000)} лв.
                  </li>
                  <li>Време за разработка: 2-4 седмици</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}