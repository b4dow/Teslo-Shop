"use client";

import { CartStore } from "@/store";
import { useShallow } from "zustand/shallow";
import { formatCurrency } from "@/helpers";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const { subTotal, itemsInCart, tax, total } = CartStore(
    useShallow((state) => state.getSummaryInformation()),
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2">
      <span>N° Productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 articulo" : `${itemsInCart} articulos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{formatCurrency(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{formatCurrency(tax)}</span>

      <span className="text-2xl mt-5 ">Total</span>
      <span className="mt-5 text-2xl text-right">{formatCurrency(total)}</span>
    </div>
  );
};
