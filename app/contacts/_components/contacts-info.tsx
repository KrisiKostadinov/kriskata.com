import Link from "next/link";

import { cn, formatPhoneNumber } from "@/lib/utils";

export default function ContactsInfo() {
  const phoneNumber = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const email = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL as string;

  return (
    <section>
      <div className="container mx-auto py-10">
        <ul className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
          <ContactItem
            title="Телефон"
            link={`tel:${phoneNumber}`}
            displayText={formattedPhone}
            buttonText="Отваряне на телефонния указател"
            bgColor="bg-green-500"
            target="_self"
          />
          <ContactItem
            title="Имейл"
            link={`https://mail.google.com/mail/?view=cm&to:${email}`}
            displayText={email}
            buttonText="Отваряне на пощата в (Gmail)"
            bgColor="bg-green-500"
            target="_black"
            className="hidden md:block"
          />
          <ContactItem
            title="Номер във Viber"
            link={`viber:${phoneNumber}`}
            displayText={formattedPhone}
            buttonText="Отваряне на приложението (Viber)"
            bgColor="bg-green-500"
            target="_self"
            className="hidden md:block"
          />
          <ContactItem
            title="Име и фамилия"
            link={`mailto:${email}`}
            displayText="Кристиан Костадинов"
            buttonText="Изпращане на съобщение по (имейл)"
            bgColor="bg-green-500"
            target="_self"
          />
          <ContactItem
            title="Профил във Facebook"
            link={"https://www.facebook.com/profile.php?id=100086479934343"}
            displayText="Кристиан Костадинов"
            buttonText="Отваряне на профила във (Facebook)"
            bgColor="bg-green-500"
            target="_black"
          />
          <ContactItem
            title="Град"
            link={
              "https://www.google.com/maps/place/%D0%94%D1%83%D0%BF%D0%BD%D0%B8%D1%86%D0%B0/@42.2631627,23.1011456,14z/data=!3m1!4b1!4m6!3m5!1s0x14aae824073f9ac1:0x400a01269bf51c0!8m2!3d42.2613275!4d23.1124424!16zL20vMDlzbnY1?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D"
            }
            displayText="Дупница"
            buttonText="Отваряне на картата в (Google Maps)"
            bgColor="bg-green-500"
            target="_black"
          />
        </ul>
      </div>
    </section>
  );
}

type ContactItemProps = {
  title: string;
  link: string;
  displayText: string;
  buttonText: string;
  bgColor: string;
  target: "_black" | "_parent" | "_self" | "_top";
  className?: string;
};

function ContactItem({
  title,
  link,
  displayText,
  buttonText,
  bgColor,
  target,
  className,
}: ContactItemProps) {
  return (
    <li
      className={cn(
        "text-center shadow-lg border-4 border-white rounded-lg overflow-hidden",
        className
      )}
    >
      <h3 className="bg-white py-5 text-3xl font-semibold">{title}</h3>
      <Link
        href={link}
        className={`block text-2xl font-semibold text-white py-5 ${bgColor}`}
      >
        {displayText}
      </Link>
      <Link
        href={link}
        target={target}
        className="text-white bg-secondary uppercase text-xl font-semibold block py-5"
      >
        {buttonText}
        <span className="block text-sm bg-white text-secondary mt-1 w-fit rounded-full px-2 mx-auto">
          Натиснете тук!
        </span>
      </Link>
    </li>
  );
}