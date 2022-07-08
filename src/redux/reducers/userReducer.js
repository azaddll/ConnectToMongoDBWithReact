import { SETUSERNAME } from "../actionsType";

const initialState = {
  userName: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return { ...state, userName: action.payload };

    default:
      return state;
  }
};
