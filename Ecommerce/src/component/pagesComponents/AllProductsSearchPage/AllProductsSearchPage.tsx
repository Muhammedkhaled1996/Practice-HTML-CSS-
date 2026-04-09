"use client";
import React, { useEffect } from "react";
import { ProductCard } from "../../publicComponents/ProductCard/ProductCard";
import { useToggleStore } from "@/src/stores/viewShape.store";
import { FaBoxOpen } from "react-icons/fa";
import Link from "next/link";
import { Product } from "@/src/types/cart.interface";

export default function AllProductsSearchPage({
  allProductResponce,
}: {
  allProductResponce: any;
}) {
  const { value } = useToggleStore();

  console.log(allProductResponce, " allProductResponce");

  return (
    <>
      {allProductResponce?.data?.length > 0 ? (
        <div
          className={`grid ${value === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-3`}
        >
          {allProductResponce?.data?.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 text-2xl rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaBoxOpen />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-500 mb-6">
            No products match your current filters.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            href="/search"
          >
            View All Products
          </Link>
        </div>
      )}
    </>
  );
}
