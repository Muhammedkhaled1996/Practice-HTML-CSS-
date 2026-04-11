"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function AddressSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Icon */}
              <Skeleton className="w-11 h-11 rounded-xl" />

              <div className="flex-1 min-w-0 space-y-3">
                {/* Title */}
                <Skeleton className="h-4 w-24" />

                {/* Address */}
                <Skeleton className="h-3 w-40" />

                {/* Phone + City */}
                <div className="flex gap-4">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <Skeleton className="w-9 h-9 rounded-lg" />
              <Skeleton className="w-9 h-9 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}