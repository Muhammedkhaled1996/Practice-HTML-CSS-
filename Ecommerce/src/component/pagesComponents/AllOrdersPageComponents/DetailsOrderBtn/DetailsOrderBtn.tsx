"use client";

import { useShowOrderDetailsStore } from "@/src/stores/showOrderDetails.store";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DetailsOrderBtn({ id }: { id: string }) {
  const { toggleOrder, openedOrderId } = useShowOrderDetailsStore();

  const isOpen = openedOrderId === id;

  return (
    <button
      onClick={() => toggleOrder(id)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
        isOpen ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
      }`}
    >
      {isOpen ? "hide" : "Details"}
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  );
}
