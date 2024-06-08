import { styles } from "@/app/styles";
import CourseCard from "@/components/course/CourseCard";
import { getRandomCourses } from "@/lib/_actions/course.action";
import { cn, serverUrl } from "@/lib/utils";
import { ICourse } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";

const RandomCourse = async () => {
  const courses = await getRandomCourses();
  return (
    <div
      className={cn(
        styles.paddingX,
        styles.paddingY,
        styles.layout,
        "space-y-10"
      )}
    >
      <div className="max-w-[550px] mx-auto space-y-3 text-center">
        <h1 className="font-siliguri font-semibold md:text-3xl sm:text-[1.4rem] text-[1.3rem]">
          প্রফেশনাল <span className="text-primary">দক্ষতা উন্নয়নে</span> এগিয়ে
          যান - এখনই!
        </h1>
        <p className="text-muted-foreground">
          প্রতিযোগিতামূলক এই জব-মার্কেটে নিজের ক্যারিয়ারকে নিয়ে যান অনন্য
          উচ্চতায়। আপনার জন্য প্রয়োজনীয় সব ক্যাটাগরিই রয়েছে এখানে। বেছে নিন
          আপনার সবচেয়ে পছন্দের কোর্সটি।
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-4">
        {courses?.data && (
          <>
            <div className="">
              {/* First course */}
              {courses?.data.length > 0 && (
                <Link
                  key={courses?.data[0]?._id}
                  href={`/courses/${courses?.data[0]?.slug}`}
                >
                  <div className="p-3 shadow-xl shadow-slate-200 rounded-xl hover:shadow-md transition-all">
                    <Image
                      src={`${serverUrl}/${courses?.data[0]?.thumbnail}`}
                      alt={courses?.data[0]?.slug}
                      height={300}
                      width={550}
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="">
                      <div className="space-y-4">
                        <h1 className="text-xl font-bold mt-4">
                          {courses?.data[0]?.name}
                        </h1>
                        <p className="text-muted-foreground">
                          {courses?.data[0]?.description?.length > 300
                            ? `${courses?.data[0]?.description?.substring(
                                0,
                                300
                              )}...`
                            : courses?.data[0]?.description}
                        </p>
                      </div>
                      <div className="my-4 flex items-center justify-end gap-3">
                        <h2 className="line-through text-lg text-muted-foreground font-semibold">
                          {courses?.data[0]?.estimatedPrice} টাকা
                        </h2>
                        <h2 className="text-xl text-primary font-semibold">
                          {courses?.data[0]?.price} টাকা
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {courses?.data?.slice(1)?.map((item: ICourse) => (
                <CourseCard
                  containerClass="p-3 shadow-xl shadow-slate-200 rounded-xl hover:shadow-md transition-all"
                  item={item}
                  key={item?._id}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RandomCourse;
