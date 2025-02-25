import { Metadata } from "next";

import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/(root)/_components/hero";

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
      <h1>Начало</h1>
    </PageWrapper>
  );
}
