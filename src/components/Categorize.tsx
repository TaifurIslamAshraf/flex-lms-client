"use client";

import { Separator } from "@/components/ui/separator";
import { cn, serverUrl } from "@/lib/utils";
import {
  useGetAllCategoryQuery,
  useGetSubcategoryByCategoryQuery,
} from "@/redux/features/categorize/categorizeApi";
import { ICateogry, ISubcategory } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Categorize = () => {
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const { data: category } = useGetAllCategoryQuery({});
  const { data, isLoading, error, isSuccess, refetch } =
    useGetSubcategoryByCategoryQuery({ categoryId }, { skip: !categoryId });

  const handleCategory = (id: string) => {
    setCategoryId(id);
  };
  console.log(data?.data?.subcategory);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary-foreground hover:bg-primary hover:text-secondary font-noto font-semibold text-[1rem]">
            সকল ক্যাটাগরি
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" p-4 max-h-[100vh]">
            <div className="flex justify-between">
              <div className="overflow-y-auto min-w-[250px]">
                {category?.data?.category &&
                  category?.data?.category?.map((item: ICateogry) => (
                    <div
                      className={cn(
                        "pt-1 px-1",
                        categoryId === item?._id ? "bg-muted" : ""
                      )}
                      key={item?._id}
                    >
                      <h1
                        onClick={() => handleCategory(item?._id)}
                        className="cursor-pointer my-2 hover:text-primary"
                      >
                        {item?.name}
                      </h1>
                      <Separator className="opacity-50" />
                    </div>
                  ))}
              </div>
              <div className="">
                {data?.data?.subcategory &&
                  data?.data?.subcategory?.map((item: ISubcategory) => (
                    <div className="" key={item._id}>
                      {item?.courses && item?.courses?.length > 0 ? (
                        <div className="max-w-[650px] w-full ml-6 py-3 space-y-2">
                          <Link
                            className="font-bold text-lg hover:text-primary"
                            href={`/courses?subcategory=${item?._id}`}
                          >
                            {item?.name}
                          </Link>
                          <Separator />

                          {item?.courses?.map((courseItem) => (
                            <Link
                              href={`/courses/${courseItem?.slug}`}
                              key={courseItem?._id}
                            >
                              <div className="flex gap-3 w-[330px] border border-muted shadow-sm m-2 rounded-lg hover:bg-secondary">
                                <Image
                                  className="h-[80px] object-cover rounded-tl-lg rounded-bl-lg"
                                  src={`${serverUrl}/${courseItem?.thumbnail}`}
                                  alt={courseItem?.slug}
                                  width={150}
                                  height={80}
                                />
                                <h2>{courseItem?.name}</h2>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Categorize;
