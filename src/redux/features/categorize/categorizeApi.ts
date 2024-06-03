import { apiSlice } from "../apiSlice/apiSlice";

export const categorizeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getSubcategoryByCategory: build.query({
      query: (category) => ({
        url: "/subcategory/get-subcategory-by-category",
        params: category,
        method: "GET",
      }),
    }),
    getAllCategory: build.query({
      query: () => ({
        url: "/category/get-all-category",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSubcategoryByCategoryQuery, useGetAllCategoryQuery } =
  categorizeApi;
