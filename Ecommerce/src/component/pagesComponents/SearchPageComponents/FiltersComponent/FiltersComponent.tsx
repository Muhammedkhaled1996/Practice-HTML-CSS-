"use client";

import { allCategoriesResponce } from "@/src/types/allCategories.interface";
import { AllBrandsResponce } from "@/src/types/brands.interface";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

export default function FiltersComponent({
  brands,
  categories,
}: {
  brands: AllBrandsResponce;
  categories: allCategoriesResponce;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [minInput, setMinInput] = useState(params.get("price[gte]") || "");
  const [maxInput, setMaxInput] = useState(params.get("price[lte]") || "");

  const filters = {
    categories: params.getAll("category"),
    brands: params.getAll("brand"),
    min: params.get("price[gte]") || "",
    max: params.get("price[lte]") || "",
    sort: params.get("sort") || "",
    page: params.get("page") || "",
    q: params.get("q") || "",
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newParams = new URLSearchParams(params.toString());

      if (minInput) newParams.set("price[gte]", minInput);
      else newParams.delete("price[gte]");

      if (maxInput) newParams.set("price[lte]", maxInput);
      else newParams.delete("price[lte]");

      // newParams.set("page", "1");

      if (newParams.toString() === params.toString()) return;

      startTransition(() => {
        router.replace(`/search?${newParams.toString()}`);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [minInput, maxInput]);

  //  category
  const handleCategoryChange = (id: string) => {
    const newParams = new URLSearchParams(params.toString());

    const current = newParams.getAll("category");

    if (current.includes(id)) {
      const updated = current.filter((c) => c !== id);
      newParams.delete("category");
      updated.forEach((c) => newParams.append("category", c));
    } else {
      newParams.append("category", id);
    }

    newParams.set("page", "1");

    startTransition(() => {
      router.replace(`/search?${newParams.toString()}`);
    });
  };

  //  brand
  const handleBrandChange = (id: string) => {
    const newParams = new URLSearchParams(params.toString());

    const current = newParams.getAll("brand");

    if (current.includes(id)) {
      const updated = current.filter((c) => c !== id);
      newParams.delete("brand");
      updated.forEach((c) => newParams.append("brand", c));
    } else {
      newParams.append("brand", id);
    }

    newParams.set("page", "1");

    startTransition(() => {
      router.replace(`/search?${newParams.toString()}`);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-bold mb-3">Categories</h3>
          <div className="space-y-2 max-h-52 overflow-y-auto">
            {categories.data.map((category) => (
              <label key={category._id} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category._id)}
                  onChange={() => handleCategoryChange(category._id)}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Price */}
        <div>
          <h3 className="font-bold mb-3 ">Price</h3>

          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minInput}
              onChange={(e) => setMinInput(e.target.value)}
              className="w-full border  border-gray-300 py-1 px-1 rounded-lg"
            />

            <input
              type="number"
              placeholder="Max"
              value={maxInput}
              onChange={(e) => setMaxInput(e.target.value)}
              className="w-full border border-gray-300 py-1 px-1 rounded-lg"
            />
          </div>
        </div>

        <hr />

        {/* Brands */}
        <div>
          <h3 className="font-bold mb-3">Brands</h3>
          <div className="space-y-2 max-h-52 overflow-y-auto">
            {brands.data.map((brand) => (
              <label key={brand._id} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand._id)}
                  onChange={() => handleBrandChange(brand._id)}
                />
                {brand.name}
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Clear */}
        <button
          onClick={() => {
            startTransition(() => {
              router.replace("/search");
            });
          }}
          className="w-full border py-2"
        >
          Clear All
        </button>

        {/* optional loading */}
        {isPending && <p className="text-xs text-gray-400">Updating...</p>}
      </div>
    </div>
  );
}
