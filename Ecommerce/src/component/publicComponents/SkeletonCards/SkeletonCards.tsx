import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
          {/* صورة المنتج */}
          <Skeleton className="w-full h-40 rounded-md mb-3" />
          {/* زر / action */}
          <Skeleton className="h-8 w-full rounded-md mt-3" />
        </div>
      ))}
    </div>
  );
}
