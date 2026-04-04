"use client";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import { useProfileEditStore } from "@/src/stores/profileSetting.store";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight, FaPlus, FaUser } from "react-icons/fa";
import { FaGear, FaLocationDot } from "react-icons/fa6";

export default function layout({ children }: { children: React.ReactNode }) {
  const { setProfileEdit, profileEdit } = useProfileEditStore();

  return (
    <>
      <div className="green-gradiant text-white">
        <div className="container px-4 py-12 sm:py-16">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="My Account"
              linkClassName="hover:text-white"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaUser className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                My Account
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Manage your addresses and account settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container px-4 my-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
        <aside className="w-full lg:w-72 shrink-0">
          <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">My Account</h2>
            </div>
            <ul className="p-2">
              <li onClick={() => setProfileEdit("address")}>
                <Link
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${profileEdit === "address" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                  href="/profile/addresses"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${profileEdit === "address" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}
                  >
                    <FaLocationDot className=" text-sm" />
                  </div>
                  <span className="font-medium flex-1">My Addresses</span>
                  <FaChevronRight
                    className={`text-xs transition-transform ${profileEdit === "address" ? "text-green-500" : "text-gray-40"}`}
                  />
                </Link>
              </li>
              <li onClick={() => setProfileEdit("setting")}>
                <Link
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${profileEdit === "setting" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                  href="/profile/settings"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${profileEdit === "setting" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}
                  >
                    <FaGear className="text-sm" />
                  </div>
                  <span className="font-medium flex-1">Settings</span>
                  <FaChevronRight
                    className={`text-xs transition-transform ${profileEdit === "setting" ? "text-green-500" : "text-gray-40"}`}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        {children}
      </div>
    </>
  );
}
