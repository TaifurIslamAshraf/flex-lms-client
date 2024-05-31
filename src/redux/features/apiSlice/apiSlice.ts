import { serverApi } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: serverApi,
  }),
  endpoints: (build) => ({
    refreshToken: build.query({
      query: () => ({
        url: "/user/refresh",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {} = apiSlice;
