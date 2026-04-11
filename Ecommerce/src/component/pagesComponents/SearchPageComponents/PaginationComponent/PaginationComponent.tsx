"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PaginationComponent({
  currentPage,
  numberOfPages,
}: {
  currentPage: number;
  numberOfPages: number;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(Array.from(params.entries()));

    newParams.set("page", page.toString());

    startTransition(() => {
      router.replace(`/search?${newParams.toString()}`);
    });
  };

  // ✅ pages range
  const getPages = () => {
    const delta = 2;

    const start = Math.max(1, currentPage - delta);
    const end = Math.min(numberOfPages, currentPage + delta);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      {numberOfPages > 1 && (
        <Pagination className="my-3">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer "
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <IoIosArrowBack />
                </PaginationLink>
              </PaginationItem>
            )}

            {getPages().map((p) => (
              <PaginationItem key={p}>
                <button
                  className={`cursor-pointer mx-1 size-10 flex justify-center items-center p-3 rounded-lg ${p === currentPage ? " bg-green-500 text-white" : " bg-white text-black hover:bg-gray-200 duration-200 transition-colors"}`}
                  onClick={() => {
                    handlePageChange(p);
                  }}
                >
                  {p}
                </button>
              </PaginationItem>
            ))}

            {currentPage < numberOfPages && (
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer "
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <IoIosArrowForward />
                </PaginationLink>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
