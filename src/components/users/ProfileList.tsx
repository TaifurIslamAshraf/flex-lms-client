import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { IuserList } from "@/types/user";
import Link from "next/link";

import Logout from "./Logout";

import { useSelector } from "react-redux";
import ProfilePicture from "./ProfilePicture";

const profileListLink = [
  {
    name: "ড্যাশবোর্ড",
    path: "/dashboard",
  },

  {
    name: "প্রোফাইল",
    path: "/profile",
  },
  {
    name: "কার্ট",
    path: "/cart",
  },
  {
    name: "সকল কোর্স",
    path: "/courses",
  },
];

const ProfileList = ({ className }: IuserList) => {
  const { user } = useSelector((state: any) => state?.auth);

  return (
    <div className={cn(className)}>
      <div className="md:flex block gap-6 items-center">
        <ProfilePicture avatar={user?.avatar} height={50} width={50} />
        <div className="">
          <h1 className="font-bold text-xl uppercase">{user?.name}</h1>
          <p className="text-muted-foreground">Mobile: {user?.phone}</p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="">
        {profileListLink.map((item, i) => (
          <div className="mb-4" key={i}>
            <Link className="font-noto text-lg" href={item.path}>
              {item.name}
            </Link>
          </div>
        ))}

        <Logout />
      </div>
    </div>
  );
};

export default ProfileList;
