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
      className={cn("w-full pt-[120px] pb-5", styles.layout, styles.paddingX)}
    >
      <div className="flex gap-8">
        <div className="flex-1">
          <VideoPlayer course={course} />
        </div>
        <div className="flex-1">
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
