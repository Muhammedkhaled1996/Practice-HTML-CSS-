import { getAllCategories } from "@/src/apiDataFetching/categories/categories.actions";
import { categoryDetails } from "@/src/types/allCategories.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaBoxOpen, FaLayerGroup } from "react-icons/fa";

export default async function CategoriesSection() {
  const allCategoriesResponce = await getAllCategories();
  const total = allCategoriesResponce?.data?.length ?? 0;

  return (
    <>
      {total > 0 && (
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">{total}</span>{" "}
            {total === 1 ? "category" : "categories"}
          </span>
        </div>
      )}

      {/* grid */}
      {total > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {allCategoriesResponce?.data?.map((category: categoryDetails) => (
            <Link
              key={category._id}
              className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              href={`/categories/${category._id}`}
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                <Image
                  width={300}
                  height={300}
                  alt={category.slug}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={category.image}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>
              <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-green-600 flex items-center gap-1">
                  View Subcategories
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* ── Empty State ── */
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-24 h-24 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FaBoxOpen className="text-4xl text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No Categories Found
          </h3>
          <p className="text-gray-500 mb-8 max-w-sm">
            We couldn&apos;t load any categories right now. Try refreshing the
            page or check back later.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm shadow-green-600/30"
            href="/"
          >
            <FaLayerGroup />
            Back to Home
          </Link>
        </div>
      )}
    </>
  );
}
