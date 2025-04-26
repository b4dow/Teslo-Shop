import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Gender } from "@/interfaces";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: Gender }>;
}

const products = initialData.products;

const CategoryPage = async (props: Props) => {
  const { id } = await props.params;

  const productsByGender = products.filter((product) => product.gender === id);

  const genders: Record<Gender, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  if (!Object.keys(genders).includes(id)) {
    notFound();
  }

  return (
    <>
      <Title title={`Articulos ${genders[id]}`} />
      <ProductGrid products={productsByGender} />
    </>
  );
};

export default CategoryPage;
