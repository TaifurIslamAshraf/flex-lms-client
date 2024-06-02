import { apiSlice } from "../apiSlice/apiSlice";
import { updateUser } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/users/update-avatar",
        method: "PUT",
        body: formData,
        credentials: "include" as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            updateUser({
              user: result.data?.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/users/update-info",
        method: "PUT",
        body: data,

        credentials: "include",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            updateUser({
              user: result.data?.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateUserPassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "/auth/update-password",
        method: "PUT",
        body: {
          oldPassword,
          newPassword,
        },

        credentials: "include",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useUpdateUserInfoMutation,
  useUpdateUserPasswordMutation,
} = userApi;
