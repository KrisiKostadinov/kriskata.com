import { Metadata } from "next";

import PageWrapper from "@/app/_components/page-wrapper";
import Hero from "@/app/contacts/_components/hero";
import ContactsInfo from "@/app/contacts/_components/contacts-info";

const metaTitle = `Контакти ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`;

export const metadata: Metadata = {
  title: metaTitle,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: metaTitle,
  }
}

export default function ContactsPage() {
  return (
    <PageWrapper>
      <Hero />
      <ContactsInfo />
    </PageWrapper>
  );
}
