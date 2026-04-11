"use server";
import { getDecodedUserToken } from "@/src/lib/getUserToken";
import { CrudCartResponce } from "@/src/types/cart.interface";
import { revalidatePath, updateTag } from "next/cache";

// get user cart
export async function getUserCart(): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();
  console.log(token, "token");

  try {
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

    console.log(data, "cart data");

    return data;
  } catch (error) {
    console.error("Error in getUserCart:", error);
    return {
      status: "fail",
      message: "An error occurred while fetching the cart.",
      numOfCartItems: 0,
      cartId: "",
      data: {} as any,
    };
  }
}

// add to cart action
export async function addToCartAction(
  productId: string,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();
  try {
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
      updateTag("userCart");
    }

    return data;
  } catch (error) {
    console.error("Error in addToCartAction:", error);
    return {
      status: "fail",
      message: "An error occurred while adding to cart.",
      numOfCartItems: 0,
      cartId: "",
      data: {} as any,
    };
  }
}

// update item count
export async function updateItemCount(
  productId: string,
  count: number,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  try {
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
      updateTag("userCart");
    }

    return data;
  } catch (error) {
    console.error("Error in updateItemCount:", error);
    return {
      status: "fail",
      message: "An error occurred while updating the item count.",
      numOfCartItems: 0,
      cartId: "",
      data: {} as any,
    };
  }
}

// delete item from cart
export async function deleteItemCount(
  productId: string,
): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  try {
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
      updateTag("userCart");
    }

    return data;
  } catch (error) {
    console.error("Error in deleteItemCount:", error);
    return {
      status: "fail",
      message: "An error occurred while deleting the item.",
      numOfCartItems: 0,
      cartId: "",
      data: {} as any,
    };
  }
}

// clear all cart items
export async function clearUserCart(): Promise<CrudCartResponce> {
  const token = await getDecodedUserToken();

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === "success") {
      revalidatePath("/cart");
      updateTag("userCart");
    }

    return data;
  } catch (error) {
    console.error("Error in clearUserCart:", error);
    return {
      status: "fail",
      message: "An error occurred while clearing the cart.",
      numOfCartItems: 0,
      cartId: "",
      data: {} as any,
    };
  }
}
