import Image from "next/image";
import * as LucideIcons from "lucide-react";

import PageLinkIcon from "@/app/_components/page-link-icon";

type Props = {
  headline: string;
  text: string;
  buttonText: string;
  link: string;
  icon: keyof typeof LucideIcons;
};

export default function CallToAction({
  headline,
  text,
  buttonText,
  link,
  icon,
}: Props) {
  return (
    <div className="relative text-white bg-black text-lg py-10 max-md:px-5 min-h-[300px]">
      <Image
        src={"/illustrations/kriskata-red-background.svg"}
        alt="Изработка на уеб сайтове и уеб приложения"
        fill
        className="absolute top-0 left-0 object-cover z-10"
      />
      <div className="max-w-2xl mx-auto relative z-20 space-y-5">
        <h2 className="text-center text-4xl mt-5">{headline}</h2>
        <p className="text-lg text-center">{text}</p>
        <div className="text-center mt-10">
          <PageLinkIcon
            text={buttonText}
            link={link}
            icon={icon}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
