import { styles } from "@/app/styles";
import YoutubeVideo from "@/components/YoutubeVideo";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import InstructorInfo from "@/components/users/InstructorInfo";
import { getSingleCourse } from "@/lib/fetch/course.data";
import { cn, extractVideoID } from "@/lib/utils";
import { ISingleCourse } from "@/types/courses";
import { Info, ShieldCheck } from "lucide-react";

type Props = {
  params: { slug: string };
};

const SingleCourse = async ({ params }: Props) => {
  const { data: course }: { data: ISingleCourse } = await getSingleCourse(
    params.slug
  );
  const videoId = extractVideoID(course?.demoUrl);
  console.log(course);
  return (
    <>
      <div
        className={cn(styles.layout, "pt-[120px] pb-6 px-[4rem] md:px-[8rem]")}
      >
        <YoutubeVideo
          videoId={videoId!}
          containerClass="max-w-[1300px] w-full mx-auto"
        />

        <div className="">
          <div className="">
            <h1 className="text-3xl tracking-wide font-bold my-5">
              {course?.name}
            </h1>
            <p className="text-lg font-noto text-muted-foreground">
              {course?.description}
            </p>
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-semibold font-siliguri">
              এই কোর্স থেকে কী কী শিখবেন?
            </h1>
            <div className="">
              {course?.benefits?.length > 0 &&
                course?.benefits?.map((benefit) => (
                  <div
                    className="flex items-center gap-3 mt-4"
                    key={benefit?._id}
                  >
                    <ShieldCheck className="text-primary" size={20} />
                    <h1 className="">{benefit.title}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CourseCurriculum courseData={course?.courseData!} />
      {course?.prerequistites?.length > 0 && (
        <div
          className={cn(
            styles.paddingY,
            styles.layout,
            "px-[4rem] md:px-[8rem]"
          )}
        >
          <h1 className="text-2xl font-semibold font-siliguri">
            কোর্সটি করার জন্য পূর্বশর্ত
          </h1>
          <div className="">
            {course?.prerequistites?.map((items) => (
              <div className="flex items-center gap-3 mt-4" key={items?._id}>
                <Info className="text-primary" size={20} />
                <h1 className="">{items.title}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
      <InstructorInfo info={course?.instructor} />
    </>
  );
};

export default SingleCourse;
