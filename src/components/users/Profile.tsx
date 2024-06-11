import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LoginRegisterBtn from "./LoginRegisterBtn";
import ProfileList from "./ProfileList";
import ProfilePicture from "./ProfilePicture";

const Profile = async () => {
  // const { user } = useSelector((state: any) => state.auth);

  // const { data: session } = useSession();

  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="">
      {session?.user ? (
        <div className="relative group">
          <div className="cursor-pointer rounded-full m-auto w-[40px] h-[40px]  ">
            <ProfilePicture avatar={session?.user?.avatar} />
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
