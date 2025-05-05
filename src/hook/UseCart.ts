"use client";

import { CartContext } from "@/context";
import { useContext } from "react";

export const UseCart = () => {
  const context = useContext(CartContext);

  if (!context.CartState) {
    throw new Error("UseModal must be used within a ContextProvider");
  }
  return context;
};
