import { Footer, Sidebar, TopMenu } from "@/components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen md:px-5">
      <TopMenu />
      <Sidebar />
      {children}
      <Footer />
    </main>
  );
}
