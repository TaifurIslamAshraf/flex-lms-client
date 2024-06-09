"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useGetSubcategoryQuery } from "@/redux/features/categorize/categorizeApi";
import { ISubCategory } from "@/types/category";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  parantClass?: string;
};

const CourseFilters = ({ parantClass }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [price, setPrice] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  const handleSelectSubcategory = (subcategoryId: string) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategoryId ? null : subcategoryId
    );
    if (params.get("category")) {
      params.delete("category");
    }
  };

  const handleSelectPrice = (priceType: string) => {
    setPrice(price === priceType ? null : priceType);
  };

  const handleSelectLevel = (selectedLevel: string) => {
    setLevel(level === selectedLevel ? null : selectedLevel);
  };

  // Create search query string
  const createQueryString = useCallback(
    (name: string, value?: string | null) => {
      const newParams = new URLSearchParams(params);
      if (value) {
        newParams.set(name, value);
      } else {
        newParams.delete(name);
      }
      return newParams.toString();
    },
    [params]
  );

  // Side effects to sync state with URL parameters
  useEffect(() => {
    const subcategoryParams = params.get("subcategory");
    const priceParams = params.get("price");
    const levelParams = params.get("level");

    if (subcategoryParams) {
      setSelectedSubcategory(subcategoryParams);
    }
    if (priceParams) {
      setPrice(priceParams);
    }
    if (levelParams) {
      setLevel(levelParams);
    }
  }, [params]);

  useEffect(() => {
    const url = `/courses?${createQueryString(
      "subcategory",
      selectedSubcategory
    )}`;
    router.push(url);
  }, [createQueryString, router, selectedSubcategory]);

  useEffect(() => {
    const url = `/courses?${createQueryString("price", price)}`;
    router.push(url);
  }, [createQueryString, router, price]);

  useEffect(() => {
    const url = `/courses?${createQueryString("level", level)}`;
    router.push(url);
  }, [createQueryString, router, level]);

  //reset filters
  const handleClearFilter = () => {
    router.push("/courses");
    setLevel(null);
    setPrice(null);
    setSelectedSubcategory(null);
    params.delete("category");
    params.delete("subcategory");
    params.delete("price");
    params.delete("level");
    router.refresh();
  };

  const {
    isSuccess,
    isLoading,
    data: subcategory,
  } = useGetSubcategoryQuery({});

  return (
    <div className={cn(parantClass)}>
      <div className="">
        <Accordion
          defaultValue="subcategory"
          type="single"
          collapsible
          className="w-full"
        >
          <AccordionItem value="subcategory">
            <AccordionTrigger className="font-semibold text-lg font-noto">
              সাবক্যাটাগরি
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {subcategory?.data &&
                  subcategory?.data?.map((items: ISubCategory) => (
                    <div className="flex items-center gap-2" key={items?._id}>
                      <Checkbox
                        className="w-[20px] h-[20px]"
                        checked={selectedSubcategory === items?._id}
                        onCheckedChange={() =>
                          handleSelectSubcategory(items?._id)
                        }
                      />
                      <Label
                        className="text-base text-muted-foreground cursor-pointer"
                        htmlFor={items?.slug}
                        onClick={() => handleSelectSubcategory(items?._id)}
                      >
                        {items?.name}
                      </Label>
                    </div>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="font-semibold text-lg font-noto">
              প্রাইজ
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={price === "offers"}
                    onCheckedChange={() => handleSelectPrice("offers")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="offers"
                    onClick={() => handleSelectPrice("offers")}
                  >
                    স্পেশাল অফার
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={price === "paid"}
                    onCheckedChange={() => handleSelectPrice("paid")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="paid"
                    onClick={() => handleSelectPrice("paid")}
                  >
                    পেইড
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={price === "free"}
                    onCheckedChange={() => handleSelectPrice("free")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="free"
                    onClick={() => handleSelectPrice("free")}
                  >
                    ফ্রী
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="level">
            <AccordionTrigger className="font-semibold text-lg font-noto">
              লেভেল
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={level === "beginner"}
                    onCheckedChange={() => handleSelectLevel("beginner")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="beginner"
                    onClick={() => handleSelectLevel("beginner")}
                  >
                    বিগেনার
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={level === "intermediate"}
                    onCheckedChange={() => handleSelectLevel("intermediate")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="intermediate"
                    onClick={() => handleSelectLevel("intermediate")}
                  >
                    ইন্টারমিডিয়েট
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="w-[20px] h-[20px]"
                    checked={level === "expert"}
                    onCheckedChange={() => handleSelectLevel("expert")}
                  />
                  <Label
                    className="text-base text-muted-foreground cursor-pointer"
                    htmlFor="expert"
                    onClick={() => handleSelectLevel("expert")}
                  >
                    এক্সপার্ট
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button onClick={handleClearFilter} className="w-full mt-4">
        রিসেট ফিল্টার
      </Button>
    </div>
  );
};

export default CourseFilters;
