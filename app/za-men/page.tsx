import { Metadata } from "next";

import PageWrapper from "@/app/_components/page-wrapper";

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
      <h1>За мен</h1>
    </PageWrapper>
  );
}
