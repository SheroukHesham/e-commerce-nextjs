"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, RootState } from "./lib/store";
import { ICart } from "./lib/features/cartSlice";

export default function StoreProvider({
  children,
  initialToken,
  initialCart,
}: {
  children: React.ReactNode;
  initialToken?: string;
  initialCart?: ICart[];
}) {
  const [store] = useState<AppStore>(() =>
    makeStore({
      user: { jwt: initialToken },
      cart: { cartProducts: initialCart ?? [] },
    } as Partial<RootState>),
  );

  return <Provider store={store}>{children}</Provider>;
}
