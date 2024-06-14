"use client";

import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import {
  useGetAllCartItemsQuery,
  useRemoveCartMutation,
} from "@/redux/features/cart/cartApi";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-hot-toast";

type Props = {
  courseId: string;
};

const RemoveToCart = ({ courseId }: Props) => {
  const session = useSession();
  const [removeCart, { isLoading, isSuccess }] = useRemoveCartMutation();
  const { refetch } = useGetAllCartItemsQuery({
    accessToken: session?.data?.accessToken,
  });

  const handleCartItemRemove = async () => {
    await removeCart({ courseId, accessToken: session?.data?.accessToken });
    await customRevalidateTag("Cart");
    await refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Remove From Cart");
    }
  }, [isSuccess]);

  return (
    <div
      onClick={handleCartItemRemove}
      className="text-primary hover:text-red-500 cursor-pointer"
    >
      <Trash2 />
    </div>
  );
};

export default RemoveToCart;
