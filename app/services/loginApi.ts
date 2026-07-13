import { IUser } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ILoginForm {
  identifier: string;
  password: string;
}

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, ILoginForm>({
      query: (credentials) => ({
        url: "/auth/local",
        method: "POST",
        body: {
          identifier: credentials.identifier,
          password: credentials.password,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = loginApi;
