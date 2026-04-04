"use client";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function DeleteBtnWishlist({
  productId,
}: {
  productId: string;
}) {
  const { deleteItemFromWishlist, decreaseNumOfWishlist } = useWishlistStore();
  const [loading, setloading] = useState(false);

  async function deleteItem(productId: string) {
    setloading(true);
    try {
      const res = await deleteItemFromWishlist(productId);
      if (res.status === "success") {
        decreaseNumOfWishlist();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  }
  return (
    <>
      <button
        disabled={loading}
        onClick={() => deleteItem(productId)}
        className="shrink-0 w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        title="Remove"
      >
        <FaTrash />
      </button>
    </>
  );
}
