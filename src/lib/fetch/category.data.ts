import { serverApi } from "../utils";

export const getAllCategory = async () => {
  const res = await fetch(`${serverApi}/category/get-all-category`);

  const category = await res.json();

  return category;
};
