"use client";

import { styles } from "@/app/styles";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Categorize from "../Categorize";
import Search from "../Search";
import Profile from "../users/Profile";

const Navbar = () => {
  const [cartItem, setCartItem] = useState(2);

  return (
    <div
      className={cn(
        styles.layout,
        styles.paddingX,
        "flex items-center justify-between bg-white shadow-md fixed w-full left-0 right-0 h-[80px] z-40"
      )}
    >
      <div className="flex items-center gap-14">
        <Image src={assests.Logo} alt="Logo" height={35} width={170} />

        <div className="flex items-center gap-5">
          <Categorize />
          <Search />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="">
          <Link href={"/cart"} className="relative">
            <ShoppingCart size={30} className="hover:text-primary " />
            <div className="w-[18px] h-[18px] rounded-full bg-primary flex items-center flex-col justify-center text-secondary font-bold text-sm absolute -top-1 -right-1">
              {cartItem}
            </div>
          </Link>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
