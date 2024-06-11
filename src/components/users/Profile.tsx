"use client";

import { useSelector } from "react-redux";

import LoginRegisterBtn from "@/components/users/LoginRegisterBtn";
import { useEffect, useState } from "react";
import ProfileList from "./ProfileList";
import ProfilePicture from "./ProfilePicture";

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
        <div className="relative group">
          <div className="cursor-pointer rounded-full m-auto w-[40px] h-[40px]  ">
            <ProfilePicture avatar={user?.avatar} />
          </div>

          <ProfileList className="w-[400px] bg-white absolute shadow-lg -right-[500px] rounded-lg p-5 opacity-0 group-hover:opacity-100 group-hover:-right-6 duration-300" />
        </div>
      ) : (
        <LoginRegisterBtn />
      )}
    </div>
  );
};

export default Profile;
