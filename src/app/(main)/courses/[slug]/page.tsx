import SingleCourse from "@/components/course/SingleCourse";
import { getSingleCourse } from "@/lib/_actions/course.action";
import { ISingleCourse } from "@/types/courses";

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const { data: course }: { data: ISingleCourse } = await getSingleCourse(
    params.slug
  );

  return (
    <>
      <SingleCourse course={course} />
    </>
  );
};

export default page;
