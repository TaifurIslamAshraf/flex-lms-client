import { styles } from "@/app/styles";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Link from "next/link";
import CartIcon from "../CartIcon";
import Categorize from "../Categorize";
import Search from "../Search";
import Profile from "../users/Profile";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <div className="lg:block hidden">
        <div
          className={cn(
            styles.layout,
            styles.paddingX,
            "flex items-center justify-between bg-white shadow-md fixed w-full left-0 right-0 h-[80px] z-40"
          )}
        >
          <div className="flex items-center gap-14">
            <Link href={"/"}>
              {" "}
              <Image
                src={assests.Logo}
                alt="Logo"
                className="h-[35px] w-[170px]"
                height={35}
                width={170}
              />
            </Link>

            <div className="flex items-center gap-5">
              <Categorize />
              <Search />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <CartIcon />
            <Profile />
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default Navbar;
