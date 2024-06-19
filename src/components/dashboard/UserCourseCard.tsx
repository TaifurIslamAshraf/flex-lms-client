import { Card, CardContent } from "@/components/ui/card";
import { cn, serverUrl } from "@/lib/utils";
import { IUserCourses } from "@/types/courses";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

            <div className="flex items-center gap-2">
              <div
                className={cn("relative bg-muted w-full h-[10px] rounded-lg")}
              >
                <div
                  className={cn(`absolute bg-green-400 h-[10px] rounded-lg`)}
                  style={{ width: `${courseData?.progress}%` }}
                ></div>
              </div>
              <div className="">
                {courseData?.completed ? (
                  <CircleCheck className="text-green-500" size={13} />
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {courseData?.progress}%
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default UserCourseCard;
