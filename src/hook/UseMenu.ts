"use client";
import { MenuContext } from "@/context";
import { useContext } from "react";

export const UseMenu = () => {
  const context = useContext(MenuContext);

  if (!context.state) {
    throw new Error("UseModal must be used within a ContextProvider");
  }
  return context;
};
