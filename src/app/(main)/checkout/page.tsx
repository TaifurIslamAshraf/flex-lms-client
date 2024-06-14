"use client";

import { z } from "zod";

import { styles } from "@/app/styles";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import CheckoutForm from "@/components/CheckoutForm";
import OrderItems from "@/components/OrderItems";
import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import { checkoutSchema } from "@/lib/formShemas/checkout.schema";
import { useGetAllCartItemsQuery } from "@/redux/features/cart/cartApi";
import { useCreateOrderMutation } from "@/redux/features/checkout/checkoutApi";
import { ICartItem } from "@/types/cart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const router = useRouter();
  const session = useSession();

  const [createOrder, { isLoading, error, isError, isSuccess }] =
    useCreateOrderMutation();
  const { data, isLoading: isCartItemLoading } = useGetAllCartItemsQuery({
    accessToken: session?.data?.accessToken,
  });

  const cartItems = data?.data as ICartItem[];
  console.log(cartItems);
  const orderPayload =
    cartItems &&
    cartItems?.map((item) => {
      return { course: item?._id, price: item?.price };
    });
  const handleSubmit = async (value: z.infer<typeof checkoutSchema>) => {
    const payload = {
      items: orderPayload,
      ...value,
    };

    await createOrder({ payload, accessToken: session?.data?.accessToken });
    await customRevalidateTag("Cart");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order successfully plased");
      router.replace("/checkout/orderSuccess");
      router.refresh();
    } else if (isError) {
      const errroData = error as any;
      toast.error(errroData?.data?.message);
    }
  }, [error, isError, isSuccess, router]);

  return (
    <div className={cn(styles.paddingX, styles.layout, "w-full pt-[120px]")}>
      <div className="">
        <h1 className={cn("text-3xl font-semibold")}>Checkout</h1>
        <Separator />

        <div className="flex gap-6 my-4">
          <div className="flex-1">
            <OrderItems cartItems={cartItems} isLoading={isCartItemLoading} />
          </div>
          <div className="flex-1">
            <CheckoutForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
