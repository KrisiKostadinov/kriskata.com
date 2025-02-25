import { NavbarItem } from "@/app/_components/navbar/navbar-item";

type DesktopItemsProps = {} & React.ComponentPropsWithoutRef<"ul">;

export default function DesktopItems({ ...props }: DesktopItemsProps) {
  return (
    <ul {...props}>
      <NavbarItem text="Начало" link="/" />
      <NavbarItem text="За мен" link="/za-men" />
      <NavbarItem text="Контакти" link="/contacts" />
    </ul>
  );
}
