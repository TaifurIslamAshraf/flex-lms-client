import { serverApi } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogin } from "../auth/authSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: serverApi,
  }),
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
        credentials: "include",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(
            userLogin({
              accessToken: result.data?.accessToken,
              user: result.data?.data,
            })
          );
        } catch (error: any) {
          console.log(error.message);
        }
      },
    }),
    loadUser: builder.query({
      query: (data) => ({
        url: "/users/me",
        method: "GET",
        credentials: "include" as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          console.log(error.message);
        }
      },
    }),
  }),
});

export const { useLoadUserQuery } = apiSlice;
