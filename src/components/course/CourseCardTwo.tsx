import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serverUrl } from "@/lib/utils";
import { ICourse } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";

type Props = {
  course: ICourse;
};

const CourseCardTwo = ({ course }: Props) => {
  return (
    <Card className="bg-muted rounded-xl hover:translate-x-3 transition-all duration-500 hover:shadow-md flex">
      <Link href={`/courses/${course?.slug}`}>
        <Image
          src={`${serverUrl}/${course?.thumbnail}`}
          alt={course?.slug}
          width={400}
          height={200}
          className="rounded-xl"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between w-full">
        <div className="space-y-3">
          <Link
            href={`/courses/${course?.slug}`}
            className="font-medium text-xl"
          >
            {course?.name}
          </Link>
          <p className="">
            প্রশিক্ষকঃ{" "}
            <span className="text-blue-400">{course?.instructor?.name}</span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <h2 className="md:text-xl text-lg text-primary font-semibold">
            {course?.price} টাকা
          </h2>
          <Link href={`/purchase/${course?.slug}`}>
            <Button>কোর্সটি কিনুন</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCardTwo;
