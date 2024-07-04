import { Card, CardContent } from "@/components/ui/card";
import { serverUrl } from "@/lib/utils";
import { IUserCourses } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";
import CourseProgress from "./CourseProgress";

type Props = {
  courseData: IUserCourses;
};

const UserCourseCard = ({ courseData }: Props) => {
  return (
    <Card className="md:max-w-[370px] w-full rounded-3xl">
      <Link href={`/dashboard/classroom/${courseData?.courseId}`}>
        <Image
          src={`${serverUrl}/${courseData?.thumbnail}`}
          alt={courseData?.slug}
          width={370}
          height={280}
          className="rounded-t-3xl md:w-[370px] w-full"
        />

        <CardContent className="">
          <h2 className="text-lg font-semibold my-4">{courseData?.title}</h2>

          <div className="space-y-2">
            <p className="font-medium font-noto flex items-center gap-3">
              লেসন :{" "}
              <span className="font-normal">
                {courseData?.completedVideoLength} /{" "}
                {courseData?.videoDataLength}
              </span>
            </p>

            <CourseProgress
              completed={courseData?.completed}
              progress={Math.floor(courseData?.progress)}
            />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default UserCourseCard;
