import { verifyTokenHandler } from "@/src/apiDataFetching/authontication/VerifyToken";
import { getUserOrders } from "@/src/apiDataFetching/order/order.action";
import DetailsOrderBtn from "@/src/component/pagesComponents/DetailsOrderBtn/DetailsOrderBtn";
import OrderDetails from "@/src/component/pagesComponents/OrderDetails/OrderDetails";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import Image from "next/image";
import React from "react";
import {
  FaBox,
  FaClock,
  FaHashtag,
  FaMoneyBill,
  FaTruck,
  FaCreditCard,
  FaShoppingCart,
} from "react-icons/fa";

import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { redirect } from "next/navigation";
import EmptyOrders from "@/src/component/pagesComponents/EmptyOrders/EmptyOrders";

export default async function AllOrdersPage() {
  const data = await verifyTokenHandler();

  if (!data) {
    redirect("/login");
  }

  const userOrders = await getUserOrders(data.decoded.id);

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div
      className="container px-4 md:px-0
"
    >
      {/* breadcrumb section */}
      <div>
        <div className="mt-4">
          <AppBreadcrumb
            items={[{ label: "Home", href: "/" }]}
            current="My Orders"
            linkClassName="hover:text-black text-gray-500 text-sm"
            itemClassName=""
            currentClassName="text-black text-sm"
            separatorClassName="text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-3 items-center justify-center">
            <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-lg flex items-center justify-center">
              <FaBox className="text-lg" />
            </span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                My Orders
              </h1>
              <p className="text-gray-500 text-sm">
                {userOrders.length > 0
                  ? `Track and manage your ${userOrders.length} orders`
                  : "No orders yet"}
              </p>
            </div>
          </div>
        </div>

        {userOrders && userOrders.length === 0 && (
          <EmptyOrders/>
        )}

        {/*  */}

        <div className="space-y-4 my-5">
          {userOrders &&
            userOrders.length > 0 &&
            userOrders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex gap-5">
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden">
                        <Image
                          alt={order.cartItems[0].product.title}
                          className="w-full h-full object-contain"
                          src={order.cartItems[0].product.imageCover}
                          height={200}
                          width={200}
                        />

                        {order.cartItems.length !== 1 && (
                          <span className="absolute -top-2.5 -right-2.5 size-7 bg-black text-white rounded-full text-sm flex justify-center items-center font-semibold">
                            {order.cartItems.length !== 1 && (
                              <div>+{order.cartItems.length - 1}</div>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium ${!order.isPaid && !order.isDelivered ? "bg-amber-100" : "bg-blue-100"}  rounded-lg mb-2`}
                          >
                            {!order.isPaid && !order.isDelivered ? (
                              <FaClock className="text-amber-600" />
                            ) : (
                              <FaTruck className="text-blue-600" />
                            )}
                            <span
                              className={`text-xs font-semibold ${!order.isPaid && !order.isDelivered ? "text-amber-600" : "text-blue-600"}`}
                            ></span>
                            {!order.isPaid && !order.isDelivered
                              ? "Processing"
                              : "On the way"}
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                            <FaHashtag />
                            {order.id}
                          </h3>
                        </div>
                        <div
                          className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${order.paymentMethodType === "cash" ? "bg-gray-100" : "bg-purple-100"} `}
                        >
                          {order.paymentMethodType === "cash" ? (
                            <FaMoneyBill className="text-gray-600" />
                          ) : (
                            <FaCreditCard className="text-purple-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarDays className="text-gray-400" />
                          {/* {order.createdAt} */}
                          {formatDate(order.createdAt)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5">
                          <FaBox className="text-gray-400" />
                          {order.cartItems.length} item
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5">
                          <FaLocationDot className="text-gray-400" />
                          {order.shippingAddress.city}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            {order.cartItems[0].price}
                          </span>
                          <span className="text-sm font-medium text-gray-400 ml-1">
                            EGP
                          </span>
                        </div>

                        <DetailsOrderBtn id={order._id} />
                      </div>
                    </div>
                  </div>
                </div>
                <OrderDetails order={order} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
