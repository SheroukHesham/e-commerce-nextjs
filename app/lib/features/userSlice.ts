import Cookies from "@/app/services/Cookies";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  jwt: string | null;
}

const savedJwt = Cookies.get("jwt");

const initialState: UserState = {
  jwt: savedJwt,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.jwt = action.payload.jwt;
      Cookies.set("jwt", action.payload.jwt as string);
    },
    logOut: (state) => {
      state.jwt = null;
      Cookies.remove("jwt");
      window.location.reload();
    },
  },
});

// Action creators are generated for each case reducer function
export const { login: addUser, logOut } = userSlice.actions;

export default userSlice.reducer;
