import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  slug: string;
};

const BuyCourse = async ({ slug }: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Link href={session ? `/purchase/${slug}` : `/login`}>
        <Button className="font-siliguri font-semibold">কোর্সটি কিনুন</Button>
      </Link>
    </div>
  );
};

export default BuyCourse;
