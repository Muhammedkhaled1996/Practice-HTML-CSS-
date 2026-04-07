"use client";

import { Spinner } from "@/components/ui/spinner";
import {
  updateItemCount,
} from "@/src/apiDataFetching/cart/cart.actions";
import { Product } from "@/src/types/cart.interface";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCounterStore } from "@/src/stores/cartStore.store";
import DeleteItemDialog from "../DeleteItemDialog/DeleteItemDialog";
import { toast } from "sonner";

type Props = {
  product: Product;
};

export default function CartItem({ product }: Props) {
  const { deleteItemFromCart } = useCounterStore();
  const [loading, setLoading] = useState(false);

  // update item count
  async function updateCount(productId: string, count: number) {
    setLoading(true);
    try {
      const data = await updateItemCount(productId, count);

      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("error in Updating Product count from server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <>
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
              <div className="p-4 sm:p-5">
                <div className="flex gap-4 sm:gap-6">
                  <Link
                    className="relative shrink-0 group"
                    href={`/product/${product.product._id}`}
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                      <Image
                        alt={product.product.slug}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        src={product.product.imageCover}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <FaCheck />
                      In Stock
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="mb-3">
                      <Link
                        className="group/title"
                        href={`/product/${product.product._id}`}
                      >
                        <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                          {product.product.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full">
                          {product.product.category.name}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        {/* Most be change */}
                        <span className="text-xs text-gray-500">
                          SKU: 5CA090
                        </span>
                        {/*  */}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-green-600 font-bold text-lg">
                          {product.price} EGP
                        </span>
                        <span className="text-xs text-gray-400">per unit</span>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                          <button
                            onClick={() =>
                              updateCount(
                                product.product._id,
                                product.count - 1,
                              )
                            }
                            disabled={product.count === 1}
                            className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus className="text-sx" />
                          </button>
                          <span className="w-12 text-center font-bold text-gray-900">
                            {product.count}
                          </span>
                          <button
                            onClick={() =>
                              updateCount(
                                product.product._id,
                                product.count + 1,
                              )
                            }
                            disabled={
                              product.count === product.product.quantity
                            }
                            className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs text-gray-400 mb-0.5">Total</p>
                          <p className="text-xl font-bold text-gray-900">
                            {product.count * product.price}{" "}
                            <span className="text-sm font-medium text-gray-400">
                              EGP
                            </span>
                          </p>
                        </div>
                        <button
                          className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                          title="Remove item"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm bg-white/40 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 gap-2">
              <Spinner className="size-6 text-green-600" />
              <p className="text-green-600 font-semibold">Loading...</p>
            </div>
          </div>
        </>
      ) : (
        <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
          <div className="p-4 sm:p-5">
            <div className="flex gap-4 sm:gap-6">
              <Link
                className="relative flex justify-center items-center shrink-0 group"
                href={`/product/${product.product._id}`}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                  <Image
                    alt={product.product.slug}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    src={product.product.imageCover}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <FaCheck />
                  In Stock
                </div>
              </Link>
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="mb-3">
                  <Link
                    className="group/title"
                    href={`/product/${product.product._id}`}
                  >
                    <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                      {product.product.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full">
                      {product.product.category.name}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    {/* Most be change */}
                    <span className="text-xs text-gray-500">SKU: 5CA090</span>
                    {/*  */}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-green-600 font-bold text-lg">
                      {product.price} EGP
                    </span>
                    <span className="text-xs text-gray-400">per unit</span>
                  </div>
                </div>
                <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center self-start md:self-auto">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                      <button
                        onClick={() =>
                          updateCount(product.product._id, product.count - 1)
                        }
                        disabled={product.count === 1}
                        className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="text-sx" />
                      </button>
                      <span className="w-12 text-center font-bold text-gray-900">
                        {product.count}
                      </span>
                      <button
                        onClick={() =>
                          updateCount(product.product._id, product.count + 1)
                        }
                        disabled={product.count === product.product.quantity}
                        className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Total</p>
                      <p className="text-xl font-bold text-gray-900">
                        {product.count * product.price}{" "}
                        <span className="text-sm font-medium text-gray-400">
                          EGP
                        </span>
                      </p>
                    </div>

                    <DeleteItemDialog
                      productId={product.product._id}
                      setLoading={setLoading}
                    />
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
