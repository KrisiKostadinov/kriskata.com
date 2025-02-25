import DesktopItems from "@/app/_components/navbar/desktop-items";
import MobileItems from "@/app/_components/navbar/mobile-items";

export default function NavbarItems() {
  return (
    <nav>
      <DesktopItems className="hidden md:flex gap-2 text-lg" />
      <MobileItems className="block md:hidden text-lg" />
    </nav>
  );
}
