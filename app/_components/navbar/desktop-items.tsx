import type { NavbarItem as NavbarItemType } from "@/app/_components/navbar";
import { NavbarItem } from "@/app/_components/navbar/navbar-item";

type DesktopItemsProps = {
  navbarItems: NavbarItemType[];
} & React.ComponentPropsWithoutRef<"ul">;

export default function DesktopItems({
  navbarItems,
  ...props
}: DesktopItemsProps) {
  return (
    <ul {...props}>
      {navbarItems.map((navbarItem, index) => (
        <NavbarItem text={navbarItem.text} link={navbarItem.link} key={index} />
      ))}
    </ul>
  );
}
