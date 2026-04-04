"use server";
import { getDecodedUserToken } from "@/src/lib/getUserToken";
import {
  wishlistResponce,
  addAndRemoveFromWishlistResponce,
} from "@/src/types/wishlst.interface";
import { updateTag } from "next/cache";

// get all wishlist
export async function getAllWishlist(): Promise<wishlistResponce> {
  const token = await getDecodedUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    headers: {
      token: token as any,
    },
    next: {
      revalidate:60,
      tags: ["allWishlist"],
    },
  });
  const data = await res.json();

  return data;
}

// add product to wishlist
export async function addToWishlist(
  productId: string,
): Promise<addAndRemoveFromWishlistResponce> {
  const token = await getDecodedUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "POST",
    headers: {
      token: token as any,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  const data = await res.json();
  updateTag("allWishlist");
  updateTag("allProducts");
  return data;
}

// remove product from wishlist
export async function removeFromWishlist(
  productId: string,
): Promise<addAndRemoveFromWishlistResponce> {
  const token = await getDecodedUserToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as any,
      },
    },
  );
  const data = await res.json();

  updateTag("allWishlist");
    updateTag("allProducts");

  return data;
}
