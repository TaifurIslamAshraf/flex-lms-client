"use client";

import { useAppSelector } from "@/lib/hooks/useReduxState";
import Link from "next/link";

const LessonInfo = () => {
  const { currentVideo } = useAppSelector((state) => state.userCourse);

  return (
    <div className="">
      <div className="space-y-2">
        <h1 className="lg:text-2xl text-lg font-semibold font-siliguri">
          লেসন বিস্তারিত
        </h1>
        <p className="text-muted-foreground">
          {currentVideo?.videoDescription}
        </p>
      </div>

      {currentVideo?.videoResource.length! > 0 && (
        <div className="mt-8">
          <h1 className="lg:text-2xl text-xl font-semibold font-siliguri">
            ভিডিও রিসোর্স
          </h1>
          <div className="mt-2">
            {currentVideo?.videoResource?.map((recourse, i) => (
              <div className="" key={recourse?._id}>
                <h1 className="font-medium">
                  {i + 1}. {recourse?.title}
                  {" : "}
                  <Link
                    className="ml-1 text-blue-400 underline"
                    href={recourse?.url}
                  >
                    {recourse?.url}
                  </Link>
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonInfo;
