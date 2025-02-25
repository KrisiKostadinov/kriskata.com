import Image from "next/image";
import Link from "next/link";

export default function DisplayLogo() {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.png"}
        alt={process.env.NEXT_PUBLIC_WEBSITE_TITLE as string}
        width={200}
        height={40}
        priority
      />
    </Link>
  );
}
