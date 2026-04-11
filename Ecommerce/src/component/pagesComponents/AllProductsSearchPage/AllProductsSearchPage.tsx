import React from "react";
import { ProductCard } from "../../publicComponents/ProductCard/ProductCard";

export default function AllProductsSearchPage({
  allProductResponce,
}: {
  allProductResponce: any;
}) {



  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {allProductResponce &&
        allProductResponce.data.length > 0 &&
        allProductResponce.data.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
}
