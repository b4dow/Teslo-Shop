import type { Metadata } from "next";
import { poppins } from "@/config/font";
import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Una tienda virtual de productos de Teslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Provider>{children} </Provider>
      </body>
    </html>
  );
}
