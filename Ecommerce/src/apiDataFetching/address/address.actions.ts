"use server";

import { getDecodedUserToken } from "@/src/lib/getUserToken";
import {
  AddAddressResponce,
  allUserAddressResponce,
} from "@/src/types/address.interface";
import { revalidatePath, updateTag } from "next/cache";

export type valuesType = {
  name: string;
  details: string;
  phone: string;
  city: string;
};

// add address action
export async function addAddressAction(
  values: valuesType,
): Promise<AddAddressResponce> {
  const token = await getDecodedUserToken();
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        details: values.details,
        phone: values.phone,
        city: values.city,
      }),
    });
    const data = await res.json();

    if (data.status === "success") {
      updateTag("userAddresses");
    }

    return data;
  } catch (error) {
    console.error("Error in addAddressAction:", error);
    return {
      status: "fail",
      message: "An error occurred while adding the address.",
      data: [],
    };
  }
}

// get all user addresses
export async function getUserAddresses(): Promise<allUserAddressResponce> {
  const token = await getDecodedUserToken();
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
      headers: {
        token: token as string,
      },
      next: {
        tags: ["userAddresses"],
      },
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getUserAddresses:", error);
    return {
      status: "fail",
      results: 0,
      data: [],
    };
  }
}

// get specific addresses
export async function getSpecificAddresses(
  addressId: string,
): Promise<allUserAddressResponce> {
  const token = await getDecodedUserToken();
  console.log(token, "user token");
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
    {
      headers: {
        token: token as string,
      },
    },
  );
  const data = await res.json();
  console.log(data, "user addresses");
  return data;
}

// delete user address
export async function deleteUserAddress(
  addressId: string,
): Promise<allUserAddressResponce> {
  const token = await getDecodedUserToken();

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
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
      updateTag("userAddresses");
      revalidatePath("/profile/addresses");
    }

    return data;
  } catch (error) {
    console.error("Error in deleteUserAddress:", error);
    return {
      status: "fail",
      results: 0,
      data: [],
    };
  }
}
