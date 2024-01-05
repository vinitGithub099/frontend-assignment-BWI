import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/slice";
import productReducer from "./features/Product/slice";
import authReducer from "./features/Auth/slice";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
