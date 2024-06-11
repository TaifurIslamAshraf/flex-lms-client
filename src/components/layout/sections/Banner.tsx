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
        "lg:px-20 md:px-10 sm:px-5 px-4 lg:flex block items-center justify-center bg-secondary pt-[80px]"
      )}
    >
      <div className="flex-1 space-y-4">
        <TextAnimation
          text="লক্ষ্য হোক দক্ষ হওয়া!"
          classes="lg:text-[3rem] lg:text-start lg:mt-0 mt-6 sm:text-[2.5rem] text-center text-[1.8rem] sm:text-center font-siliguri font-extrabold"
        />

        <p className="lg:text-lg lg:text-start sm:text-lg text-sm text-center">
          ‘সব সম্ভব’- এর এই যুগে আপনি কেনো ‘অসম্ভব’ এর নামতা আওড়াচ্ছেন? এখন ঘরে
          বসেই নিজের স্কিল ডেভেলপ করুন- সেরা এক্সপার্টদের কাছ থেকে!
        </p>

        <Button className="text-lg font-[500] font-siliguri block mx-auto lg:mx-0 lg:grid lg:place-content-center">
          <Link href={"/courses"}>সকল কোর্স</Link>
        </Button>
      </div>
      <div className="flex-1">
        <Image
          className="lg:mx-0 block mx-auto"
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
