"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

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
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </PaginationLink>
          </PaginationItem>
        )}

        {getPages().map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === currentPage}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < numberOfPages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
