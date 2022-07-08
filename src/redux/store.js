import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { allReducers } from "./reducers/allReducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  blacklist: [],
  whitelist: ["user" , "usersList"],
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const middleware = applyMiddleware(thunk, logger);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
