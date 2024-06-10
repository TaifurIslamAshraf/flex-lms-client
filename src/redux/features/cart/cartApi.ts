import { apiSlice } from "../apiSlice/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addCart: build.mutation({
      query: ({ courseId }) => ({
        url: "/cart/add-to-cart",
        method: "PUT",
        body: {
          courseId,
        },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useAddCartMutation } = cartApi;
