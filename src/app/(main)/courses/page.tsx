import { styles } from "@/app/styles";
import Paginations from "@/components/Paginations";
import CategoryCarusel from "@/components/course/CategoryCarusel";
import CourseCardTwo from "@/components/course/CourseCardTwo";
import CourseMobileFilter from "@/components/course/CourseMobileFilter";
import CourseFilters from "@/components/course/courseFilters";
import { getAllCourses } from "@/lib/_actions/course.action";
import { cn } from "@/lib/utils";
import { ICourse, IPagination } from "@/types/courses";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const courses = await getAllCourses(searchParams);

  const coursesData: ICourse[] = courses?.data?.data;
  const paginationData: IPagination = courses?.data?.meta;

  return (
    <div className={cn("pt-[120px]", styles.paddingX, styles.layout)}>
      <div className="space-y-4">
        <h1 className="text-primary text-4xl font-bold font-siliguri">
          সকল কোর্স
        </h1>
        <CategoryCarusel searchParams={searchParams} />
      </div>
      <div className="lg:flex block gap-10">
        <CourseMobileFilter />
        <div className="my-10 p-5 bg-muted max-w-[330px] w-full rounded-lg h-fit lg:block hidden">
          <h1 className="font-siliguri font-semibold text-2xl text-primary">
            ফিল্টার
          </h1>
          <CourseFilters parantClass="px-3" />
        </div>

        <div className="my-8 space-y-8">
          {coursesData &&
            coursesData?.map((course) => (
              <CourseCardTwo key={course?._id} course={course} />
            ))}
        </div>
      </div>
      {paginationData?.nextPage && (
        <div className="mb-9">
          <Paginations pagination={paginationData} type="allCourse" />
        </div>
      )}
    </div>
  );
};

export default page;
