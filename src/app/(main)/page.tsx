import Banner from "@/components/layout/sections/Banner";
import CategoryCourses from "@/components/layout/sections/CategoryCourses";
import Footer from "@/components/layout/sections/Footer";
import RandomCourse from "@/components/layout/sections/RandomCourse";

export default async function Home() {
  return (
    <main className="">
      <Banner />
      <RandomCourse />
      <CategoryCourses />
      <Footer />
    </main>
  );
}
