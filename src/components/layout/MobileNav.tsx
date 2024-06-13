"use client";

import { styles } from "@/app/styles";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import ProfileList from "../users/ProfileList";

const MobileNav = () => {
  return (
    <div className="lg:hidden block">
      <div
        className={cn(
          styles.layout,
          styles.paddingX,
          "flex items-center justify-between bg-white shadow-md fixed w-full left-0 right-0 h-[80px] z-40"
        )}
      >
        <Image src={assests.Logo} alt="Logo" height={35} width={170} />
        <Sheet>
          <SheetTrigger>
            <Menu fillRule="evenodd" clipRule="evenodd" />
          </SheetTrigger>
          <SheetContent className="pt-6">
            <ProfileList className="" />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
