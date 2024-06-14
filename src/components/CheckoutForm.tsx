"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkoutSchema } from "@/lib/formShemas/checkout.schema";
import { Receipt } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Button } from "./ui/button";

type Props = {
  handleSubmit: (value: z.infer<typeof checkoutSchema>) => void;
};

const CheckoutForm = ({ handleSubmit }: Props) => {
  const session = useSession();
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
  });

  useEffect(() => {
    if (session?.data?.user) {
      form.setValue("phone", session?.data?.user?.phone);
    }
  }, [form, session?.data?.user]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="">
        <div className="bg-primary-foreground p-4">
          <h2 className="mb-6 text-lg font-[500] text-secondary-foreground flex items-center gap-2">
            <Receipt size={20} /> Billing Details{" "}
          </h2>
          <div className="space-y-4">
            <FormField
              name="accountType"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-primary">Payment Method</Label>
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="Enter Your Account Type: Baksh, Nagad"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="accountNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-primary">Account Number</Label>
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="Enter Your Account Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="transactionId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-primary">Transaction Id</Label>
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="Enter Your Transaction Id"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-primary">Phone Number</Label>
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="Enter Your Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full my-6" type="submit">
            Order Now
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
