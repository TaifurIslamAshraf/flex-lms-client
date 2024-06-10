import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";

interface Props {
  pagination: {
    numberOfCourse?: number;
    totalPage: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
  };
  category?: string;
  type: "allCourse" | "userCourse";
}

const Paginations: FC<Props> = ({ pagination, category, type }) => {
  const totalPage = Array.from({ length: pagination?.totalPage });

  const nextPage = pagination?.totalPage === 1 ? 1 : pagination?.nextPage;

  const paginationNextPage =
    type === "allCourse"
      ? `/courses?page=${nextPage}`
      : `/dashboard/courses?page=${nextPage}`;

  const paginationPrevPage =
    type === "userCourse"
      ? `/courses?page=${pagination?.prevPage}`
      : `/dashboard/courses?page=${pagination?.prevPage}`;

  return (
    <div className="overflow-x-hidden">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={paginationPrevPage} />
          </PaginationItem>

          {totalPage.map((_, index: number) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={
                  type === "allCourse"
                    ? `/courses?page=${index + 1}`
                    : `/dashboard/courses?page=${index + 1}`
                }
                isActive={index + 1 === pagination?.currentPage}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={paginationNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginations;
