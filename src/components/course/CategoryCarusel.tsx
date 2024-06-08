import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllCategory } from "@/lib/_actions/category.action";
import { ICateogry } from "@/types/category";
import Link from "next/link";

const CategoryCarusel = async () => {
  const data = await getAllCategory();

  const category = data?.data?.category as ICateogry[];

  return (
    <Carousel className="font-medium text-lg font-noto px-4 py-2 rounded-md border border-primary">
      <CarouselContent className="">
        {category?.map((items) => (
          <CarouselItem key={items._id} className="basis-auto">
            <Link
              href={`/courses?category=${items?._id}`}
              className="text-muted-foreground p-2 bg-muted  hover:text-black transition-all rounded-md"
            >
              {items?.name}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoryCarusel;
