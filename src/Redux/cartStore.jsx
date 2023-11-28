import { createStore } from "redux";
import cartReducer from "./cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = createStore(persistedReducer);

export default store;
