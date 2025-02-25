import DisplayLogo from "@/app/_components/display-logo";
import NavbarItems from "@/app/_components/navbar/navbar-items";

export default function Navbar() {
  return (
    <header>
      <div className="bg-white w-full h-[60px] flex justify-between items-center">
        <div className="container mx-auto w-full h-full flex justify-between items-center">
          <DisplayLogo />
          <NavbarItems />
        </div>
      </div>
    </header>
  );
}
