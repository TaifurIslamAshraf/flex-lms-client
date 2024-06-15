"use client";

import { useGetAllCartItemsQuery } from "@/redux/features/cart/cartApi";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const session = useSession();
  const {} = useGetAllCartItemsQuery({
    accessToken: session?.data?.accessToken,
  });

  const { cartItems } = useSelector((state: any) => state?.cart);

  return (
    <div className="">
      <Link href={"/cart"} className="relative">
        <ShoppingCart
          fillRule="evenodd"
          clipRule="evenodd"
          size={30}
          className="hover:text-primary "
        />
        <div className="w-[18px] h-[18px] rounded-full bg-primary flex items-center flex-col justify-center text-secondary font-bold text-sm absolute -top-1 -right-1">
          {cartItems ? cartItems : 0}
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
