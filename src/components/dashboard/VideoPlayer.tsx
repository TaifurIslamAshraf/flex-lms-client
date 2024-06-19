"use client";

import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import { userCourseSync } from "@/lib/_actions/userCourse.action";
import useVideoNavigation from "@/lib/hooks/useVideoNavigation";
import { IUserSingleCourse } from "@/types/courses";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ComponentLoader from "../ComponentLoader";

type Props = {
  course: IUserSingleCourse;
};

const VideoPlayer = ({ course }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(course);
  const { currentVideo, nextVideo } = useVideoNavigation(currentCourse);

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
        currentVideo: nextVideo._id,
      }));
    } else {
      await userCourseSync({
        course: currentCourse?.course?._id,
        completed: true,
      });

      await customRevalidateTag("Course");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <ComponentLoader />;
  }

  return (
    <div className="relative">
      <ReactPlayer
        onStart={handleStart}
        onEnded={handleEnd}
        className="absolute top-0 left-0 w-full h-full"
        url={currentVideo?.videoUrl}
        controls
      />
    </div>
  );
};

export default VideoPlayer;
