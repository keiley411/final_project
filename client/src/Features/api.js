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
      keepUnusedDataFor: 60 * 60,
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
    getCategoryById: builder.query({
      query: (category_id) => {
        return `/category/${category_id}`
      },
      provideTags: (result, error) => {
        if(result ) {
          return [{type: "Category", id: result.id}]
        }
        return [{type: "Category", id: "LIST"}]
      },
      invalidatesTags: (result, error) => {
        if(error) {
          return [{type: "Category", id: "LIST"}]
        }
        return [{type: "Category", id: "LIST"}, {type: "Category", id: result.id}]
      },
      transformResponse: (response) => response.category,
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
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `/category/${data.id}`,
        method: "PUT",
        body: data
      }),
      transformResponse: (response) => response.category,
      transformErrorResponse: (response) => response.data.message,
    }),
    deleteCategory: builder.mutation({
      query: (categoryid) => ({
        url: `/category/${categoryid}`,
        method: "DElETE",
      }),
      transformResponse: (response) => response.category,
      transformErrorResponse: (response) => response.data.message,
    }),
    
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      provideTags: (result, error) =>
        result
          ? [{ type: "Products", id: result.id }]
          : [{ type: "Products", id: "LIST" }],
      invalidatesTags: (result, error) =>
        result
          ? [
              { type: "Products", id: result.id },
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
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
      transformResponse: (response) => {
        console.log(response);
        return response.products;
      },
      transformErrorResponse: (response) => response.data.message,
    }),
    getProductsByCategory: builder.query({
      query: (category_id) => {
        return `/products/categories/${category_id}`;
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
        console.log('hello')
        if (error) {
          return [{ type: "Product", id: "LIST" }];
        }
        return ["Products"]
      },
      transformResponse: (response) => response.products,
      transformErrorResponse: (response) => response.data.message,
    }),
    updateProduct: builder.mutation({
      query: ({data}) => ({
        url: `/products/${data.id}`,
        method: "PUT",
        body: data
      }),
      provideTags: (result, error) =>
        result
          ? [{ type: "Products", id: result.id }]
          : [{ type: "Products", id: "LIST" }],
      invalidatesTags: (result, error) =>
        result
          ? [
              { type: "Products", id: result.id },
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
      transformResponse: (response) => response.product,
      transformErrorResponse: (response) => response.data.message,
    }),
    deleteProduct: builder.mutation({
      query: (product_id) => ({
        url: `/products/${product_id}`,
        method: "DElETE",
      }),    
      provideTags: (result, error) =>
        result
          ? [{ type: "Products", id: result.id }]
          : [{ type: "Products", id: "LIST" }],
      invalidatesTags: (result, error) =>
        result
          ? [
              { type: "Products", id: result.id },
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
      transformResponse: (response) => response.product,
      transformErrorResponse: (response) => response.data.message,
    })
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyTokenQuery,
  useLogoutUserMutation,

  useGetCategoryByIdQuery,
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,

  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = api;
export default api;
