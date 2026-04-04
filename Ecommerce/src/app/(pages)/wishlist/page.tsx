import { Skeleton } from "@/components/ui/skeleton";
import WishlistSection from "@/src/component/pagesComponents/WishlistSection/WishlistSection";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-2">
   
      <Suspense fallback={<Skeleton className="col-span-full h-100" />}>
        <WishlistSection />
      </Suspense>
    </div>
  );
}
