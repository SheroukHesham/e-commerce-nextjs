import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "./Cookies";
import { IProduct } from "@/interfaces";

interface IResponse {
  data: IProduct[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  refetchOnFocus: true,
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query<IResponse, void>({
      query: () => "/products?populate=*",
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ documentId }) => ({
                type: "Product" as const,
                id: documentId,
              })),
              { type: "Product" as const, id: "LIST" },
            ]
          : [{ type: "Product" as const, id: "LIST" }],
    }),

    removeProduct: builder.mutation<null, string>({
      query: (credentials) => ({
        url: `/products/${credentials}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation<null, IProduct>({
      query: ({
        documentId,
        title,
        description,
        brand,
        price,
        rating,
        stock,
        thumbnails,
        category,
      }) => ({
        url: `/products/${documentId}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
        body: {
          data: {
            title: title,
            description: description,
            price: price,
            stock: stock,
            brand: brand,
            rating: rating,
            thumbnails: thumbnails,
            category: { title: category },
          },
        },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRemoveProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productsApi;
