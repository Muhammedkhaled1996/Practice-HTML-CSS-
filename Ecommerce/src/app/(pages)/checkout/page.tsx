import { getUserCart } from "@/src/apiDataFetching/cart/cart.actions";
import CheckoutSection from "@/src/component/pagesComponents/CheckoutSection/CheckoutSection";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaReceipt } from "react-icons/fa";

export default async function page() {
  const cartResponce = await getUserCart();

  console.log(cartResponce, "cartResponce from checkout page");

  return (
    <>
      <div className="container">
        {/* breadcrumb section */}

        {cartResponce.data.products.length > 0 && cartResponce ? (
          <>
            <div>
              <div className="mt-4">
                <AppBreadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Cart", href: "/cart" },
                  ]}
                  current="Checkout"
                  linkClassName="hover:text-black text-gray-500 text-sm"
                  itemClassName=""
                  currentClassName="text-black text-sm"
                  separatorClassName="text-gray-500"
                />
              </div>

              {/* bottom Section  */}
              <div className="flex items-center justify-between mt-5">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                      <FaReceipt />
                    </span>
                    Complete Your Order
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Review your items and complete your purchase
                  </p>
                </div>
              </div>
            </div>

            {/* bottom section */}
            <CheckoutSection cartResponce={cartResponce} />
          </>
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-md text-center">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="text-3xl text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Add some items to your cart before checking out.
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20"
                href="/"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
