import { GetPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  console.log({ pageNumber });
  const { products, totalPages } = await GetPaginatedProductsWithImages({
    page: pageNumber,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <div>
      <Title title="Tienda" subtitle="Todos los Productos" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
