import { formatPhoneNumber } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import DisplayLogo from "./display-logo";

const suffix = `${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`;

export default function Footer() {
  return (
    <footer>
      <div className="text-white bg-black/95 px-5 py-10">
        <ul className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-10">
          <li className="space-y-5">
            <DisplayLogo src="/logo-dark.png" />
            <p>
              Професионална уеб разработка на иновативни, високофункционални и
              съвременни уеб сайтове и уеб приложения, съобразени с най-новите
              технологии и UX/UI тенденции.
            </p>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl font-semibold">Бързи връзки</h2>
            <ul className="space-y-2 text-lg">
              <FooterLink
                title={`Началната страница ${suffix}`}
                text="Начало"
                link="/"
              />
              <FooterLink
                title={`За мен ${suffix}`}
                text="За мен"
                link="/about"
              />
              <FooterLink
                title={`Контакти ${suffix}`}
                text="Контакти"
                link="/contacts"
              />
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl font-semibold">Правни страници</h2>
            <ul className="space-y-2 text-lg">
              <FooterLink
                title={`Политика на бисквитки ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}
                text="Политика на бисквитки"
                link="/cookie-policy"
              />
              <FooterLink
                title={`Общи условия ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}
                text="Общи условия"
                link="/terms-of-service"
              />
              <FooterLink
                title={`Политика на поверителност ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}
                text="Политика на поверителност"
                link="/privacy-policy"
              />
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl font-semibold">За контакти</h2>
            <ul className="space-y-2 text-lg">
              <FooterLink
                title={process.env.NEXT_PUBLIC_WEBSITE_TITLE as string}
                text={formatPhoneNumber(
                  process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string
                )}
                link={`tel:${formatPhoneNumber(
                  process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string
                )}`}
              />
              <FooterLink
                title={`Общи условия ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}
                text={process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL as string}
                link={`mailto:${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL}`}
              />
              <FooterLink
                title={process.env.NEXT_PUBLIC_WEBSITE_TITLE as string}
                text="Кристиан Костадинов"
                link="/about"
              />
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-center text-lg py-5 text-white bg-black">
        &copy; {new Date().getFullYear()} All Rights Reversed.
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  title: string;
  text: string;
  link: string;
};

function FooterLink({ title, text, link }: FooterLinkProps) {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center gap-2 hover:translate-x-1 hover:text-secondary duration-300"
        title={title}
      >
        <ChevronRight />
        <span>{text}</span>
      </Link>
    </li>
  );
}
