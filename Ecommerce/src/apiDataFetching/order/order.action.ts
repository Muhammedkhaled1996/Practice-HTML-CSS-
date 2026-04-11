"use server";

import { getDecodedUserToken } from "@/src/lib/getUserToken";
import { checkoutSessionResponce, userOrdersResponce } from "@/src/types/orders.interface";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cashResponce } from './../../types/orders.interface';

export interface checkoutFormValues {
  shippingAddress: {
    details: string;
    phone: number;
    city: string;
  };
}
// create checkout session
export async function handlecheckoutSubmitAction(
  values: checkoutFormValues,
  cartId: string,
) {
  const token = await getDecodedUserToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.BASE_URL}`,
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data :checkoutSessionResponce = await res.json();

  if(data.status === "success"){
    updateTag("userCart");
    redirect(data.session.url);
  }

  return data;
}

// create cash order
export async function handleCashOrderSubmitAction(
  values: checkoutFormValues,
  cartId: string,
) {
  const token = await getDecodedUserToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data : cashResponce = await res.json();

    if(data.status === "success"){
    updateTag("userCart");
    redirect("/");
  }

  return data ;
}

// {"status":"success",
// "session":{"url":"https://checkout.stripe.com/c/pay/cs_test_a1J3YG6JQtn4V4G09rKwfZ79McCs5TGEnBgD66Vhj32riyPUf5fIliWdNs#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blpxYHZxWjA0SHViYl1ANVYyU2pOX2hVVW9ASmZBUElpa2FLVnBUQGo2UFduUEhIXHx9aEhjanBGZ1NxZ3RKNVVtXWxcSTJ8Qzx2aWZkUEBpMXJCXVRHTkIxZzBSZmhENTUxYHVKMUpQVycpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl","success_url":"http://localhost:3000//allorders",
// "cancel_url":"http://localhost:3000//cart"}}

// get user orders
export async function getUserOrders(
  userId: string,
): Promise<userOrdersResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    {
      next: {
        tags: ["allUserOrders"],
      },
    },
  );

  if (!responce.ok) {
    return [];
  }

  const data = await responce.json();
  return data;
}
