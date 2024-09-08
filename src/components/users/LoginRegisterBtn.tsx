import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginRegisterBtn = ({ className }: { className?: string }) => {
  return (
    <Button className={className}>
      <Link href={"/login"} className={cn("text-[1rem] font-semibold")}>
        লগইন/রেজিস্ট্রেশন
      </Link>
    </Button>
  );
};

export default LoginRegisterBtn;
