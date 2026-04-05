import { AllProductResponce, Product } from "@/src/types/allProduct.interface";
import { ProductCard } from "@/src/component/publicComponents/ProductCard/ProductCard";
import Link from "next/link";
import { FaBoxOpen, FaFilter, FaFolderOpen } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default async function ProductsSection({
  allProductResponce,
  searchParamsValues,
}: {
  allProductResponce: AllProductResponce;
  searchParamsValues: object;
}) {
  return (
    <>
      {Object.keys(searchParamsValues).length > 0 &&
        allProductResponce?.data[0]?.category && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaFilter />
              Active Filters:
            </span>
            <Link
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-200 transition-colors"
              href="/products"
            >
              <FaFolderOpen />
              {allProductResponce?.data[0]?.subcategory[0].name}
              <FaXmark />
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              href="/products"
            >
              Clear all
            </Link>
          </div>
        )}

      {allProductResponce ? (
        <div className="mb-6 text-sm text-gray-500">
          Showing {allProductResponce?.data.length} products
        </div>
      ) : (
        ""
      )}

      {allProductResponce?.data?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-2">
          {allProductResponce?.data?.map((product: Product) => (
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
            href="/products"
          >
            View All Products
          </Link>
        </div>
      )}
    </>
  );
}
