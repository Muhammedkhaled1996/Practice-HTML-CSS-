"use client";
import { Spinner } from "@/components/ui/spinner";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import { sepesificProductResponce } from "@/src/types/allProduct.interface";
import { wishlistData } from "@/src/types/wishlst.interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

export default function AddtoWishlistProductDetails({
  product,
}: {
  product: sepesificProductResponce;
}) {
  const { addToWishlist, wishlist, increaseNumOfWishlist } = useWishlistStore();

  function productInWishlist(): boolean {
    return (
      wishlist?.data.some((item: wishlistData) => {
        return item._id === product.data._id;
      }) ?? false
    );
  }

  const [inWishlist, setWishlist] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  // Add item to cart
  async function handleAddToWishlist(productId: string) {
    setLoading(true);
    try {
      const data = await addToWishlist(productId);

      if (data.status === "success") {
        toast.success(data.message);
        increaseNumOfWishlist();
      } else {
        toast.error("Please Login");
        route.push("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in Adding Product to your cart from server");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setWishlist(productInWishlist());
  }, [wishlist, product]);

  return (
    <>
      {inWishlist ? (
        <Link
          href={"/wishlist"}
          className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-red-200 text-red-700 hover:border-red-300 hover:text-green-600 cursor-pointer bg-red-300/20"
        >
          <FaHeart className="text-red-600" />
          View Wishlist
        </Link>
      ) : (
        <button
          disabled={loading}
          onClick={() => handleAddToWishlist(product.data._id)}
          className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {loading ? (
            <>
              <Spinner className="size-5" /> Adding to Wishlist
            </>
          ) : (
            <>
              <FaRegHeart /> Add to Wishlist
            </>
          )}
        </button>
      )}
    </>
  );
}
