"use server";

import { revalidateTag } from "next/cache";
import { clintDashboardApi } from "../utils";

const serverApi = clintDashboardApi;

export const customRevalidateTag = async (tag: string) => {
  revalidateTag(tag);
};

export const handleRevalidation = async (tag: string) => {
  await customRevalidateTag(tag);
  try {
    const res = await fetch(`${serverApi}//d-revalidate`, {
      method: "POST",
      body: JSON.stringify({ tag }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
