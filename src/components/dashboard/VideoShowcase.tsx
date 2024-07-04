"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { userCourseSync } from "@/lib/_actions/userCourse.action";
import useGroupVideoBySection from "@/lib/hooks/useGroupVideoBySection";
import { useAppSelector } from "@/lib/hooks/useReduxState";
import useVideoNavigation from "@/lib/hooks/useVideoNavigation";
import { cn } from "@/lib/utils";
import { ICourseData, IUserSingleCourse } from "@/types/courses";
import { CircleCheck, CirclePlay } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";
import CourseProgress from "./CourseProgress";

type Props = {
  course: IUserSingleCourse;
};

const VideoShowcase = ({ course }: Props) => {
  const [currentCourse, setCurrentCourse] = useState(course);
  const [clickedVideo, setClickedVideo] = useState<ICourseData | undefined>(
    undefined
  );

  const {} = useVideoNavigation(course, clickedVideo);

  const videoSection = useGroupVideoBySection(
    currentCourse?.course?.courseData
  );

  const userCourse = useAppSelector((state) => state.userCourse);

  const handleVideoClick = async (video: ICourseData) => {
    setClickedVideo(video);
    await userCourseSync({
      course: currentCourse?.course?._id,
      currentVideo: video?._id,
    });
  };

  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="lg:text-xl text-lg font-medium">
          {course?.course?.name}
        </h1>

        <div className="">
          <h1 className="text-muted-foreground space-x-2">
            <span className="font-semibold font-noto text-xl">প্রগ্রেস</span>{" "}
            <span>
              {course?.course?.courseData?.length} থেকে{" "}
              {course?.videosCompleted?.length} টি লেসন দেখেছেন
            </span>
          </h1>
          <CourseProgress
            completed={course?.completed}
            progress={Math.floor(course?.progress)}
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-primary text-xl font-noto font-semibold">লেসন</h1>
        <div className="overflow-y-auto max-h-[600px] h-full">
          {Object.keys(videoSection).map((section, i) => (
            <Accordion key={i + 10} type="single" collapsible className="">
              <AccordionItem value={`item-${i + 1}`} className="">
                <AccordionTrigger
                  data-state={section === section && "open"}
                  className="px-4 hover:no-underline"
                >
                  {section}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {videoSection[section].map((video) => (
                    <div className="" key={video?._id}>
                      <Separator className="opacity-50 text-primary" />
                      <div
                        onClick={() => handleVideoClick(video)}
                        className={cn(
                          "flex items-center gap-2 py-6 cursor-pointer px-2",
                          userCourse?.currentVideo?._id === video?._id &&
                            "bg-secondary"
                        )}
                      >
                        <div className="">
                          {currentCourse?.videosCompleted.includes(
                            video?._id
                          ) ? (
                            <CircleCheck className="text-green-400" size={20} />
                          ) : (
                            <CirclePlay className="text-primary" size={20} />
                          )}
                        </div>
                        <h1>{video?.videoTitle}</h1>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
