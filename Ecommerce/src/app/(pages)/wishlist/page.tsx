import { WishlistSkeleton } from "@/src/component/pagesComponents/WishlistSkeleton/WishlistSkeleton";
import nextDynamic from "next/dynamic";

export const dynamic = "force-dynamic";

export default function page() {
  const DynamicWishlistSection = nextDynamic(
    () =>
      import("@/src/component/pagesComponents/WishlistSection/WishlistSection"),
    {
      loading: () => <WishlistSkeleton />,
    },
  );

  return (
    <div className="container mx-auto px-4 py-2">
      <DynamicWishlistSection />
    </div>
  );
}
