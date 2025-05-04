import { Pagination, ProductGrid, Title } from "@/components";
import { notFound, redirect } from "next/navigation";
import { GetPaginatedProductsWithImages } from "@/actions";

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{ page?: string }>;
}

const GenderPage = async (props: Props) => {
  const { gender } = await props.params;
  const { page } = await props.searchParams;
  const pageNumber = page ? +page : 1;

  const { products, totalPages } = await GetPaginatedProductsWithImages({
    gender,
    page: pageNumber,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const genders: Record<string, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  if (!Object.keys(genders).includes(gender)) {
    notFound();
  }

  return (
    <>
      <Title title={`Articulos ${genders[gender]}`} />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
};

export default GenderPage;
