import { styles } from "@/app/styles";
import { cn } from "@/lib/utils";
import { IinstructorInfo } from "@/types/user";
import ProfilePicture from "./ProfilePicture";

const InstructorInfo = ({ info }: { info: IinstructorInfo }) => {
  console.log("ddddd", info);
  return (
    <div
      className={cn(
        styles.paddingY,
        "bg-gradient-to-r from-slate-100 to-amber-100 max-w-[800px] mx-auto rounded-xl mt-6 mb-14"
      )}
    >
      <div className="">
        <ProfilePicture height={200} width={200} avatar={info?.avatar} />
      </div>
    </div>
  );
};

export default InstructorInfo;
