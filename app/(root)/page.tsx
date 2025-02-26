import { Metadata } from "next";

import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/(root)/_components/hero";
import Advantages from "@/app/(root)/_components/advantages";
import PriceAndBudget from "@/app/(root)/_components/price-and-budget";
import TechStack from "@/app/(root)/_components/tech-stack";
import Backups from "@/app/(root)/_components/backups";
import GoogleAnalitycs from "@/app/(root)/_components/google-analitycs";
import GoogleSearchConsole from "@/app/(root)/_components/google-search-console";

const metaTitle = `Изработка на сайтове и приложения ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`;

export const metadata: Metadata = {
  title: metaTitle,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: metaTitle,
  }
}

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Advantages />
      <PriceAndBudget />
      <TechStack />
      <Backups />
      <GoogleAnalitycs />
      <GoogleSearchConsole />
    </PageWrapper>
  );
}
