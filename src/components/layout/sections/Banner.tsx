import { styles } from "@/app/styles";
import { getSingleLayout } from "@/lib/_actions/layout.action";
import { cn, serverUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TextAnimation from "../../TextAnim/TextAnimation";
import { Button } from "../../ui/button";

const Banner = async () => {
  const { data } = await getSingleLayout("selected");

  return (
    <section
      className={cn(
        styles.layout,
        "lg:px-20 md:px-10 sm:px-5 px-4 lg:flex block items-center justify-center bg-secondary pt-[80px]"
      )}
    >
      <div className="flex-1 space-y-4 pb-12 lg:pb-0">
        <TextAnimation
          text={data?.title}
          classes="lg:text-[3.9rem] lg:text-start lg:mt-0 mt-6 md:text-[3rem] text-center sm:text-[2.5rem] text-[1.8rem] sm:text-center font-siliguri font-extrabold"
        />

        <p className="lg:text-lg font-noto lg:text-start sm:text-lg text-sm text-center">
          {data?.description}
        </p>

        <div className="mb-3">
          <Link href={"/courses"}>
            <Button
              size={"lg"}
              className="text-xl font-semibold block mx-auto lg:mx-0 lg:grid lg:place-content-center font-siliguri"
            >
              সকল কোর্স
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          className="lg:mx-0 block mx-auto"
          src={`${serverUrl}/${data?.image}`}
          alt="main banner"
          height={680}
          width={830}
        />
      </div>
    </section>
  );
};

export default Banner;
