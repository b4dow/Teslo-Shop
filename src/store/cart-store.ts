import { Size } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProductCart {
  id: string;
  title: string;
  slug: string;
  price: number;
  quantity: number;
  size: Size;
  image: string;
}

interface State {
  cart: ProductCart[];

  getTotalItems: () => number;

  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  // addProductToCart
  addProductToCart: (product: ProductCart) => void;
  // updateProductQuantity
  updateProductQuantity: (product: ProductCart, quantity: number) => void;

  // RemoveProduct
  removeProduct: (product: ProductCart) => void;
}

export const CartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();

        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart, getTotalItems } = get();

        const subTotal = cart.reduce(
          (subtotal, product) => product.quantity * product.price + subtotal,
          0,
        );

        const tax = subTotal * 0.15;

        const total = subTotal + tax;

        const itemsInCart = getTotalItems();

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },
      addProductToCart: (product: ProductCart) => {
        const { cart } = get();

        // 1.revisar si el producto existe en el carrito con la talla seleccionada
        const ProductInCart = cart.some(
          (item) => item.id === product.id && item.size == product.size,
        );

        if (!ProductInCart) {
          set({ cart: [...cart, product] });
          return;
        }
        // 2. Se que el producto existe por talla.. tengo que incrementar
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (product: ProductCart, quantity: number) => {
        const { cart } = get();
        const updatedCartProduct = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCartProduct });
      },
      removeProduct: (product: ProductCart) => {
        const { cart } = get();
        const updaptedProductsCart = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size,
        );
        set({ cart: updaptedProductsCart });
      },
    }),
    {
      name: "shopping-cart",
    },
  ),
);
