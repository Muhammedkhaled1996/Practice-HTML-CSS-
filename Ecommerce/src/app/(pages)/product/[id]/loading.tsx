import { Spinner } from "@/components/ui/spinner";
import React from "react";

export default function loading() {
  return (
    <>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
           <Spinner  className="size-8 text-green-500 font-bold"/>
          </div>
        </div>
        <p className="text-gray-600 mt-6 font-medium">Loading product details...</p>
        <p className="text-gray-400 text-sm mt-1">Just a moment</p>
      </div>
    </>
  );
}
