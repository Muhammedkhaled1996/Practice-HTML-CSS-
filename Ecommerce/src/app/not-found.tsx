"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaHeadset, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft, FaCartShopping } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

export default function page() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center w-full px-4 md:px-0 md:w-2/4 mt-25 text-center">
          {/*  */}
          <div className="relative mb-8">
            <div className="size-52 rounded-2xl shadow-2xl flex justify-center items-center text-8xl text-green-600">
              <FaCartShopping />
            </div>
            <div className="size-25 font-bold rounded-full border-4 border-white/60 absolute -top-10 -right-10 bg-green-600 text-3xl text-white flex justify-center items-center">
              <span>404</span>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="w-8 h-4 border-b-[3px] border-green-400 rounded-b-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          {/*  */}
          <p className="text-6xl font-extrabold my-4">Oops! Nothing Here</p>
          {/*  */}
          <span className="text-gray-500 mb-4 font-semibold">
            Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty
            more fresh content to explore.
          </span>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <Link
              href={"/"}
              className="col-span-1 md:col-span-2 grow flex justify-center items-center gap-3 rounded-xl bg-green-600 shadow shadow-green-500/60 py-3 text-white group hover:bg-green-700 hover:-translate-y-1 duration-200 transition-all text-xl "
            >
              <IoMdHome className="group-hover:scale-130 duration-200 transition-all" />
              <span>Go to Homepage</span>
            </Link>
            <button
              onClick={() => router.back()}
              className="grow col-span-1 flex justify-center items-center gap-3 rounded-xl bg-white  shadow  py-3 cursor-pointer group hover:-translate-y-1 duration-200 transition-all text-xl "
            >
              <FaArrowLeft className="group-hover:-translate-x-1 duration-200 transition-all" />
              <span>Go Back</span>
            </button>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 p-5 rounded-xl shadow my-4 text-center font-semibold w-full">
            <p className="col-span-1 md:col-span-2 lg:col-span-4 text-gray-400 font-semibold">
              Popular Destinations
            </p>
            <Link
              href={"/"}
              className="col-span-1 px-1 text-green-600 bg-green-200 rounded-lg py-2 hover:bg-green-300/80 duration-200 transition-colors"
            >
              All Products
            </Link>
            <Link
              href={"/categories"}
              className="col-span-1 px-1 text-gray-600 bg-gray-200 rounded-lg py-2 hover:bg-gray-300/80"
            >
              Categories
            </Link>
            <Link
              href={"/deals"}
              className="col-span-1 px-1 text-gray-600 bg-gray-200 rounded-lg py-2 hover:bg-gray-300/80"
            >
              Today&apos;s Deals
            </Link>
            <Link
              href={"/contact"}
              className="col-span-1 px-1 text-gray-600 bg-gray-200 rounded-lg py-2 hover:bg-gray-300/80"
            >
              Contact Us
            </Link>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="bg-green-100 py-3 mt-2">
        <div className="container grid grid-cols-2 gap-3 md:grid-cols-4 justify-between items-center">
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
