"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartLogo from "@/src/assets/images/cart.png";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useProfileEditStore } from "@/src/stores/profileSetting.store";

export default function Footer() {

    const { setProfileEdit, profileEdit } = useProfileEditStore();
  
  return (
    <>
      <footer id="footer" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <Link className="inline-block mb-6" href="/">
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <div className=" flex justify-center items-center gap-1 me-2">
                    <Image src={cartLogo} alt="cartLogo" width={35} />
                    <h1 className="font-bold text-3xl text-black">FreshCart</h1>
                  </div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 text-sm hover:text-green-600 duration-200 transition-colors"
                >
                  <FaPhoneAlt />

                  <span>+1 (800) 123-4567</span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 text-sm hover:text-green-600 duration-200 transition-colors"
                >
                  <FaRegEnvelope />

                  <span>support@freshcart.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm hover:text-green-600 duration-200 transition-colors cursor-pointer">
                  <FaLocationDot />

                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="hover:bg-green-600  w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:bg-green-600  w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:bg-green-600  w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:bg-green-600  w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/products"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/categories"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/brands"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href={{
                      pathname: "/products",
                      query: { category: "6439d2d167d9aa4ca970649f" },
                    }}
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href={{
                      pathname: "/products",
                      query: { category: "6439d5b90049ad0b52b90048" },
                    }}
                  >
                    Men's Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href={{
                      pathname: "/products",
                      query: { category: "6439d58a0049ad0b52b9003f" },
                    }}
                  >
                    Women's Fashion
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Account</h3>
              <ul className="space-y-3">
                <li onClick={()=>setProfileEdit("setting")}>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/profile/settings"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/allorders"
                  >
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/cart"
                  >
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/register"
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/help"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/shipping"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/returns"
                  >
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/track-order"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm hover:text-green-500 duration-200 font-medium"
                    href="/cookies"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {/* */}2026{/* */} FreshCart. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCcVisa />

                  <span>Visa</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCcMastercard />

                  <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCcPaypal />

                  <span>PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
