import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serverUrl } from "@/lib/utils";
import { ICourse } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../AddToCart";

type Props = {
  course: ICourse;
};

const CourseCardTwo = ({ course }: Props) => {
  return (
    <Card className="bg-muted rounded-xl md:hover:translate-x-3 transition-all duration-500 hover:shadow-md md:flex block">
      <Link href={`/courses/${course?.slug}`}>
        <Image
          src={`${serverUrl}/${course?.thumbnail}`}
          alt={course?.slug}
          width={400}
          height={200}
          className="rounded-xl md:max-w-[400px] w-full"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between w-full">
        <div className="space-y-3">
          <Link
            href={`/courses/${course?.slug}`}
            className="font-medium text-base sm:text-lg md:text-xl"
          >
            {course?.name}
          </Link>
          <p className="">
            প্রশিক্ষকঃ{" "}
            <span className="text-blue-400">{course?.instructor?.name}</span>
          </p>
          <h2 className="md:text-xl text-lg text-primary font-semibold">
            {course?.price} টাকা
          </h2>
        </div>

        <div className="flex items-center justify-end gap-3">
          <AddToCart courseId={course?._id} />
          <Link href={`/purchase/${course?.slug}`}>
            <Button className="font-siliguri font-semibold">
              কোর্সটি কিনুন
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCardTwo;
