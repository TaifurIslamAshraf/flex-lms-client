import Link from "next/link";
import { Button } from "../ui/button";

const LoginRegisterBtn = () => {
  return (
    <Button>
      <Link href={"/login"} className="text-[1rem] font-semibold">
        লগইন/রেজিস্ট্রেশন
      </Link>
    </Button>
  );
};

export default LoginRegisterBtn;
