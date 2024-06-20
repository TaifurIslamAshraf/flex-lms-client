"use client";

import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import { userCourseSync } from "@/lib/_actions/userCourse.action";
import { useAppSelector } from "@/lib/hooks/useReduxState";
import useVideoNavigation from "@/lib/hooks/useVideoNavigation";
import { IUserSingleCourse } from "@/types/courses";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ComponentLoader from "../ComponentLoader";
import { Button } from "../ui/button";

type Props = {
  course: IUserSingleCourse;
};

const VideoPlayer = ({ course }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(course);
  const {} = useVideoNavigation(currentCourse);

  const { currentVideo, nextVideo, prevVideo } = useAppSelector(
    (state) => state.userCourse
  );

  const handleStart = async () => {
    await userCourseSync({
      course: currentCourse?.course?._id,
      currentVideo: currentVideo?._id,
    });
  };

  const handleEnd = async () => {
    await userCourseSync({
      course: currentCourse?.course?._id,
      videosCompleted: [currentVideo?._id!],
    });

    if (nextVideo) {
      setCurrentCourse((prevCourse) => ({
        ...prevCourse,
        currentVideo: currentVideo?._id,
      }));
    } else {
      await userCourseSync({
        course: currentCourse?.course?._id,
        completed: true,
      });

      await customRevalidateTag("Course");
    }
  };

  const handleNext = async () => {
    if (nextVideo) {
      setCurrentCourse((prevCourse) => ({
        ...prevCourse,
        currentVideo: nextVideo?._id,
      }));
      await userCourseSync({
        course: currentCourse?.course?._id,
        currentVideo: nextVideo?._id,
      });
    }
  };

  const handlePrev = async () => {
    if (prevVideo) {
      setCurrentCourse((prevCourse) => ({
        ...prevCourse,
        currentVideo: prevVideo?._id,
      }));
      await userCourseSync({
        course: currentCourse?.course?._id,
        currentVideo: prevVideo?._id,
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <ComponentLoader />;
  }

  return (
    <div className="space-y-4">
      <ReactPlayer
        onStart={handleStart}
        onEnded={handleEnd}
        className="w-full h-full"
        url={currentVideo?.videoUrl}
        controls
        width={700}
        height={400}
      />

      <div className="flex items-center justify-between">
        <Button disabled={!prevVideo} onClick={handlePrev} size={"icon"}>
          <ArrowLeft />
        </Button>
        <Button disabled={!nextVideo} onClick={handleNext} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
