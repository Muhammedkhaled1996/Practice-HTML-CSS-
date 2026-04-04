"use client";
import { Spinner } from "@/components/ui/spinner";
import { addToCartAction } from "@/src/apiDataFetching/cart/cart.actions";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { toast } from "sonner";
import { useCounterStore } from "@/src/stores/cartStore.store";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart } = useCounterStore();
  const [loading, setLoading] = useState(false);

  // Add item to cart
  async function handleAddToCart() {
    setLoading(true);
    try {
      const data = await addToCart(productId);

      if (data.status === "success") {
        return toast.success(data.message);
      }
      return toast.error(data.message);
    } catch (err) {
      console.log(err);
      toast.error("Error in Adding Product to your cart from server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        disabled={loading}
        className="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
        onClick={handleAddToCart}
      >
        {loading && <Spinner className="text-5xla text-green-500" />}
        {!loading && <TiPlus />}
      </button>
    </>
  );
}
