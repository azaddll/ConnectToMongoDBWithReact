import { GETUSERSLIST, SETUSERSCOUNT } from "../actionsType";

const initialState = {
  users: [],
  usersCount: 0,
};

export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSERSLIST:
      return { ...state, users: action.payload };
    case SETUSERSCOUNT:
      return { ...state, usersCount: action.payload };
    default:
      return state;
  }
};
