"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { NavbarItem as NavbarItemType } from "@/app/_components/navbar";
import { cn, formatPhoneNumber } from "@/lib/utils";
import { NavbarItem } from "@/app/_components/navbar/navbar-item";

type MobileItemsProps = {
  navbarItems: NavbarItemType[];
} & React.ComponentPropsWithoutRef<"div">;

export default function MobileItems({
  navbarItems,
  ...props
}: MobileItemsProps) {
  const [open, setOpen] = useState(false);

  return (
    <div {...props}>
      <MenuIcon
        className="hover:text-white hover:bg-secondary active:text-white active:bg-secondary p-4 rounded w-[60px] h-[60px] cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <div
        className={cn(
          "fixed top-0 left-0 w-full min-h-screen bg-black z-40 duration-300",
          open
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(!open)}
      />
      <div
        className={cn(
          "bg-white fixed top-0 right-0 w-3/4 min-h-screen z-40 px-5 pt-5 shadow border-l duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-5 text-lg">Уеб програмист на свободна практика</div>
        
        <ul className="space-y-2">
          {navbarItems.map((navbarItem, index) => (
            <NavbarItem
              text={navbarItem.text}
              link={navbarItem.link}
              className="bg-gray-100 rounded"
              onClick={() => setOpen(!open)}
              key={index}
            />
          ))}
          <NavbarItem
            text={formatPhoneNumber(
              process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string
            )}
            link={`tel:${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE}`}
            className="bg-gray-100 rounded"
            onClick={() => setOpen(!open)}
          />
        </ul>
      </div>
    </div>
  );
}
