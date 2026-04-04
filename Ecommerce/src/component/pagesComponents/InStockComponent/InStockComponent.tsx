"use client";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import { wishlistData } from "@/src/types/wishlst.interface";
import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

export default function InStockComponent({
  product,
}: {
  product: wishlistData;
}) {
  const { _id } = product;

  const { addToCart, cart } = useCounterStore();
  const { wishlist } = useWishlistStore();

  function productInCart(): boolean {
    return (
      cart?.data?.products?.some((product: any) => {
        return product.product._id == _id;
      }) ?? false
    );
  }

  const [inCart, setInCart] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInCart(productInCart());
    console.log(productInCart(), "productInCart()");
  }, [cart, _id]);

  return (
    <>
      {inCart ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
          <FaCartPlus className="text-green-600" />
          <div>{product.quantity > 0 ? "In Cart" : "Out Of Stock"}</div>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <div>{product.quantity > 0 ? "In Stock" : "Out Of Stock"}</div>
        </span>
      )}
    </>
  );
}
