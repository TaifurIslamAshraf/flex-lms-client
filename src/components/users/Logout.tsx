"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div
      onClick={async () => await signOut()}
      className="font-noto text-lg cursor-pointer"
    >
      লগ আউট
    </div>
  );
};

export default Logout;
