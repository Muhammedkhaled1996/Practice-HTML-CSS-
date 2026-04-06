import { WishlistSkeleton } from "@/src/component/pagesComponents/WishlistSkeleton/WishlistSkeleton";
import dynamic from "next/dynamic";

export default function page() {
  const DynamicWishlistSection = dynamic(
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
