import React from "react";
import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav";

export default function Layout() {
  return (
    <>
      <AppNav />
      <div className="min-h-screen pt-6 pb-10 bg-[#f0f2f5]">
        <div className="max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
