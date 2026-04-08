"use client";
import React, { useEffect } from "react";
import { ProductCard } from "../../publicComponents/ProductCard/ProductCard";
import { useToggleStore } from "@/src/stores/viewShape.store";

export default function AllProductsSearchPage({
  allProductResponce,
}: {
  allProductResponce: any;
}) {
  const { value } = useToggleStore();



  return (
    <div
      className={`grid ${value === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-3`}
    >
      {allProductResponce &&
        allProductResponce.data.length > 0 &&
        allProductResponce.data.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
}
