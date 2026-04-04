"use client";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function AddWishlist({ productId }: { productId: string }) {
  const {
    addToWishlist,
    increaseNumOfWishlist,
    wishlist,
    deleteItemFromWishlist,
    decreaseNumOfWishlist,
  } = useWishlistStore();
  const [loading, setLoading] = useState(false);

  const inWishist =
    wishlist?.data?.some(
      (product: any) => String(product._id) === String(productId),
    ) ?? false;

  async function addToWishlistProccess() {
    if (loading) return;

    setLoading(true);
    try {
      if (inWishist) {
        const res = await deleteItemFromWishlist(productId);

        if (res.status === "success") {
          decreaseNumOfWishlist();
          toast.success(res.message);
        } else {
          toast.error("Error in removing item from your wishlist");
        }
      } else {
        const res = await addToWishlist(productId);

        if (res.status === "success") {
          increaseNumOfWishlist();
          toast.success(res.message);
        } else {
          toast.error("Error in adding item to your wishlist");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        disabled={loading}
        onClick={addToWishlistProccess}
        className="cursor-pointer bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500 disabled:opacity-70 disabled:cursor-not-allowed"
        title="Add to wishlist"
        tabIndex={0}
      >
        {loading ? (
          <Spinner className="text-red-500 w-4 h-4" />
        ) : (
          <div>
            {inWishist ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
          </div>
        )}
      </button>
    </>
  );
}
