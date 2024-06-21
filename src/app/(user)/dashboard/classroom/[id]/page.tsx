import { styles } from "@/app/styles";
import LessonInfo from "@/components/dashboard/LessonInfo";
import VideoPlayer from "@/components/dashboard/VideoPlayer";
import VideoShowcase from "@/components/dashboard/VideoShowcase";
import { getSingleUserCourses } from "@/lib/_actions/userCourse.action";
import { cn } from "@/lib/utils";
import { IUserSingleCourse } from "@/types/courses";

type Props = {
  params: { id: string };
};

const page = async ({ params }: Props) => {
  const data = await getSingleUserCourses(params.id);
  const course = data?.data as IUserSingleCourse;
  return (
    <div
      className={cn(
        "w-full pt-[120px] pb-5 overflow-x-hidden",
        styles.layout,
        styles.paddingX
      )}
    >
      <div className="xl:flex block xl:gap-8 space-y-8 xl:space-y-0">
        <div className="flex-shrink-0 flex-grow flex-auto">
          <VideoPlayer course={course} />
        </div>
        <div className="xl:max-w-[450px] w-full">
          <VideoShowcase course={course} />
        </div>
      </div>

      <div className="mt-16">
        <LessonInfo />
      </div>
    </div>
  );
};

export default page;
