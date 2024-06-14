import AddToCart from "../AddToCart";
import { Button } from "../ui/button";

type Props = {
  details: { title: string; _id: string }[];
  level: string;
  price: number;
  courseId: string;
};

const CourseDetails = ({ details, level, price, courseId }: Props) => {
  return (
    <div className="xl:max-w-[330px] max-w-full w-full min-w-[320px] shadow-lg p-2 rounded-3xl">
      <div className="bg-muted p-4 rounded-3xl space-y-6">
        <h1 className="text-lg text-primary">
          <span className="font-medium text-muted-foreground">Level:</span>{" "}
          {level}
        </h1>
        <ul className="space-y-5">
          {details?.map((item) => (
            <li
              className="list-disc list-inside font-medium font-noto text-lg"
              key={item?._id}
            >
              {item.title}
            </li>
          ))}
        </ul>

        <h1 className="text-3xl font-noto font-bold">ফি {price} টাকা</h1>
        <div className="space-y-3">
          <Button
            className="bg-primary font-bold font-siliguri text-lg w-full"
            size={"lg"}
          >
            কোর্সটি কিনুন
          </Button>

          <AddToCart
            parantClass="text-primary font-semibold font-noto w-full flex items-center gap-2"
            courseId={courseId}
            cartText="কার্টে যুক্ত করুন"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
