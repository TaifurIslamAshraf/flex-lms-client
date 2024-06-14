"use client";

import { Button } from "@/components/ui/button";
import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import { updateUser } from "@/redux/features/auth/authSlice";
import { useAddCartMutation } from "@/redux/features/cart/cartApi";
import { ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  courseId: string;
  cartText?: string;
  parantClass?: string;
}

const AddToCart = ({ courseId, cartText = "কার্ট", parantClass }: Props) => {
  const dispatch = useDispatch();
  const session = useSession();
  const [addCart, { isLoading, isSuccess, error, data }] = useAddCartMutation(
    {}
  );

  const handleAddToCart = async () => {
    await addCart({ courseId, accessToken: session?.data?.accessToken });
    await customRevalidateTag("Cart");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added To Cart");
      dispatch(updateUser({ user: data?.data }));
    } else if (error) {
      const errorData = error as any;
      toast.error(errorData.data?.message);
    }
  }, [data?.data, dispatch, error, isSuccess]);

  return (
    <Button
      variant={"outline"}
      className={parantClass}
      onClick={handleAddToCart}
    >
      <ShoppingBag size={20} className="text-primary font-semibold" />{" "}
      <span>{cartText}</span>
    </Button>
  );
};

export default AddToCart;
