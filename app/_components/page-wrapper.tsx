import { ReactNode } from "react";

import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <main className="w-full min-h-screen">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}