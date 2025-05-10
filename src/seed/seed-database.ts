import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // Borrar Registros previos
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products, users } = initialData;

  await prisma.user.createMany({ data: users });
  // Categorias
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map, category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {} as Record<string, string>,
  );

  // Productos
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const DBProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: DBProduct.id,
    }));
    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("🌱 Seeding database...");
}

(() => {
  main();
})();
