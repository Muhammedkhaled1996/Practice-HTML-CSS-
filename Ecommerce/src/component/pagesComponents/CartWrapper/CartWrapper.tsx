"use client";
import { Product } from "@/src/types/cart.interface";
import Link from "next/link";
import React, { useState, Suspense, lazy } from "react";
import { FaTrash } from "react-icons/fa";
import { Spinner } from "@/components/ui/spinner";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { toast } from "sonner";

const LazyCartItem = lazy(() => import("../CartItem/CartItem"));

type Props = {
  products: Product[];
};

export default function CartWrapper({ products }: Props) {
  const { clearCart } = useCounterStore();
  const [loading, setLoading] = useState(false);

  // delete item from cart
  async function deleteCart() {
    setLoading(true);
    try {
      const data = await clearCart();

      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("error in Deleting all cart items from server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="lg:col-span-2 flex flex-col gap-4">
        {/* cart wrapper */}
        {loading ? (
          <div className="w-full h-full bg-white/20 backdrop-blur-sm text-red-600 flex items-center justify-center font-bold text-3xl gap-3">
            <Spinner />
            <span>Deleting all cart items...</span>
          </div>
        ) : (
          <Suspense fallback={<div className="flex justify-center py-6"><Spinner /></div>}>
            {products &&
              products.map((product) => (
                <LazyCartItem key={product._id} product={product} />
              ))}
          </Suspense>
        )}

        {/* buttom Section */}
        <div className="my-6 pt-6 border-t border-gray-200 flex items-center justify-between">
          <Link
            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2"
            href="/"
          >
            <span>←</span> Continue Shopping
          </Link>
          <button
            onClick={() => deleteCart()}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <FaTrash className="text-xs group-hover:scale-110 transition-transform " />
            <span>Clear all items</span>
          </button>
        </div>
      </div>
    </>
  );
}
