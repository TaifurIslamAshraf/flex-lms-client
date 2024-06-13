import { apiSlice } from "../apiSlice/apiSlice";
import { loadUser } from "../auth/authSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addCart: build.mutation({
      query: ({ courseId, accessToken }) => ({
        url: "/cart/add-to-cart",
        method: "PUT",
        body: {
          courseId,
        },
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        credentials: "include" as const,
      }),
    }),

    removeCart: build.mutation({
      query: ({ courseId, accessToken }) => ({
        url: "/cart/remove-to-cart",
        method: "PUT",
        body: {
          courseId,
        },
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        credentials: "include" as const,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(loadUser(result?.data?.data));
      },
    }),
  }),
});

export const { useAddCartMutation, useRemoveCartMutation } = cartApi;
