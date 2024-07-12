"use client";

import { styles } from "@/app/styles";
import YoutubeVideo from "@/components/YoutubeVideo";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import CourseDetails from "@/components/course/CourseDetails";
import InstructorInfo from "@/components/users/InstructorInfo";
import { cn, extractVideoID } from "@/lib/utils";
import { ISingleCourse } from "@/types/courses";
import { Info, ShieldCheck } from "lucide-react";
import { FC, useEffect, useState } from "react";
import StickyBuy from "./StickyBuy";

type Props = {
  course: ISingleCourse;
};

const SingleCourse: FC<Props> = ({ course }) => {
  const [scrollY, setScrollY] = useState(0);

  const videoId = extractVideoID(course?.demoUrl);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative mb-28">
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
              slug={course?.slug}
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
      <InstructorInfo info={course?.instructor} />;
      <div
        className={cn(
          scrollY && scrollY > 1100
            ? "fixed bottom-0 left-0 right-0"
            : "bottom-100 opacity-0",
          "transition-all duration-1000 md:block hidden"
        )}
      >
        <StickyBuy
          slug={course?.slug}
          price={course?.price}
          courseId={course?._id}
        />
      </div>
    </div>
  );
};

export default SingleCourse;
