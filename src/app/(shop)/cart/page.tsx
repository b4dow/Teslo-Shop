import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { formatCurrency } from "@/helpers";
// import { redirect } from "next/navigation";

const ProductsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CartPage = () => {
  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Carrito" />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5 ">
            <span className="text-md">Agregar mas items</span>
            <Link href="/" className="underline mb-5 ">
              Continua comprando
            </Link>

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
                  <p>{formatCurrency(product.price)}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout - Resumen de la compra*/}
          {/* TODO: idea de hacer el resumen de la compra en modal */}
          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de Orden</h2>
            <div className="grid grid-cols-2">
              <span>N° Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5 ">Total</span>
              <span className="mt-5 text-2xl text-right">$100</span>
            </div>
            <div className="mt-5 mb-2 w-full ">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
