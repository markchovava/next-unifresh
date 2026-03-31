import type { Metadata } from "next";
import HeaderDefault from "./_components/headers/HeaderDefault";
import Footer from "./_components/footers/Footer";


export const metadata: Metadata = {
  title: "Unifresh",
  description: "Unifresh",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <HeaderDefault />
    {children}
    <Footer />
    </>
  );
}
