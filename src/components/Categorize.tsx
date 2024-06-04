"use client";

import { Separator } from "@/components/ui/separator";
import { useGetAllCategoryQuery } from "@/redux/features/categorize/categorizeApi";
import { ICateogry } from "@/types/category";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Categorize = () => {
  const { data, isLoading, isSuccess, error } = useGetAllCategoryQuery({});
  console.log(data?.data?.category);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary-foreground hover:bg-primary hover:text-secondary font-noto font-semibold text-[1rem]">
            সকল ক্যাটাগরি
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 max-w-[500px] min-w-[300px] max-h-[100vh] overflow-y-auto">
            <div className="">
              {data?.data?.category &&
                data?.data?.category?.map((item: ICateogry) => (
                  <div className="" key={item?._id}>
                    <h1 className="cursor-pointer my-2 hover:text-primary">
                      {item?.name}
                    </h1>
                    <Separator className="opacity-50" />
                  </div>
                ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Categorize;
