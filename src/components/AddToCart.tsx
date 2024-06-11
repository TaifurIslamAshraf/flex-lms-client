"use client";

import { Button } from "@/components/ui/button";
import { useAddCartMutation } from "@/redux/features/cart/cartApi";
import { ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface Props {
  courseId: string;
}

const AddToCart = ({ courseId }: Props) => {
  const [addCart, { isLoading, isSuccess, error }] = useAddCartMutation();

  const handleAddToCart = async () => {
    await addCart({ courseId });
    console.log("first");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added To Cart");
    } else if (error) {
      const errorData = error as any;
      toast.error(errorData.data?.message);
    }
  }, [error, isSuccess]);

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
