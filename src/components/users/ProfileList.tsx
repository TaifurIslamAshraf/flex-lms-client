import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { IuserList } from "@/types/user";
import { getServerSession } from "next-auth";
import Link from "next/link";
<<<<<<< HEAD
import Logout from "./Logout";
=======
>>>>>>> 298d295 ([change] auth functionality)
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

const ProfileList = async ({ className }: IuserList) => {
<<<<<<< HEAD
=======
  // const handleLogout = (item: { name: string; path: string }) => {
  //   if (item.path === "/") {
  //     toast.success("Logout successfull");
  //     setIsLogout(true);
  //     router.replace("/");
  //     window.location.reload();
  //   }
  // };

>>>>>>> 298d295 ([change] auth functionality)
  const session = await getServerSession(authOptions);

  return (
    <div className={cn(className)}>
      <div className="md:flex block gap-6 items-center">
        <ProfilePicture avatar={session?.user?.avatar} height={50} width={50} />
        <div className="">
          <h1 className="font-bold text-xl uppercase">{session?.user?.name}</h1>
          <p className="text-muted-foreground">
            Mobile: {session?.user?.phone}
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="">
        {profileListLink.map((item, i) => (
          <div className="mb-4" key={i}>
<<<<<<< HEAD
            <Link className="font-noto text-lg" href={item.path}>
=======
            <Link
              // onClick={() => handleLogout(item)}
              className="font-noto text-lg"
              href={item.path}
            >
>>>>>>> 298d295 ([change] auth functionality)
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
