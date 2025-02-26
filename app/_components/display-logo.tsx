import Image from "next/image";
import Link from "next/link";

type DisplayLogoProps = {
  src: string;
}

export default function DisplayLogo({ src }: DisplayLogoProps) {
  return (
    <Link href={"/"}>
      <Image
        src={src}
        alt={process.env.NEXT_PUBLIC_WEBSITE_TITLE as string}
        width={600}
        height={120}
        priority
        className="w-[200px]"
      />
    </Link>
  );
}
