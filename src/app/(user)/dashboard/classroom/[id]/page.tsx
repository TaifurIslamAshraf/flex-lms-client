import { styles } from "@/app/styles";
import VideoPlayer from "@/components/dashboard/VideoPlayer";
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
      page
      <VideoPlayer course={course} />
    </div>
  );
};

export default page;
