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
import { useState } from "react";

type Props = {
  parantClass?: string;
};

const CourseFilters = ({ parantClass }: Props) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [price, setPrice] = useState<string | null>(null);

  const handleSelectSubcategory = (subcategoryId: string) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategoryId ? null : subcategoryId
    );
  };
  const handleSelectPrice = (priceType: string) => {
    setPrice(price === priceType ? null : priceType);
  };

  const {
    isSuccess,
    isLoading,
    data: subcategory,
  } = useGetSubcategoryQuery({});

  return (
    <div className={cn(parantClass)}>
      <div className="">
        <Accordion type="single" collapsible className="w-full">
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
                        className="text-base text-muted-foreground"
                        htmlFor={items?.slug}
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
                    className="text-base text-muted-foreground"
                    htmlFor="offers"
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
                    className="text-base text-muted-foreground"
                    htmlFor="paid"
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
                    className="text-base text-muted-foreground"
                    htmlFor="free"
                  >
                    ফ্রী
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CourseFilters;
