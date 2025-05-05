export type MenuActions =
  | {
      type: "OPEN_MENU";
    }
  | { type: "CLOSE_MENU" };

export interface MenuState {
  isSideMenuOpen: boolean;
}

export const InitialMenuState: MenuState = {
  isSideMenuOpen: false,
};

export const MenuReducer = (
  state: MenuState = InitialMenuState,
  action: MenuActions,
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

  return state;
};
