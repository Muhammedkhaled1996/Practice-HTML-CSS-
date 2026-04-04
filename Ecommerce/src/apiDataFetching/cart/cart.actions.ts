"use server";
import { getDecodedUserToken } from "@/src/lib/getUserToken";
import { CrudCartResponce } from "@/src/types/cart.interface";
import { revalidatePath, updateTag } from "next/cache";

// get user cart
export async function getUserCart(): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  console.log(token, "user token");

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    headers: {
      token: token as string,
    },
    next: {
      tags: ["userCart"],
      revalidate: 60,
    },
  });

  const data = await res.json();

  // console.log(data, "getUserCart from cart.actions");

  return data;
}

// add to cart action
export async function addToCartAction(
  productId: string,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "POST",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
    }),
  });
  const data = await res.json();

  if (data.status === "success") {
    revalidatePath("/cart");
    updateTag("userCart")
    console.log(data, "data of responce add to cart from cart.actions");
  }

  return data;
}

// update item count
export async function updateItemCount(
  productId: string,
  count: number,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: count,
      }),
    },
  );

  const data = await res.json();

  if (data.status === "success") {
    revalidatePath("/cart");
    updateTag("userCart")
    console.log(data, "Count of product Changed from cart.actions");
  }

  return data;
}

// delete item from cart
export async function deleteItemCount(
  productId: string,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();

  if (data.status === "success") {
    revalidatePath("/cart");
    updateTag("userCart")
    console.log(data, "deleted item from cart from cart.actions");
  }

  return data;
}

// clear all cart items
export async function clearUserCart(): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "Content-Type": "applicat ion/json",
    },
  });

  const data = await res.json();

  if (data.status === "success") {
    revalidatePath("/cart");
    updateTag("userCart")
    console.log(data, "deleted item from cart from cart.actions");
  }

  return data;
}
