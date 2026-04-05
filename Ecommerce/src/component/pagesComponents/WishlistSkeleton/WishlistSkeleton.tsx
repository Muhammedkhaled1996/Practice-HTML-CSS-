import * as React from "react";
export function WishlistSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Table Header (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        {/* Skeleton Rows */}
        <div className="divide-y divide-gray-100">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center"
            >
              {/* Product Image + Name */}
              <div className="md:col-span-6 flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-200 animate-pulse shrink-0"></div>
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>

              {/* Status */}
              <div className="md:col-span-2 flex md:justify-center">
                <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>

              {/* Actions */}
              <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}