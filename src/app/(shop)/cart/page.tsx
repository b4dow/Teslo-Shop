import Link from "next/link";
import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";

const CartPage = () => {
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

            <ProductsInCart />
          </div>
          {/* Checkout - Resumen de la compra*/}
          {/* TODO: idea de hacer el resumen de la compra en modal */}
          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de Orden</h2>

            <OrderSummary />
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
