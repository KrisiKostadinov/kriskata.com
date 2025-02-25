import * as LucideIcons from "lucide-react";
import Link from "next/link";

import { ClientIcon } from "@/components/client-icon";

type PageLinkIconProps = {
  text: string;
  link: string;
  icon: keyof typeof LucideIcons;
};

export default function PageLinkIcon({
  text,
  link,
  icon,
}: PageLinkIconProps) {
  return (
    <Link
      href={link}
      className="flex gap-2 items-center w-fit mx-auto text-xl text-white bg-primary hover:bg-secondary rounded-lg py-4 px-10 duration-300"
    >
      <ClientIcon name={icon} />
      <span>{text}</span>
    </Link>
  );
}
