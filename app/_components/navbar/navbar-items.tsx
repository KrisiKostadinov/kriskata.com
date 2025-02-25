import DesktopItems from "@/app/_components/navbar/desktop-items";
import MobileItems from "@/app/_components/navbar/mobile-items";

export default function NavbarItems() {
  return (
    <nav>
      <DesktopItems className="hidden md:flex text-lg" />
      <MobileItems className="block md:hidden text-lg" />
    </nav>
  );
}
