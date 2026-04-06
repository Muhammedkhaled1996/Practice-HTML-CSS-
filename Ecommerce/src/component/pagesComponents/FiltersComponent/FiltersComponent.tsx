"use client";
import { allCategoriesResponce } from "@/src/types/allCategories.interface";
import { AllBrandsResponce } from "@/src/types/brands.interface";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FiltersComponent({
  brands,
  categories,
}: {
  brands: AllBrandsResponce;
  categories: allCategoriesResponce;
}) {
  const params = useSearchParams();

  const createQueryString = () => {
    return new URLSearchParams(params.toString());
  };

  // console.log(params.keys().toArray(), "params keys from url");
  // console.log(params.values().toArray(), "params values from url");

  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // handleCategoryChange
  const handleCategoryChange = (categoryId: string) => {
    const params = createQueryString();

    const categories = params.getAll("category");

    if (categories.includes(categoryId)) {
      // remove
      const newCategories = categories.filter((id) => id !== categoryId);

      params.delete("category");
      newCategories.forEach((id) => params.append("category", id));
    } else {
      // add
      params.append("category", categoryId);
    }

    router.replace(`/search?${params.toString()}`);
  };

  // handleBrandChange
  const handleBrandChange = (brandId: string) => {
    const params = createQueryString();

    const brands = params.getAll("brand");

    if (brands.includes(brandId)) {
      const newBrands = brands.filter((id) => id !== brandId);

      params.delete("brand");
      newBrands.forEach((id) => params.append("brand", id));
    } else {
      params.append("brand", brandId);
    }

    router.replace(`/search?${params.toString()}`);
  };

  const applyPriceFilter = () => {
    const params = createQueryString();

    if (min) params.set("price[gte]", min);
    else params.delete("price[gte]");

    if (max) params.set("price[lte]", max);
    else params.delete("price[lte]");

    router.replace(`/search?${params.toString()}`);
  };

  const setMaxPrice = (value: number) => {
    const params = createQueryString();

    params.set("price[lte]", value.toString());
    params.delete("price[gte]");

    router.replace(`/search?${params.toString()}`);
  };

  useEffect(() => {
    setMin(params.get("price[gte]") || "");
    setMax(params.get("price[lte]") || "");
  }, [params]);

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
          <div className="space-y-6">
            {/* list of categories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Categories</h3>
                <span className="text-xs text-green-600 font-medium">
                  1 selected
                </span>
              </div>
              <div className="space-y-2 max-h-52 overflow-y-auto">
                {categories &&
                  categories.data.length > 0 &&
                  categories.data.map((category) => (
                    <label
                      key={category._id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        checked={params
                          .getAll("category")
                          .includes(category._id)}
                        onChange={() => handleCategoryChange(category._id)}
                        className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
              </div>
            </div>
            <hr className="border-gray-100" />

            {/* price range */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="w-full">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Min (EGP)
                  </label>
                  <input
                    className="w-full"
                    type="number"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    onBlur={applyPriceFilter}
                  />
                </div>
                <div className="w-full">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Max (EGP)
                  </label>
                  <input
                    className="w-full"
                    type="number"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    onBlur={applyPriceFilter}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setMaxPrice(500)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 500
                </button>
                <button
                  onClick={() => setMaxPrice(1000)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 1K
                </button>
                <button
                  onClick={() => setMaxPrice(5000)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 5K
                </button>
                <button
                  onClick={() => setMaxPrice(10000)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 10K
                </button>
              </div>
            </div>
            <hr className="border-gray-100" />

            {/* list of brands */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Brands</h3>
              </div>
              <div className="space-y-2 max-h-52 overflow-y-auto">
                {brands &&
                  brands.data.length > 0 &&
                  brands.data.map((brand) => (
                    <label
                      key={brand._id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        checked={params.get("brand") === brand._id}
                        onChange={() => handleBrandChange(brand._id)}
                        className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {brand.name}
                      </span>
                    </label>
                  ))}
              </div>
            </div>
            <hr className="border-gray-100" />
            <button
              onClick={() => router.replace("/search")}
              className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
