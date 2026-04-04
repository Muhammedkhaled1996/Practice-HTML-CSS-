import React from "react";
import { FaHeadset, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function LowerInstractions() {
  return (
    <>
      <div className="bg-green-100 py-3 mt-2">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 justify-between items-center container">
          <div className="flex gap-2 justify-center items-center">
            <div className="size-8 rounded-sm text-green-600 bg-green-400/20 flex justify-center items-center">
              <FaTruck />
            </div>
            <div>
              <p className="font-bold text-sm">Free Shipping</p>
              <span className="text-[12px] text-gray-600 -mt-1">
                On orders over 500 EGP
              </span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="size-8 rounded-sm text-green-600 bg-green-400/20 flex justify-center items-center">
              <FaArrowRotateLeft />
            </div>
            <div>
              <p className="font-bold text-sm">Easy Returns</p>
              <span className="text-[12px] text-gray-600 -mt-1">
                14-day return policy
              </span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="size-8 rounded-sm text-green-600 bg-green-400/20 flex justify-center items-center">
              <FaShieldAlt />
            </div>
            <div>
              <p className="font-bold text-sm">Secure Payment</p>
              <span className="text-[12px] text-gray-600 -mt-1">
                100% secure checkout
              </span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="size-8 rounded-sm text-green-600 bg-green-400/20 flex justify-center items-center">
              <FaHeadset />
            </div>
            <div>
              <p className="font-bold text-sm">24/7 Support</p>
              <span className="text-[12px] text-gray-600 -mt-1">
                Contact us anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
