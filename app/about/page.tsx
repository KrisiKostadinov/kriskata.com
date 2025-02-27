import { Metadata } from "next";

import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/about/_components/hero";
import Portfolio from "@/app/about/_components/portfolio";
import TechStack from "@/app/about/_components/tech-stack";

const metaTitle = `За мен ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`;

export const metadata: Metadata = {
  title: metaTitle,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: metaTitle,
  }
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <Hero />
      <Portfolio />
      <TechStack />
    </PageWrapper>
  );
}
