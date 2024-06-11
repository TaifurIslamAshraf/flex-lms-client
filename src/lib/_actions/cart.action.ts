"use server";

import { serverApi } from "../utils";

export const getAllCartItems = async () => {
  const res = await fetch(`${serverApi}/cart/cart-items`, {
    next: { tags: ["Cart"] },
  });

  const cart = await res.json();

  return cart;
};
