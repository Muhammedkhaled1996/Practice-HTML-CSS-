"use client";

import { allProductsResponse } from "@/types/allOrders.interface";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Filters({
  data,
}: {
  data: allProductsResponse | undefined;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 🧠 unified state for all filters
  const [filters, setFilters] = useState({
    page: searchParams.get("page") || "",
    limit: searchParams.get("limit") || "",
    keyword: searchParams.get("keyword") || "",
    sort: searchParams.get("sort") || "",
    priceGte: searchParams.get("price[gte]") || "",
    priceLte: searchParams.get("price[lte]") || "",
    brand: searchParams.get("brand") || "",
    category: searchParams.get("category[in]") || "",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
  });

  // 🔁 update URL helper
  function updateURL(values: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  }

  // 🧹 clear all filters
  function clearFilters() {
    setFilters({
      page: "1",
      keyword: "",
      sort: "",
      limit: "",
      priceGte: "",
      priceLte: "",
      brand: "",
      category: "",
      from: "",
      to: "",
    });
    router.push(pathname);
  }

  // ⚡ single effect for all filters (debounced)
  useEffect(() => {
    const t = setTimeout(() => {
      updateURL({
        keyword: filters.keyword,
        sort: filters.sort,
        limit: filters.limit,
        brand: filters.brand,
        "price[gte]": filters.priceGte,
        "price[lte]": filters.priceLte,
        "category[in]": filters.category,
        from: filters.from,
        to: filters.to,
      });
    }, 400);

    return () => clearTimeout(t);
  }, [filters]);

  // 🧩 handle change
  function handleChange(key: string, value: string) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const [brands, setBrands] = useState<{ _id: string; name: string }[] | null>(
    null,
  );
  const [categories, setCategories] = useState<
    { _id: string; name: string }[] | null
  >(null);

  //  fetch brands for the brand filter
  async function allBrands() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
    const data = await res.json();
    return data.data;
  }

  //  fetch categories for the category filter
  async function allCategories() {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    const data = await res.json();
    return data.data;
  }

  // 🧠 fetch brands and categories on mount
  useEffect(() => {
    async function fetchData() {
      const brandsData = await allBrands();
      setBrands(brandsData);
      const categoriesData = await allCategories();
      setCategories(categoriesData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-3 flex-wrap">
          {/* keyword search */}
          <input
            placeholder="Search..."
            value={filters.keyword}
            onChange={(e) => handleChange("keyword", e.target.value)}
            className="border p-2 rounded"
          />

          {/* sort */}
          <select
            value={filters.sort}
            onChange={(e) => handleChange("sort", e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort</option>
            <option value="-price">High Price</option>
            <option value="price">Low Price</option>
          </select>

          {/* limit */}
          <select
            value={filters.limit}
            onChange={(e) => handleChange("limit", e.target.value)}
            className="border p-2 rounded"
          >
            <option value={filters.limit}>{filters.limit}</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">30</option>
            <option value="50">40</option>
          </select>

          {/* brand */}
          <select
            value={filters.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Brand ID</option>
            {brands &&
              brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
          </select>

          {/* category */}
          <select
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Category ID</option>
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>

          {/* price gte */}
          <input
            type="number"
            placeholder="Min Price"
            value={filters.priceGte}
            onChange={(e) => handleChange("priceGte", e.target.value)}
            className="border p-2 rounded"
          />

          {/* price lte */}
          <input
            type="number"
            placeholder="Max Price"
            value={filters.priceLte}
            onChange={(e) => handleChange("priceLte", e.target.value)}
            className="border p-2 rounded"
          />

          {/* date from */}
          <input
            type="date"
            value={filters.from}
            onChange={(e) => handleChange("from", e.target.value)}
            className="border p-2 rounded"
          />

          {/* date to */}
          <input
            type="date"
            value={filters.to}
            onChange={(e) => handleChange("to", e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <div
          className="cursor-pointer text-gray-400 hover:text-red-500 duration-200 transition-colors"
          onClick={() => clearFilters()}
        >
          Clear All
        </div>
        <p className="text-sm text-gray-500">{data?.results} Products</p>
      </div>
    </>
  );
}
