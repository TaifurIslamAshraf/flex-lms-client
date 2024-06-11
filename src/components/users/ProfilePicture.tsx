import { assests } from "@/lib/assests";
import { serverUrl } from "@/lib/utils";
import Image from "next/image";

const ProfilePicture = ({
  avatar,
  height = 40,
  width = 40,
}: {
  avatar: string | undefined;
  height?: number;
  width?: number;
}) => {
  return (
    <Image
      className="rounded-full object-cover"
      src={avatar ? `${serverUrl}/${avatar}` : assests.defaultAvater}
      alt="default avater"
      height={height}
      width={width}
    />
  );
};

export default ProfilePicture;
