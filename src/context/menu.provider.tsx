"use client";

import {
  type MenuActions,
  type MenuState,
  MenuReducer,
  InitialMenuState,
} from "@/reducers";

import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface MenuContextType {
  MenuState: MenuState;
  MenuDispatch: Dispatch<MenuActions>;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType,
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [MenuState, MenuDispatch] = useReducer(MenuReducer, InitialMenuState);

  return (
    <MenuContext.Provider value={{ MenuState, MenuDispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
