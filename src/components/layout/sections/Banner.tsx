import { styles } from "@/app/styles";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TextAnimation from "../../TextAnim/TextAnimation";
import { Button } from "../../ui/button";

const Banner = () => {
  return (
    <section
      className={cn(
        styles.layout,
        "px-20 flex items-center justify-center bg-secondary pt-[80px]"
      )}
    >
      <div className="flex-1 space-y-4">
        <TextAnimation
          text="লক্ষ্য হোক দক্ষ হওয়া!"
          classes="text-[2.875rem] font-siliguri font-bold "
        />

        <p className="text-lg">
          ‘সব সম্ভব’- এর এই যুগে আপনি কেনো ‘অসম্ভব’ এর নামতা আওড়াচ্ছেন? এখন ঘরে
          বসেই নিজের স্কিল ডেভেলপ করুন- সেরা এক্সপার্টদের কাছ থেকে!
        </p>

        <Button size={"lg"} className="text-lg font-[500] font-siliguri">
          <Link href={"/courses"}>সকল কোর্স</Link>
        </Button>
      </div>
      <div className="flex-1">
        <Image
          src={assests.Main_banner}
          alt="main banner"
          height={680}
          width={830}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Banner;
