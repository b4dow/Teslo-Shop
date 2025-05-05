import { CartProduct } from "@/interfaces";

export type CartActions =
  | {
      type: "ADD_TO_CART";
      payload: { item: CartProduct };
    }
  | { type: "UPDATE_QUANTITY" };

export interface CartState {
  cart: CartProduct[];
}

export const InitialCartState: CartState = {
  cart: [],
};

export const CartReducer = (
  state: CartState = InitialCartState,
  action: CartActions,
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const ProductInCArt = state.cart.some(
        (item) =>
          item.id === action.payload.item.id &&
          item.size === action.payload.item.size,
      );

      if (!ProductInCArt) {
        return {
          ...state,
          cart: [...state.cart, action.payload.item],
        };
      }

      const UpdatedCartProduct = state.cart.map((item) => {
        if (
          item.id === action.payload.item.id &&
          item.size === action.payload.item.size
        ) {
          return {
            ...item,
            quantity: item.quantity + action.payload.item.quantity,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: UpdatedCartProduct,
      };

    default:
      return state;
  }
};
