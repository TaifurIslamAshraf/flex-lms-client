import { styles } from "@/app/styles";
import { cn } from "@/lib/utils";
import { IinstructorInfo } from "@/types/user";
import ProfilePicture from "./ProfilePicture";

const InstructorInfo = ({ info }: { info: IinstructorInfo }) => {
  return (
    <>
      {info?.instructor?.title && (
        <div
          className={cn(
            styles.paddingY,
            "bg-gradient-to-r from-slate-100 to-amber-100 max-w-[1100px] mx-auto rounded-xl mt-6 mb-14 px-6 md:flex block items-center md:justify-between justify-center md:gap-6 space-y-6"
          )}
        >
          <div className="flex items-center md:justify-normal justify-center gap-6">
            <ProfilePicture height={100} width={100} avatar={info?.avatar} />
            <div className="">
              <h1 className="font-semibold text-2xl text-primary">
                {info?.name}
              </h1>
              <h1 className="text-xl">{info?.instructor?.title}</h1>
            </div>
          </div>
          <div className="w-[2px] h-[120px] bg-primary opacity-40 md:block hidden"></div>
          <div className="flex-1 text-center md:text-start">
            {info?.instructor?.description}
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorInfo;
