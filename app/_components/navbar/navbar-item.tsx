"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavbarItemProps = {
  text: string;
  link: string;
} & React.ComponentPropsWithoutRef<"li">;

export function NavbarItem({ text, link, ...props }: NavbarItemProps) {
  const pathname = usePathname();

  return (
    <li {...props}>
      <Link
        href={link}
        className={cn(
          "py-2 px-4 rounded hover:text-white hover:bg-secondary duration-300 block",
          pathname === link ? "text-white bg-secondary" : ""
        )}
      >
        {text}
      </Link>
    </li>
  );
}
