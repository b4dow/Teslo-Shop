import { Footer, Sidebar, TopMenu } from "@/components";
import { MenuProvider } from "@/context";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen md:px-5">
      <MenuProvider>
        <TopMenu />
        <Sidebar />
        {children}
        <Footer />
      </MenuProvider>
    </main>
  );
}
