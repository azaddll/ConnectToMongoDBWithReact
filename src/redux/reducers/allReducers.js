import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { usersListReducer } from "./usersListReducer";

export const allReducers = combineReducers({
  user: userReducer,
  usersList: usersListReducer,
});
