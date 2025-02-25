"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavbarItemProps = {
  text: string;
  link: string;
};

export function NavbarItem({ text, link }: NavbarItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={link}
        className={cn(
          "py-2 px-4 rounded hover:text-white hover:bg-secondary duration-300",
          pathname === link ? "text-white bg-secondary" : ""
        )}
      >
        {text}
      </Link>
    </li>
  );
}
