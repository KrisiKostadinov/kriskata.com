import * as LucideIcons from "lucide-react";
import Link from "next/link";

import { ClientIcon } from "@/components/client-icon";
import { cn } from "@/lib/utils";

type PageLinkIconProps = {
  text: string;
  link: string;
  icon: keyof typeof LucideIcons;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">;

export default function PageLinkIcon({
  text,
  link,
  icon,
  className,
  ...props
}: PageLinkIconProps) {
  return (
    <Link
      href={link}
      className={cn(
        "flex gap-2 items-center w-fit text-xl text-white bg-primary hover:bg-secondary rounded-lg py-4 px-10 duration-300",
        className
      )}
      {...props}
    >
      <ClientIcon name={icon} />
      <span>{text}</span>
    </Link>
  );
}