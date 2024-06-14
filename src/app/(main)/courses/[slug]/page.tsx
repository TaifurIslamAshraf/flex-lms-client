import { styles } from "@/app/styles";
import YoutubeVideo from "@/components/YoutubeVideo";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import CourseDetails from "@/components/course/CourseDetails";
import InstructorInfo from "@/components/users/InstructorInfo";
import { getSingleCourse } from "@/lib/_actions/course.action";
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

  return (
    <>
      <div
        className={cn(
          styles.layout,
          "pt-[120px] pb-6 md:px-[3rem] lg:px-[4rem] px-[1rem] xl:px-[8rem]"
        )}
      >
        <YoutubeVideo
          videoId={videoId!}
          containerClass="max-w-[1300px] w-full mx-auto"
        />

        <div className="lg:flex block gap-14">
          <div className="flex-1">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl text-xl tracking-wide font-bold my-5">
                {course?.name}
              </h1>
              <p className="md:text-lg text-base font-noto text-muted-foreground">
                {course?.description}
              </p>
            </div>
            <div className="my-5">
              <h1 className="lg:text-2xl md:text-xl text-lg font-semibold font-siliguri">
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

          <div className="flex-shrink-0 my-5">
            <CourseDetails
              price={course?.price}
              details={course?.details}
              level={course?.level}
              courseId={course?._id}
            />
          </div>
        </div>
      </div>
      <CourseCurriculum courseData={course?.courseData!} />
      {course?.prerequistites?.length > 0 && (
        <div
          className={cn(
            styles.layout,
            styles.paddingY,
            "pb-6 md:px-[3rem] lg:px-[4rem] px-[1rem] xl:px-[8rem]"
          )}
        >
          <h1 className="lg:text-2xl md:text-xl text-lg font-semibold font-siliguri">
            কোর্স রিকুয়ারমেন্ট
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
