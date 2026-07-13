import Cookies from "@/app/services/Cookies";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICartProduct {
  productId: string;
  title: string;
  thumbnail: string;
}

export interface ICart {
  product: ICartProduct;
  quantity: number;
}

export interface CartState {
  cartProducts: ICart[];
}

const getSavedCart = (): ICart[] => {
  const raw = Cookies.get("cart");
  if (!raw) return [];

  // If your Cookies service returns a raw string, parse it.
  // If it already returns a parsed value, this branch is a no-op safeguard.
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return Array.isArray(raw) ? raw : [];
};

const initialState: CartState = {
  cartProducts: getSavedCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const existing = state.cartProducts.find(
        (item) => item.product.productId === action.payload.product.productId,
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }

      Cookies.set("cart", JSON.stringify(state.cartProducts));
    },
    decreaseQuantity: (state, action: PayloadAction<ICart>) => {
      const product = state.cartProducts.find(
        (item) => item.product.productId === action.payload.product.productId,
      );

      if (product) {
        if (product.quantity === 1) {
          state.cartProducts = state.cartProducts.filter(
            (item) =>
              item.product.productId !== action.payload.product.productId,
          );
        }
        product.quantity -= action.payload.quantity;
      }
      Cookies.set("cart", JSON.stringify(state.cartProducts));
    },

    removeFromCart: (state, action: PayloadAction<ICartProduct>) => {
      const product = state.cartProducts.find(
        (item) => item.product.productId === action.payload.productId,
      );

      if (product) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.product.productId !== action.payload.productId,
        );
      }
      Cookies.set("cart", JSON.stringify(state.cartProducts));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
