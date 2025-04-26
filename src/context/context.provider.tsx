"use client";
import { UseReducer, MenuAction, MenuState, InitialState } from "@/reducers";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface MenuGlobalType {
  state: MenuState;
  dispatch: Dispatch<MenuAction>;
}

export const MenuContext = createContext<MenuGlobalType>({} as MenuGlobalType);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [state, dispatch] = useReducer(UseReducer, InitialState);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
