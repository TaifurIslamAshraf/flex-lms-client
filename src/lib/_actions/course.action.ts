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
export const getRandomCategoryCourses = async () => {
  try {
    const res = await fetch(`${serverApi}/course/random-category-courses`, {
      next: { tags: ["Course"] },
      cache: "no-store",
    });

    const course = await res.json();

    return course;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCourse = async (slug: string) => {
  try {
    const res = await fetch(`${serverApi}/course/single-course/${slug}`, {
      next: { tags: ["Course", "Single_Course"] },
    });

    const course = await res.json();
    return course;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCourses = async () => {
  try {
    const res = await fetch(`${serverApi}/course/all-courses`, {
      next: { tags: ["Course"] },
    });

    const course = await res.json();
    return course;
  } catch (error) {
    console.log(error);
  }
};
