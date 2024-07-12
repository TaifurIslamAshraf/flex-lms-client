"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import AddToCart from "../AddToCart";

type Props = {
  price: number;
  courseId: string;
  slug: string;
};

const StickyBuy: FC<Props> = ({ price, courseId, slug }) => {
  const session = useSession();

  return (
    <div className="h-[110px] w-full bg-primary/30 pr-2 pt-2 rounded-md">
      <div className="bg-secondary w-full h-full px-[8rem] rounded-md flex items-center justify-between">
        <h1 className="font-bold font-siliguri text-3xl tracking-wide">
          {" "}
          ফি {price} টাকা
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Link href={session?.data ? `/purchase/${slug}` : `/login`}>
            <Button className="font-siliguri font-semibold px-5 py-6 text-lg">
              কোর্সটি কিনুন
            </Button>
          </Link>

          <AddToCart
            textClass="font-siliguri font-semibold text-primary "
            parantClass="flex items-center justify-center gap-2 px-5 py-6"
            courseId={courseId}
            cartText="কার্টে যুক্ত করুন"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyBuy;
