"use client";

import { useShowOrderDetailsStore } from "@/src/stores/showOrderDetails.store";
import { orderDetails } from "@/src/types/orders.interface";
import Image from "next/image";
import { FaClock, FaPhone, FaReceipt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function OrderDetails({ order }:{order : orderDetails}) {
  const { openedOrderId } = useShowOrderDetailsStore();

  const isOpen = openedOrderId === order._id;

  return (
    <>
      {isOpen && (
        <div>
          <div className="border-t border-gray-100 bg-gray-50/50">
            <div className="p-5 sm:p-6">
              <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center">
                  <FaReceipt className="text-xs text-primary-600" />
                </div>
                Order Items
              </h4>
              {order.cartItems.length > 0 &&
                order.cartItems &&
                order.cartItems.map((item) => (
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                        <Image
                          width={200}
                          height={200}
                          alt={item.product.title}
                          className="w-full h-full object-contain"
                          src={item.product.imageCover}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">
                          {item.product.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">
                            {item.count}
                          </span>{" "}
                          ×{item.price} EGP
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-bold text-gray-900">
                          {item.count * item.price}
                        </p>
                        <p className="text-xs text-gray-400">EGP</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FaLocationDot className="text-xs text-blue-600" />
                  </div>
                  Delivery Address
                </h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">asdasd</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {order.shippingAddress.city}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                    <FaPhone className="text-xs text-gray-400" />
                    {order.shippingAddress.phone}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-amber-100 border border-amber-200">
                <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center">
                    <FaClock className="text-xs text-white" />
                  </div>
                  Order Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal including taxes</span>
                    <span className="font-medium">
                      {order.totalOrderPrice - order.shippingPrice} EGP
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {order.shippingPrice} EGP
                    </span>
                  </div>
                  <hr className="border-gray-200/50 my-2" />
                  <div className="flex justify-between pt-1">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-lg text-gray-900">
                      {order.totalOrderPrice} EGP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}