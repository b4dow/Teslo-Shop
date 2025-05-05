import { GetProductBySlug } from "@/actions";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/font";
import { formatCurrency } from "@/helpers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await GetProductBySlug(slug);

  return {
    title: product?.title ?? "Product no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Product no encontrado",
      description: product?.description ?? "",

      // images: [`/products/${product?.images[1]}`],
    },
  };
}

const ProductPage = async (props: Props) => {
  const { slug } = await props.params;

  const product = await GetProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 b-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop SlideShow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-md `}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{formatCurrency(product.price)}</p>
        {/* Selector de Tallas */}
        <AddToCart product={product} />
        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
