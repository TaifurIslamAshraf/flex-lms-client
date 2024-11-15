import { styles } from "@/app/styles";
import CourseCard from "@/components/course/CourseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getRandomCategoryCourses } from "@/lib/_actions/course.action";
import { cn } from "@/lib/utils";
import { ICategoryCourse } from "@/types/courses";

const CategoryCourses = async () => {
  const courses = await getRandomCategoryCourses();

  return (
    <div className={cn(styles.paddingX, styles.paddingY, styles.layout)}>
      {courses?.data &&
        courses?.data?.map((item: ICategoryCourse) => (
          <div className="" key={item?._id}>
            {item.courses?.length > 0 && (
              <div className="">
                <h1 className="text-xl text-primary font-siliguri lg:text-2xl font-semibold my-3 uppercase">
                  {item?.name}
                </h1>
                <Separator className="mb-4" />

                <Carousel
                  className="rounded-xl bg-muted mb-10"
                  opts={{
                    align: "center",
                  }}
                >
                  <CarouselContent className="md:px-6 md:py-4 px-2 py-0">
                    {item?.courses?.length > 0 &&
                      item?.courses?.map((courseItem) => (
                        <CarouselItem
                          key={courseItem._id}
                          className="lg:basis-1/3 md:basis-1/2 sm:basis-1/2 basis-full p-4 "
                        >
                          <CourseCard
                            item={courseItem}
                            containerClass="p-3 rounded-xl shadow-md transition-all max-w-[360px] max-h-[400px] h-full w-full bg-white"
                          />
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute top-1/2 -left-6 w-[40px] h-[40px] hover:text-primary md:block hidden" />
                  <CarouselNext className="absolute top-1/2 -right-6 w-[40px] h-[40px] hover:text-primary md:block hidden" />
                </Carousel>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default CategoryCourses;
