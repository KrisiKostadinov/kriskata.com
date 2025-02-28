import { NavbarItem } from "@/app/_components/navbar";
import DesktopItems from "@/app/_components/navbar/desktop-items";
import MobileItems from "@/app/_components/navbar/mobile-items";

type Props = {
  navbarItems: NavbarItem[];
}

export default function NavbarItems({ navbarItems }: Props) {
  return (
    <nav>
      <DesktopItems navbarItems={navbarItems} className="hidden md:flex gap-2 text-lg" />
      <MobileItems navbarItems={navbarItems} className="block md:hidden text-lg" />
    </nav>
  );
}
