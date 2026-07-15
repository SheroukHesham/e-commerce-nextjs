import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";
import { loginApi } from "../services/loginApi";
import { productsApi } from "../services/products";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        loginApi.middleware,
        productsApi.middleware,
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
