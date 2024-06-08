import { styles } from "@/app/styles";
import CategoryCarusel from "@/components/course/CategoryCarusel";
import CourseFilters from "@/components/course/courseFilters";
import { getAllCourses } from "@/lib/_actions/course.action";
import { cn } from "@/lib/utils";

const page = async () => {
  const courses = await getAllCourses();

  return (
    <div className={cn("pt-[120px]", styles.paddingX, styles.layout)}>
      <div className="space-y-4">
        <h1 className="text-primary text-3xl font-bold font-siliguri">
          সকল কোর্স
        </h1>
        <CategoryCarusel />
      </div>
      <div className="my-8 p-4 bg-muted max-w-[300px] w-full rounded-lg border border-primary">
        <h1 className="font-siliguri font-semibold text-xl">ফিল্টার</h1>
        <CourseFilters parantClass="px-2" />
      </div>
    </div>
  );
};

export default page;
