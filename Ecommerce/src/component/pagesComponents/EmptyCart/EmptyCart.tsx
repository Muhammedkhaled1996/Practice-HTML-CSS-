import Link from "next/link";
import React from "react";
import { FaBoxOpen, FaLongArrowAltRight } from "react-icons/fa";

export default function EmptyCart() {
  return (
    <>
      <div className="min-h-[60vh] flex items-center justify-center px-4 my-8">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
              <FaBoxOpen className="text-5xl text-gray-600" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Looks like you haven't added anything to your cart yet.
            <br />
            Start exploring our products!
          </p>
          <Link
            className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]"
            href="/"
          >
            Start Shopping
            <FaLongArrowAltRight />
          </Link>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "6439d2d167d9aa4ca970649f" },
                }}
                className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
              >
                Electronices
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "6439d58a0049ad0b52b9003f" },
                }}
                className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
              >
                Women's Fashion
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "6439d5b90049ad0b52b90048" },
                }}
                className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
              >
                Men's Fashion
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "6439d30b67d9aa4ca97064b1" },
                }}
                className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
              >
                Beauty & Health
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
