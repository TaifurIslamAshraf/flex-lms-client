"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { IuserList } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
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
  {
    name: "লগ আউট",
    path: "/",
  },
];

const ProfileList = ({ className, avatar, name, phone }: IuserList) => {
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();

  const {} = useLogoutQuery(undefined, {
    skip: !isLogout,
  });

  const handleLogout = () => {
    toast.success("Logout successfull");
    setIsLogout(true);
    router.replace("/");
    window.location.reload();
  };

  return (
    <div className={cn(className)}>
      <div className="flex gap-6 items-center">
        <ProfilePicture avatar={avatar} height={50} width={50} />
        <div className="">
          <h1 className="font-bold text-xl uppercase">{name}</h1>
          <p className="text-muted-foreground">Mobile: {phone}</p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="">
        {profileListLink.map((item, i) => (
          <div className="mb-4" key={i}>
            <Link
              onClick={handleLogout}
              className="font-noto text-lg"
              href={item.path}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
