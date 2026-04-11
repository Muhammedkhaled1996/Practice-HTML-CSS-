import { getUserCart } from "@/src/apiDataFetching/cart/cart.actions";
import CartWrapper from "@/src/component/pagesComponents/CartPageComponents/CartWrapper/CartWrapper";
import EmptyCart from "@/src/component/pagesComponents/CartPageComponents/EmptyCart/EmptyCart";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import Link from "next/link";
import {
  FaLock,
  FaShoppingBag,
  FaShoppingCart,
  FaTag,
  FaTruck,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

export const dynamic = "force-dynamic";

export default async function page() {
  const data = await getUserCart();

  console.log(data?.cartId , "cart id");
  

  const numOfCartItems = data?.numOfCartItems ?? 0;
  const totalCartPrice = data?.data?.totalCartPrice ?? 0;
  const products = data?.data?.products ?? [];

  let shippingValue = 0;
  function shippingCalculation() {
    if (totalCartPrice >= 500) {
      shippingValue = 0;
    } else {
      shippingValue = 100;
    }
    return shippingValue;
  }

  const finalShippingValues = shippingCalculation();
  const finalShippingPercentage = (totalCartPrice / 500) * 100;

  return (
    <>
      <div className="container  px-4 md:px-0 py-8">
        {/* breadcrumb section */}
        <div>
          <div className="mb-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Shopping Cart"
              linkClassName="hover:text-black text-gray-500 text-sm"
              itemClassName=""
              currentClassName="text-black text-sm"
              separatorClassName="text-gray-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaShoppingCart />
                </span>
                Shopping Cart
              </h1>
              <p className="text-gray-500 mt-2">
                You have{" "}
                <span className="font-semibold text-green-600">
                  {numOfCartItems} items
                </span>{" "}
                in your cart
              </p>
            </div>
          </div>
        </div>
        {numOfCartItems === 0 || data?.status !== "success" ? (
          <EmptyCart />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
              {/* left Section */}
              <CartWrapper products={products} />

              {/* right Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                  <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaShoppingBag />
                      Order Summary
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      {numOfCartItems} items in your cart
                    </p>
                  </div>

                  <div className="p-6 space-y-5">
                    {finalShippingValues === 0 ? (
                      <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <FaTruck className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-700">
                            Free Shipping For Online Payment!
                          </p>
                          <p className="text-sm text-green-600">
                            You qualify for free delivery
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FaTruck className="text-orange-500" />

                          <span className="text-[12px] font-medium text-gray-700">
                            Add {finalShippingValues} EGP for free shipping With
                            Cash Payment
                          </span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${finalShippingPercentage}%` }}
                            className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>
                          Subtotal{" "}
                          <span className="text-[10px]">
                            Not Including Taxes
                          </span>
                        </span>
                        <span className="font-medium text-lg text-gray-900">
                          {totalCartPrice}{" "}
                          <span className="text-[12px]">EGP</span>
                        </span>
                      </div>
                      {/* <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        {finalShippingValues === 0 ? (
                          <span className="font-medium text-green-600">
                            FREE
                          </span>
                        ) : (
                          <span className="font-medium text-gray-900">
                            {finalShippingValues} EGP
                          </span>
                        )}
                      </div> */}
                      <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total{" "}
                            <span className="text-[10px] font-normal">
                              With Visa Payment
                            </span>
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {totalCartPrice}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total{" "}
                            <span className="text-[10px] font-normal">
                              With Cash Payment
                            </span>
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {totalCartPrice + 100}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                      <FaTag />
                      <span className="text-sm font-medium">
                        Apply Promo Code
                      </span>
                    </button>
                    <Link
                      className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                      href="/checkout"
                    >
                      <FaLock />
                      <span>Secure Checkout</span>
                    </Link>
                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaShieldHalved className="text-green-500" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaTruck className="text-blue-500" />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                    <Link
                      className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
                      href="/"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
