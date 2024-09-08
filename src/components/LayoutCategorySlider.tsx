import { Dispatch, SetStateAction } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ICateogry } from "@/types/category";

type Props = {
  category: ICateogry[];
  categroyId: string | null;
  setCategoryId: Dispatch<SetStateAction<string | null>>;
};

const LayoutCategorySlider = ({
  category,
  categroyId,
  setCategoryId,
}: Props) => {
  return (
    <Carousel className="font-medium text-lg font-noto rounded-md">
      <CarouselContent className="">
        {category &&
          category?.map((items) => (
            <CarouselItem key={items._id} className="basis-auto py-4">
              <div
                className="cursor-pointer"
                onClick={() => setCategoryId(items._id)}
              >
                <h2
                  className={cn(
                    "text-muted-foreground px-4 py-3 bg-secondary hover:text-black transition-all rounded-md shadow-md",
                    categroyId === items?._id && "text-primary"
                  )}
                >
                  {items?.name}
                </h2>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LayoutCategorySlider;
