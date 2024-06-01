"use client";

import { serverUrl } from "@/lib/utils";
import Image from "next/image";
import { useSelector } from "react-redux";

import { assests } from "@/lib/assests";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginRegisterBtn from "./LoginRegisterBtn";

const Profile = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [isMounded, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounded) {
    return <LoginRegisterBtn />;
  }

  return (
    <div className="">
      {user?.name ? (
        <Link href={"/profile"}>
          <div className="cursor-pointer rounded-full m-auto w-[40px] h-[40px]">
            <Image
              className="rounded-full object-cover"
              src={
                user.avatar
                  ? `${serverUrl}/${user.avatar}`
                  : assests.defaultAvater
              }
              alt="default avater"
              height={40}
              width={40}
              placeholder="blur"
            />
          </div>
        </Link>
      ) : (
        <LoginRegisterBtn />
      )}
    </div>
  );
};

export default Profile;
