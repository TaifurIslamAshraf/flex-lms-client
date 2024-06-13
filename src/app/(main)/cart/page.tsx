import { styles } from "@/app/styles";
import CheckoutCard from "@/components/CheckoutCard";
import RemoveToCart from "@/components/RemoveToCart";
import { Card } from "@/components/ui/card";
import { getAllCartItems } from "@/lib/_actions/cart.action";
import { cn, serverUrl } from "@/lib/utils";
import { ICartItem } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const cartItems = await getAllCartItems();
  let totalPrice = 0;
  cartItems?.data &&
    cartItems?.data?.forEach((item: ICartItem) => {
      totalPrice += item.price;
    });

  return (
    <div className={cn("pt-[80px]", styles.layout)}>
      <div className={cn("space-y-2 bg-muted py-8", styles.paddingX)}>
        <h1 className="font-siliguri font-semibold text-2xl md:text-4xl text-primary">
          কার্ট
        </h1>
        <p className="font-noto font-medium md:text-xl text-lg">
          কার্টে {cartItems?.data?.length} টি কোর্স যুক্ত রয়েছে
        </p>
      </div>

      <div
        className={cn(
          styles.paddingX,
          "flex gap-8 justify-evenly lg:flex-row flex-col-reverse"
        )}
      >
        <div className="">
          {cartItems?.data &&
            cartItems?.data?.map((item: ICartItem) => (
              <div className="my-5" key={item?._id}>
                <Card className="rounded-xl transition-all duration-500 hadow-md md:flex block my-auto gap-2">
                  <Link href={`/courses/${item?.slug}`}>
                    <Image
                      src={`${serverUrl}/${item?.thumbnail}`}
                      alt={item?.slug}
                      width={200}
                      height={100}
                      className="rounded-xl md:max-w-[200px] w-full"
                    />
                  </Link>

                  <div className="p-4 flex flex-col justify-between w-full">
                    <div className="space-y-3">
                      <div className="flex justify-between gap-4">
                        <Link
                          href={`/courses/${item?.slug}`}
                          className="font-medium text-base md:text-lg"
                        >
                          {item?.name}
                        </Link>
                        <RemoveToCart courseId={item?._id} />
                      </div>

                      <h2 className="md:text-xl text-lg text-primary font-semibold">
                        {item?.price} টাকা
                      </h2>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
        </div>
        <CheckoutCard
          parantClass="lg:max-w-[350px] w-full my-5 h-fit"
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default page;
