import { Skeleton } from "@/components/ui/skeleton";
import WishlistSection from "@/src/component/pagesComponents/WishlistSection/WishlistSection";
import { WishlistSkeleton } from "@/src/component/pagesComponents/WishlistSkeleton/WishlistSkeleton";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-2">
   
      <Suspense fallback={<WishlistSkeleton/>}>
        <WishlistSection />
      </Suspense>
    </div>
  );
}
