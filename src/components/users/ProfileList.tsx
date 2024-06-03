"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { IuserList } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import LoginRegisterBtn from "./LoginRegisterBtn";
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

const ProfileList = ({ className }: IuserList) => {
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();

  const { user } = useSelector((state: any) => state.auth);
  const [isMounded, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {} = useLogoutQuery(undefined, {
    skip: !isLogout,
  });

  if (!isMounded) {
    return <LoginRegisterBtn />;
  }

  const handleLogout = (item: { name: string; path: string }) => {
    if (item.path === "/") {
      toast.success("Logout successfull");
      setIsLogout(true);
      router.replace("/");
      window.location.reload();
    }
  };

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
            <Link
              onClick={() => handleLogout(item)}
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
