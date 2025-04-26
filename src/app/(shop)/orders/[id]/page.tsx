import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { formatCurrency } from "@/helpers";
import { clsx } from "clsx";
import { IoCardOutline } from "react-icons/io5";

const ProductsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: Promise<{ id: string }>;
}

const OrderPage = async ({ params }: Props) => {
  const { id } = await params;
  //TODO: verificar
  //TODO redirect

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Orden #${id}`} />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5 ">
            <div
              className={clsx(
                "flex items-center  rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                },
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Orden pagada</span>
            </div>
            {/* Items */}
            {ProductsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                  className="mr-5 rounded"
                  unoptimized
                />
                <div className="">
                  <p>{product.title}</p>
                  <p>{formatCurrency(product.price * 3)}</p>
                  <QuantitySelector quantity={3} />
                </div>
              </div>
            ))}
          </div>
          {/* Checkout - Resumen de la compra*/}
          <div className="bg-white rounded-xl shadow-xl p-7 ">
            <h2 className="text-2xl mb-2 ">Dirección de entrega</h2>
            <div className="mb-10 ">
              <p className="text-2xl">Fernando Herrera</p>
              <p>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cuahtemoch</p>
              <p>Ciudad de Mexico</p>
              <p>CP 12112</p>
              <p>123.123.123</p>
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de Orden</h2>

            <div className="grid grid-cols-2">
              <span>N° Productos</span>
              <span className="text-right">3 articulos</span>

              <span className="font-bold">Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5 ">Total</span>
              <span className="mt-5 text-2xl text-right">$100</span>
            </div>

            <div className="mt-5 mb-2 w-full ">
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
