"use client";

import {
  type CartActions,
  type CartState,
  CartReducer,
  InitialCartState,
} from "@/reducers";

import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface CartContextType {
  CartState: CartState;
  CartDispatch: Dispatch<CartActions>;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

interface MenuProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: MenuProviderProps) => {
  const [CartState, CartDispatch] = useReducer(CartReducer, InitialCartState);

  return (
    <CartContext.Provider value={{ CartState, CartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
