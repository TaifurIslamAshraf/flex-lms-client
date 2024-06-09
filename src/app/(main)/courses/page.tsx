import { styles } from "@/app/styles";
import CategoryCarusel from "@/components/course/CategoryCarusel";
import CourseCardTwo from "@/components/course/CourseCardTwo";
import CourseFilters from "@/components/course/courseFilters";
import { getAllCourses } from "@/lib/_actions/course.action";
import { cn } from "@/lib/utils";
import { ICourse } from "@/types/courses";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const courses = await getAllCourses(searchParams);

  const coursesData: ICourse[] = courses?.data?.data;

  return (
    <div className={cn("pt-[120px]", styles.paddingX, styles.layout)}>
      <div className="space-y-4">
        <h1 className="text-primary text-3xl font-bold font-siliguri">
          সকল কোর্স
        </h1>
        <CategoryCarusel searchParams={searchParams} />
      </div>
      <div className="flex gap-10">
        <div className="my-8 p-4 bg-muted max-w-[300px] w-full rounded-lg border border-primary h-fit">
          <h1 className="font-siliguri font-semibold text-xl">ফিল্টার</h1>
          <CourseFilters parantClass="px-2" />
        </div>

        <div className="my-8 space-y-8">
          {coursesData &&
            coursesData?.map((course) => (
              <CourseCardTwo key={course?._id} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
