import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../constants";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL, credentials: "include" }),
  tagTypes: ["Auth", "Category", "Product"],
  endpoints: (builder) => ({
    // Auth
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      provideTags: [{ type: "Auth", id: "login" }],
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.data.message,
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      provideTags: [{ type: "Auth", id: "register" }],
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.data.message,
    }),
    verifyToken: builder.query({
      query: () => "/verifyToken",
      provideTags: [{ type: "Auth", id: "verifyToken" }],
      invalidateTags: (result, error) => {
        if (error) {
          return ["Auth"];
        }
      },
      transformResponse: (response) => response.user,
      transformErrorResponse: (response) => response.data.message,
    }),
    logoutUser: builder.mutation({
      query: () => {
        return "/logout";
      },
      provideTags: [{ type: "Auth", id: "logout" }],
      invalidatesTags: [{ type: "Auth", id: "verifyToken" }],
    }),

    // Category
    getAllCategories: builder.query({
      query: () => {
        return `/categories`;
      },
      provideTags: (result, error) => {
        return result
          ? [
              ...result.map((category) => ({
                type: "Category",
                id: category.id,
              })),
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }];
      },
      invalidatesTags: (result, error) => {
        if (error) {
          return [{ type: "Category", id: "LIST" }];
        }
      },
      transformResponse: (response) => response.categories,
      transformErrorResponse: (response) => response.data.message,
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category/newCategory",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.category,
      transformErrorResponse: (response) => response.data.message,
      provideTags: (result, error) =>
        result
          ? [{ type: "Category", id: result.id }]
          : [{ type: "Category", id: "LIST" }],
      invalidatesTags: (result, error) =>
        result
          ? [
              { type: "Category", id: result.id },
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.product,
      transformErrorResponse: (response) => response.data.message,
    }),
    getAllProducts: builder.query({
      query: () => {
        return `/products`;
      },
      provideTags: (result, error) => {
        return result
          ? [
              ...result.map((product) => ({
                type: "Product",
                id: product.id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }];
      },
      invalidatesTags: (result, error) => {
        if (error) {
          return [{ type: "Product", id: "LIST" }];
        }
      },
      transformResponse: (response) => response.products,
      transformErrorResponse: (response) => response.data.message,
    }),
    getProductsCategory: builder.query({
      query: (category_name) => {
        return `/products/categories/${category_name}`;
      },
      provideTags: (result, error) => {
        return result
          ? [
              ...result.map((product) => ({
                type: "Product",
                id: product.id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }];
      },
      invalidatesTags: (result, error) => {
        if (error) {
          return [{ type: "Product", id: "LIST" }];
        }
      },
      transformResponse: (response) => response.categories,
      transformErrorResponse: (response) => response.data.message,
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyTokenQuery,
  useLogoutUserMutation,
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useGetAllProductsQuery,
  useGetProductsCategoryQuery,
  useAddProductMutation
} = api;
export default api;
