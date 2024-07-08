"use server";

import { serverApi } from "../utils";

export const getSingleLayout = async (id: string) => {
  try {
    const res = await fetch(`${serverApi}/layout/single-layout/${id}`, {
      next: { tags: ["Layout"] },
    });

    const layout = await res.json();
    return layout;
  } catch (error) {
    console.log(error);
  }
};
