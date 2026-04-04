import { getAllBrands } from "@/src/apiDataFetching/brands/brands.actions";
import { brandDetails } from "@/src/types/brands.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaBoxOpen, FaLayerGroup } from "react-icons/fa";

export default async function BrandsSection() {
  const allBrandsResponce = await getAllBrands();
  const total = allBrandsResponce?.data?.length ?? 0;

  return (
    <>
      {total > 0 && (
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">{total}</span>{" "}
            {total === 1 ? "brand" : "brands"}
          </span>
        </div>
      )}

      {total > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {allBrandsResponce?.data?.map((brand: brandDetails) => (
            <Link
              key={brand._id}
              className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1"
              href={`/products?brand=${brand._id}`}
            >
              <div className="rounded-xl overflow-hidden bg-gray-50 mb-4">
                <Image
                  width={200}
                  height={200}
                  alt={brand.slug}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  src={brand.image}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-center group-hover:text-purple-600 transition-colors">
                {brand.name}
              </h3>
              <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-purple-600 flex items-center gap-1">
                  View Products
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-24 h-24 rounded-full bg-purple-50 border-2 border-purple-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FaBoxOpen className="text-4xl text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No Brands Found
          </h3>
          <p className="text-gray-500 mb-8 max-w-sm">
            We couldn&apos;t load any brands right now. Try refreshing the
            page or check back later.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-sm shadow-purple-600/30"
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
