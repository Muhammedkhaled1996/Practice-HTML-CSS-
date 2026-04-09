"use client";
import { useToggleStore } from "@/src/stores/viewShape.store";
import React from "react";
import { FaGripVertical, FaList } from "react-icons/fa";

export default function ViewShapeSearchPage() {
  const { value, setValue } = useToggleStore();
  return (
    <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
      <button
        onClick={() => setValue("grid")}
        className={`p-2 rounded-md transition-colors ${value === "grid" ? "bg-green-600 text-white" : "text-gray-500 hover:text-gray-700"}`}
      >
        <FaGripVertical />
      </button>
      <button
        onClick={() => setValue("list")}
        className={`p-2 rounded-md transition-colors ${value === "list" ? "bg-green-600 text-white" : "text-gray-500 hover:text-gray-700"}`}
      >
        <FaList />
      </button>
    </div>
  );
}
