"use client";
import { Spinner } from "@/components/ui/spinner";
import { addToCartAction } from "@/src/apiDataFetching/cart/cart.actions";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { toast } from "sonner";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart } = useCounterStore();
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  // Add item to cart
  async function handleAddToCart() {
    setLoading(true);
    try {
      const data = await addToCart(productId);

      if (data.status === "success") {
        return toast.success(data.message);
      } else {
        toast.error("Please login");
        route.push("/login");
      }
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
        className="md:size-10 md:ms-2 shrink-0 w-full h-8 rounded-lg md:rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
        onClick={handleAddToCart}
      >
        {loading && <Spinner className="text-5xla text-green-500" />}
        {!loading && (
          <div className="flex justify-center items-center gap-3 font-semibold">
            <TiPlus /> <span className="text-sm md:hidden">Add To Cart</span>
          </div>
        )}
      </button>
    </>
  );
}
