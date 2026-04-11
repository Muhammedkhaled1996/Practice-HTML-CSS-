"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { FaXmark } from "react-icons/fa6";

export default function ActiveFilters({
  categories,
  brands,
}: {
  categories: any[];
  brands: any[];
}) {
  const params = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const removeFilter = (key: string, value?: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value) {
      const values = newParams.getAll(key).filter((v) => v !== value);
      console.log(values, "values");

      newParams.delete(key);
      values.forEach((v) => newParams.append(key, v));
    } else {
      newParams.delete(key);
    }

    newParams.set("page", "1");

    startTransition(() => {
      router.replace(`/search?${newParams.toString()}`);
    });
  };

  const clearAll = () => {
    router.replace("/search?page=1");
  };

  const getCategoryName = (id: string) =>
    categories.find((c) => c._id === id)?.name;

  const getBrandName = (id: string) => brands.find((b) => b._id === id)?.name;

  return (
    <>
      {params.size > 1 && (
        <>
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-500">Active:</span>

            {/* q */}
            {params.get("q") && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                "{params.get("q")}"
                <button onClick={() => removeFilter("q")}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            )}

            {/* categories */}
            {params.getAll("category").map((id) => (
              <span
                key={id}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs"
              >
                {getCategoryName(id)}
                <button onClick={() => removeFilter("category", id)}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            ))}

            {/* brands */}
            {params.getAll("brand").map((id) => (
              <span
                key={id}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs"
              >
                {getBrandName(id)}
                <button onClick={() => removeFilter("brand", id)}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            ))}

            {/* price */}
            {params.get("price[lte]") && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                Max: {params.get("price[lte]")}
                <button onClick={() => removeFilter("price[lte]")}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            )}

            {params.get("price[gte]") && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                Min: {params.get("price[gte]")}
                <button onClick={() => removeFilter("price[gte]")}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            )}

            {/* sort */}
            {params.get("sort") && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                Sort: {params.get("sort")}
                <button onClick={() => removeFilter("sort")}>
                  <FaXmark className="cursor-pointer hover:text-red-500 duration-200 transition-colors" />
                </button>
              </span>
            )}

            {/* clear all */}
            <button
              onClick={clearAll}
              className="cursor-pointer text-xs text-gray-500 hover:text-red-500 underline ml-2"
            >
              Clear all
            </button>
          </div>
        </>
      )}
    </>
  );
}
