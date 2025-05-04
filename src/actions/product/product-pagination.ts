"use server";

import { prisma } from "@/lib/prisma";
import { Gender } from "@/generated/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: string;
}

export const GetPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) => {
  if (isNaN(+page)) page = 1;

  if (page < 1) page = 1;

  try {
    //1. Obtener los productos
    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      take: take,
      skip: (page - 1) * take,
      where: {
        gender: gender as Gender,
      },
    });

    //2. Obtener el total de paginas
    // TODO: hacerlo con un Promise.all
    const totalCount = await prisma.product.count({
      where: {
        gender: gender as Gender,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
