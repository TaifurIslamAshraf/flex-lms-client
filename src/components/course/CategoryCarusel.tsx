import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllCategory } from "@/lib/_actions/category.action";
import { cn } from "@/lib/utils";
import { ICateogry } from "@/types/category";
import Link from "next/link";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const CategoryCarusel = async ({ searchParams }: Props) => {
  const data = await getAllCategory();
  const categoryParams = searchParams?.category as string;

  const category = data?.data?.category as ICateogry[];

  return (
    <Carousel className="font-medium text-lg font-noto px-4 py-2 rounded-md border border-primary">
      <CarouselContent className="">
        {category?.map((items) => (
          <CarouselItem key={items._id} className="basis-auto">
            <Link
              href={`/courses?category=${items?._id}`}
              className={cn(
                "text-muted-foreground p-2 bg-muted  hover:text-black transition-all rounded-md",
                categoryParams === items?._id && "text-primary"
              )}
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
