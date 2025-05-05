import { Footer, Sidebar, TopMenu } from "@/components";
import { MenuProvider, CartProvider } from "@/context";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen md:px-5">
      <MenuProvider>
        <CartProvider>
          <TopMenu />
          <Sidebar />
          {children}
          <Footer />
        </CartProvider>
      </MenuProvider>
    </main>
  );
}
