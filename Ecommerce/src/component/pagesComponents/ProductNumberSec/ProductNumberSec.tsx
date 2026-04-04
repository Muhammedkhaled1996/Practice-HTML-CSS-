"use client";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import { sepesificProductResponce } from "@/src/types/allProduct.interface";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  product: sepesificProductResponce;
};

export default function ProductNumberSec({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(1);

  const { setQuantity: newTotalCount , quantity :newQuantity } = useCounterStore();

  const value = product.data.priceAfterDiscount || product.data.price;
  const cost = value * quantity;

  useEffect(() => {
    newTotalCount(quantity);
  }, [quantity , setQuantity]);

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>

        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => {
                setQuantity((prev) => Math.max(1, prev - 1));
              }}
              disabled={quantity === 1}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50 text-3xl cursor-pointer"
            >
              <FaMinus />
            </button>

            <input
              min={1}
              max={product.data.quantity}
              type="number"
              value={quantity}
              onChange={(e) => {
                let val = Number(e.target.value);

                if (isNaN(val)) val = 1;
                if (val < 1) val = 1;
                if (val > product.data.quantity) val = product.data.quantity;

                setQuantity(val);
              }}
              className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
            />

            <button
              onClick={() => {
                setQuantity((prev) =>
                  Math.min(product.data.quantity, prev + 1),
                );
              }}
              disabled={quantity === product.data.quantity}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50 text-3xl cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>

          <span className="text-sm text-gray-500">
            {product.data.quantity} available
          </span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-green-600">{cost} EGP</span>
        </div>
      </div>
    </>
  );
}
