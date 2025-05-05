"use server";

import { prisma } from "@/lib/prisma";
// import { Sleep } from "@/utils";

export const GetStockBySlug = async (slug: string): Promise<number | null> => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      select: {
        inStock: true,
      },
    });

    if (!product) return null;

    return product.inStock ?? 0;
  } catch (error) {
    console.log({ error });
    throw new Error("Error fetching stock");
  }
};
