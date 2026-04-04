import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";
import React, { Suspense, lazy } from "react";
import { FaLayerGroup } from "react-icons/fa";
import SkeletonCards from "@/src/component/publicComponents/SkeletonCards/SkeletonCards";

const LazyCategoriesSection = lazy(
  () => import("@/src/component/pagesComponents/CategoriesSection/CategoriesSection")
);

export default async function page() {
  return (
    <>
      <div className="green-gradiant text-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="container px-4 md:px-0 py-12 sm:py-16 relative">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Categories"
              linkClassName="hover:text-white text-white/70 text-sm"
            />
          </div>
          <div className="flex items-start  gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30 ">
              <FaLayerGroup className="text-4xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                All Categories
              </h1>
              <p className="text-white/80 mt-2 text-base sm:text-lg">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-0  py-10">
        <Suspense fallback={<SkeletonCards />}>
          <LazyCategoriesSection />
        </Suspense>
      </div>

      <LowerInstractions />
    </>
  );
}

