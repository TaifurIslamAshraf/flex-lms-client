import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Props = {
  totalPrice: number;
  parantClass?: string;
};

const CheckoutCard = ({ totalPrice, parantClass }: Props) => {
  return (
    <Card className={parantClass}>
      <CardHeader>
        <CardTitle className="font-siliguri">বিস্তারিত মূল্য</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-lg font-noto text-muted-foreground">
              কোর্স মূল্য
            </p>{" "}
            <h2 className="font-noto font-medium text-lg">{totalPrice} টাকা</h2>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-lg font-noto text-muted-foreground">মোট মূল্য</p>{" "}
            <h2 className="font-noto font-medium text-lg">{totalPrice} টাকা</h2>
          </div>
        </div>
        <p className="text-muted-foreground text-sm font-noto">
          ব্রাইট স্কিলস প্ল্যাটফর্মের কোর্সসমূহ ইন্ডাস্ট্রির দক্ষ ও অভিজ্ঞ
          মেন্টর দ্বারা প্রণয়ন করা হয়। আধুনিক কারিকুলাম ও সহজ উপায়ে বোধগম্য লেসন
          উপস্থাপনের জন্য এ প্ল্যাটফর্মটি শিক্ষার্থীদের মাঝে জনপ্রিয় হয়ে উঠেছে।
          সুতরাং, যোগ দিন সেরাদের সাথে।
        </p>

        <div className="">
          <Link href={"/checkout"} className="my-3">
            <Button
              size={"lg"}
              className="w-full font-noto font-semibold text-lg"
            >
              কোর্স কিনুন
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckoutCard;
