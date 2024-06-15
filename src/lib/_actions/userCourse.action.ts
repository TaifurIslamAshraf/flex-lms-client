"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { serverApi } from "../utils";

export const getAllUserCourses = async () => {
  const session = await getServerSession(authOptions);

  try {
    const res = await fetch(`${serverApi}/course-engagement/my-learning`, {
      next: { tags: ["Course"] },
      headers: {
        authorization: `Bearer ${session?.accessToken}`,
      },
    });

    const course = await res.json();

    return course;
  } catch (error) {
    console.log(error);
  }
};
