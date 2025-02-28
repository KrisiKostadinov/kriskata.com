import DisplayLogo from "@/app/_components/display-logo";
import NavbarItems from "@/app/_components/navbar/navbar-items";

export type NavbarItem = {
  text: string;
  link: string;
}

const navbarItems: NavbarItem[] = [
  {
    text: "Начало",
    link: "/",
  },
  {
    text: "Сайт за обяви",
    link: "/services/creation-of-a-classifieds-website",
  },
  {
    text: "За мен",
    link: "/about",
  },
  {
    text: "Контакти",
    link: "/contacts",
  }
];

export default function Navbar() {
  return (
    <header>
      <div className="bg-white w-full h-[60px] border-b flex justify-between items-center px-5 md:p-0">
        <div className="container mx-auto w-full h-full flex justify-between items-center">
          <DisplayLogo src="/logo.png" />
          <NavbarItems navbarItems={navbarItems} />
        </div>
      </div>
    </header>
  );
}
