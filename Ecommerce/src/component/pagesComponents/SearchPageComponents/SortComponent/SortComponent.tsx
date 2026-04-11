"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function SortComponent() {
  const params = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const value = params.get("sort") || "";

  const handleChange = (val: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (val) newParams.set("sort", val);
    else newParams.delete("sort");

    newParams.set("page", "1");

    startTransition(() => {
      router.replace(`/search?${newParams.toString()}`);
    });
  };

  return (
    <select
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
    >
      <option value="">Relevance</option>
      <option value="price">Price: Low to High</option>
      <option value="-price">Price: High to Low</option>
      <option value="-ratingsAverage">Rating</option>
      <option value="title">A-Z</option>
      <option value="-title">Z-A</option>
    </select>
  );
}
