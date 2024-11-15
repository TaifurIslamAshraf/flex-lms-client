import { getSingleCourse } from "@/lib/_actions/course.action";
import { apiSlice } from "../apiSlice/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    singleCourse: build.query({
      queryFn: async ({ slug }) => {
        try {
          const data = await getSingleCourse(slug);
          return { data };
        } catch (error: any) {
          return { error: { status: "CUSTOM_ERROR", error: error?.message } };
        }
      },
    }),
    featuredCourses: build.query({
      query: (category) => ({
        url: "/course/featured-courses",
        params: category,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useSingleCourseQuery, useFeaturedCoursesQuery } = courseApi;
