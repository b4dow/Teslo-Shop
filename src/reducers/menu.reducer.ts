export type MenuAction =
  | {
      type: "OPEN_MENU";
    }
  | { type: "CLOSE_MENU" };

export interface MenuState {
  isSideMenuOpen: boolean;
}

export const InitialState: MenuState = {
  isSideMenuOpen: false,
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

  return state;
};
