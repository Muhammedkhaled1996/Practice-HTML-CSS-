"use client";
import { Spinner } from "@/components/ui/spinner";
import { useCounterStore } from "@/src/stores/cartStore.store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCartPlus, FaCheck } from "react-icons/fa";
import { toast } from "sonner";
import { useWishlistStore } from "./../../../stores/wishlistStore.store";

export default function AddToCartProductDetails({
  productId,
}: {
  productId: string;
}) {
  const pathName = usePathname();

  console.log(pathName, "pathName");

  const { addToCart, cart, updateItemCount, quantity } = useCounterStore();
  const { wishlist } = useWishlistStore();

  function productInCart(): boolean {
    return (
      cart?.data?.products?.some((product: any) => {
        return product.product._id == productId;
      }) ?? false
    );
  }

  const [inCart, setInCart] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter()

  // Add item to cart
  async function handleAddToCart() {
    setLoading(true);
    try {
      const data = await addToCart(productId);

      console.log(quantity, "quantity of items");

      const update = await updateItemCount(productId, quantity!);

      if (data.status === "success") {
        toast.success(data.message);
        setInCart(true);
      } else {
        toast.error("Please Login");
        route.push("/login")
      }
    } catch (err) {
      console.log(err);
      toast.error("error in Adding Product to your cart from server");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setInCart(productInCart());
  }, [cart, productId]);

  return (
    <>
      {inCart ? (
        <Link
          href={"/cart"}
          className="text-gray-600 py-3 w-full rounded-lg font-medium hover:bg-gray-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow shadow-gray-600/25 bg-gray-200 cursor-pointer duration-200"
        >
          {loading && <Spinner className={`text-green-500`} />}
          {!loading && <FaCheck className="text-green-400 text-xs" />}
          <span
            className={`${pathName.includes("wishlist") ? "text-sm font-semibold md:hidden  lg:block" : ""} `}
          >
            <span>View Cart</span>
          </span>
        </Link>
      ) : (
        <button
          disabled={loading}
          onClick={handleAddToCart}
          id="add-to-cart"
          className="text-white py-3 w-full rounded-lg font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow shadow-green-600/25 bg-green-600 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-green-200 disabled:text-gray-700"
        >
          {loading && <Spinner className={`text-green-500`} />}
          {!loading && <FaCartPlus />}
          <span
            className={`${pathName.includes("wishlist") ? "text-sm font-semibold md:hidden lg:block" : ""} `}
          >
            <span>Add to Cart</span>
          </span>
        </button>
      )}
    </>
  );
}
