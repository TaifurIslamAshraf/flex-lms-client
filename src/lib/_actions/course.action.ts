"use server";

import { serverApi } from "../utils";

export const getRandomCourses = async () => {
  try {
    const res = await fetch(`${serverApi}/course/random-courses`, {
      next: { tags: ["Course"] },
      cache: "no-store",
    });

    const course = await res.json();

    return course;
  } catch (error) {
    console.log(error);
  }
};
