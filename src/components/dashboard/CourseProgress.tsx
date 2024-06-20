import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { FC } from "react";

type Props = {
  completed: boolean;
  progress: number;
};

const CourseProgress: FC<Props> = ({ progress, completed }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={cn("relative bg-muted w-full h-[10px] rounded-lg")}>
        <div
          className={cn(`absolute bg-green-400 h-[10px] rounded-lg`)}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="">
        {completed ? (
          <CircleCheck className="text-green-500" size={13} />
        ) : (
          <p className="text-muted-foreground text-sm">{progress}%</p>
        )}
      </div>
    </div>
  );
};

export default CourseProgress;
