import { CartProduct } from "@/interfaces";

export type MenuAction =
  | {
      type: "OPEN_MENU";
    }
  | { type: "CLOSE_MENU" }
  | {
      type: "ADD_TO_CART";
      payload: { item: CartProduct };
    }
  | { type: "UPDATE_QUANTITY" };

export interface MenuState {
  isSideMenuOpen: boolean;
  cart: CartProduct[];
}

export const InitialState: MenuState = {
  isSideMenuOpen: false,
  cart: [],
};

export const UseReducer = (
  state: MenuState = InitialState,
  action: MenuAction,
) => {
  if (action.type === "OPEN_MENU") {
    return {
      ...state,
      isSideMenuOpen: true,
    };
  }

  if (action.type === "CLOSE_MENU") {
    return {
      ...state,
      isSideMenuOpen: false,
    };
  }

  if (action.type === "ADD_TO_CART") {
    const ProductInCart = state.cart.some(
      (item) =>
        item.id === action.payload.item.id &&
        item.size === action.payload.item.size,
    );

    if (!ProductInCart) {
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
  }

  return state;
};
