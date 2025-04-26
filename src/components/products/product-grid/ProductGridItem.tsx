"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces";
import { formatCurrency } from "@/helpers";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [display, setDisplay] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in ">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${display}`}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          onMouseEnter={() => setDisplay(product.images[1])}
          onMouseLeave={() => setDisplay(product.images[0])}
          height={500}
          unoptimized
        />
      </Link>
      <div className="p-4 flex flex-col ">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold ">{formatCurrency(product.price)}</span>
      </div>
    </div>
  );
};
