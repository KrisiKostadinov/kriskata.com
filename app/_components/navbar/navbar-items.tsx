import { NavbarItem } from "@/app/_components/navbar/navbar-item";

export default function NavbarItems() {
  return (
    <ul className="flex text-lg">
      <NavbarItem text="Начало" link="/" />
      <NavbarItem text="За мен" link="/za-men" />
      <NavbarItem text="Контакти" link="/contacts" />
    </ul>
  );
}
