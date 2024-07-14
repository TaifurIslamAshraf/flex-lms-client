"use client";

import { z } from "zod";

import { styles } from "@/app/styles";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import CheckoutForm from "@/components/CheckoutForm";
import OrderItems from "@/components/OrderItems";
import { handleRevalidation } from "@/lib/_actions/revalidateTag";
import { checkoutSchema } from "@/lib/formShemas/checkout.schema";
import { updateCartItems } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/checkout/checkoutApi";
import { useSingleCourseQuery } from "@/redux/features/courses/courseApi";
import { ISingleCourse } from "@/types/courses";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

type Props = {
  params: { slug: string };
};

const Purchase = ({ params }: Props) => {
  const router = useRouter();
  const session = useSession();
  const dispatch = useDispatch();

  const [createOrder, { isLoading, error, isError, isSuccess }] =
    useCreateOrderMutation();
  const { data, isLoading: isCartItemLoading } = useSingleCourseQuery({
    slug: params.slug,
  });

  const course = data?.data as ISingleCourse;

  const cartItems = [
    {
      _id: course?._id,
      name: course?.name,
      slug: course?.slug,
      thumbnail: course?.thumbnail,
      price: course?.price,
    },
  ];

  console.log(cartItems);

  const orderPayload = [{ course: course?._id, price: course?.price }];
  const handleSubmit = async (value: z.infer<typeof checkoutSchema>) => {
    const payload = {
      items: orderPayload,
      ...value,
    };

    await createOrder({ payload, accessToken: session?.data?.accessToken });
    await handleRevalidation("Order");
    router.refresh();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order successfully plased");
      router.replace("/checkout/orderSuccess");
      dispatch(updateCartItems({ cartItems: 0 }));
    } else if (isError) {
      const errroData = error as any;
      toast.error(errroData?.data?.message);
    }
  }, [dispatch, error, isError, isSuccess, router]);

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
            <CheckoutForm
              isCartEmpty={cartItems && 1}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
