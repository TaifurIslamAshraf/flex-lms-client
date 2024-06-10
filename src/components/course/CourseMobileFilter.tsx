import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import CourseFilters from "./courseFilters";

const CourseMobileFilter = () => {
  return (
    <div className="lg:hidden block w-fit mt-5">
      <div className={cn("bg-white shadow-md w-full")}>
        <Sheet>
          <SheetTrigger className="flex items-center gap-1 px-5 py-3 rounded-md">
            <Filter />
            <span className="font-medium">Filter</span>
          </SheetTrigger>
          <SheetContent className="pt-6">
            <CourseFilters />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default CourseMobileFilter;
