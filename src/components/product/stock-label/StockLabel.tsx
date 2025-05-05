"use client";

import { GetStockBySlug } from "@/actions";
import { titleFont } from "@/config/font";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    //TODO: llamar al stock
    const stock = await GetStockBySlug(slug);
    setStock(stock!);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-sm bg-gray-200 animate-pulse`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-sm `}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
