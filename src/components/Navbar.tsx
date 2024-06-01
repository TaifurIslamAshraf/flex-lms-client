"use client";

import { styles } from "@/app/styles";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Categorize from "./Categorize";
import LoginRegisterBtn from "./LoginRegisterBtn";
import Search from "./Search";

const Navbar = () => {
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
      <div className="">
        <LoginRegisterBtn />
      </div>
    </div>
  );
};

export default Navbar;
