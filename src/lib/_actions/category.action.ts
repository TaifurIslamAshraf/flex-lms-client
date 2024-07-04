"use server";

import { serverApi } from "../utils";

export const getAllCategory = async () => {
  const res = await fetch(`${serverApi}/category/get-all-category`, {
    next: { tags: ["Category"], revalidate: 10 * 60 },
  });

  const category = await res.json();

  return category;
};
