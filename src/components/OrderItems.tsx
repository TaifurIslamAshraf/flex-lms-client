"use client";

import { serverUrl } from "@/lib/utils";
import { ICartItem } from "@/types/cart";
import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ComponentLoader from "./ComponentLoader";
import { Card } from "./ui/card";

type Props = {
  cartItems: ICartItem[];
  isLoading: boolean;
};

const OrderItems = ({ cartItems, isLoading }: Props) => {
  // const [totalPrice, setTotalPrice] = useState(0);

  // const { data, isLoading } = useGetAllCartItemsQuery({});
  // console.log(data, "cartItems");
  // const cartItems = data as ICartItem[];

  //calculate total price

  // useEffect(() => {
  //   if (cartItems) {
  //     const calculatedTotalPrice = cartItems.reduce(
  //       (total, item) => total + item.price,
  //       0
  //     );
  //     setTotalPrice(calculatedTotalPrice);
  //   }
  // }, [cartItems]);

  return (
    <div className="bg-primary-foreground p-4 ">
      <div className="mb-6 text-lg font-[500] text-secondary-foreground flex items-center gap-2">
        <List size={20} />
        <h1>Order Items</h1>
      </div>

      {isLoading ? (
        <ComponentLoader />
      ) : (
        <>
          {cartItems?.length > 0 && (
            <div className="">
              {cartItems &&
                cartItems?.map((item: ICartItem) => (
                  <div className="my-5" key={item?._id}>
                    <Card className="rounded-xl transition-all duration-500 md:flex block gap-2">
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
                        <div className="space-y-2">
                          <div className="">
                            <h1 className="font-medium text-base">
                              {item?.name}
                            </h1>
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
          )}
        </>
      )}
    </div>
  );
};

export default OrderItems;
