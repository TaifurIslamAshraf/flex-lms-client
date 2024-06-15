import { styles } from "@/app/styles";
import InteractionCard from "@/components/dashboard/InteractionCard";
import { Separator } from "@/components/ui/separator";
import { getAllUserCourses } from "@/lib/_actions/userCourse.action";
import { cn } from "@/lib/utils";
import { IUserCourses } from "@/types/courses";

const page = async () => {
  const data = await getAllUserCourses();
  const userCourses = data?.data?.result as IUserCourses[];

  const isCompletedCourse = userCourses?.reduce((acc, cur) => {
    if (cur.completed) {
      acc = +1;
    }

    return acc;
  }, 0);

  return (
    <div className={cn("w-full pt-[80px]")}>
      <div className={cn("bg-secondary py-9", styles.paddingX, styles.layout)}>
        <h1 className="text-3xl font-siliguri font-extrabold text-primary">
          লার্নিং ড্যাশবোর্ড
        </h1>
        <p className="text-xl font-siliguri font-medium">
          পরবর্তী লেসন শুরু করুন এখনই
        </p>
      </div>
      <Separator />

      <div className={cn(styles.paddingX, styles?.paddingY, styles.layout)}>
        <div className="flex items-center gap-10">
          <InteractionCard
            title="এনরোলকৃত মোট কোর্সের সংখ্যা"
            info={userCourses?.length}
          />

          <InteractionCard
            title="সম্পন্নকৃত মোট কোর্সের সংখ্যা"
            info={isCompletedCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
