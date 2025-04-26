import type { Metadata } from "next";
import { poppins } from "@/config/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Una tienda virtual de productos de Teslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>{children}</body>
    </html>
  );
}
