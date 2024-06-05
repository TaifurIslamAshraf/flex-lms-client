import { cn, serverUrl } from "@/lib/utils";
import { ICardCourse } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  item,
  containerClass,
}: {
  item: ICardCourse;
  containerClass: string;
}) => {
  return (
    <Link href={`/courses/${item?.slug}`}>
      <div className={cn(containerClass)}>
        <Image
          src={`${serverUrl}/${item.thumbnail}`}
          alt={item.slug}
          height={250}
          width={250}
          className="w-full h-auto rounded-xl hover:scale-105 transition-all duration-500"
        />

        <div className="space-y-3">
          <h1 className="mt-3 font-semibold">{item.name}</h1>
          <div className="flex items-center justify-end gap-3">
            <h2 className="line-through md:text-lg text-base text-muted-foreground font-semibold">
              {item.estimatedPrice} টাকা
            </h2>
            <h2 className="md:text-xl text-lg text-primary font-semibold">
              {item.price} টাকা
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
