"use client";

import { Button } from "@/components/ui/button";
import { updateUser } from "@/redux/features/auth/authSlice";
import { useAddCartMutation } from "@/redux/features/cart/cartApi";
import { ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  courseId: string;
}

const AddToCart = ({ courseId }: Props) => {
  const dispatch = useDispatch();
  const [addCart, { isLoading, isSuccess, error, data }] = useAddCartMutation();

  const handleAddToCart = async () => {
    await addCart({ courseId });
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
      className="flex items-center gap-1 font-siliguri"
      onClick={handleAddToCart}
    >
      <ShoppingBag size={20} className="text-primary font-semibold" />{" "}
      <span>কার্ট</span>
    </Button>
  );
};

export default AddToCart;
