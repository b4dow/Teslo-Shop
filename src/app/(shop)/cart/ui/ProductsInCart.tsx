"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { formatCurrency } from "@/helpers";
import Link from "next/link";
import { CartStore } from "@/store";

export const ProductsInCart = () => {
  const ProductInCart = CartStore((state) => state.cart);
  const updatedProductInCart = CartStore(
    (state) => state.updateProductQuantity,
  );
  const removeProductInCart = CartStore((state) => state.removeProduct);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {ProductInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            style={{ width: "100px", height: "100px" }}
            className="mr-5 rounded"
            unoptimized
          />
          <div className="">
            <Link
              href={`/product/${product.slug}`}
              className="hover:underline cursor-pointer"
            >
              {product.size} {product.title}
            </Link>
            <p>{formatCurrency(product.price)}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) =>
                updatedProductInCart(product, quantity)
              }
            />
            <button
              className="hover:underline mt-3 cursor-pointer"
              onClick={() => removeProductInCart(product)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
