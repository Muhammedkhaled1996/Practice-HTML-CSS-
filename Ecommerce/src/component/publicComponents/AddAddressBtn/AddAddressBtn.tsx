"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DialogDemo from "../../pagesComponents/AddAddress/AddAddress";

export default function AddAddressButton({ title }: { title: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
      >
        <FaPlus />
        {title}
      </button>

      <DialogDemo open={open} setOpen={setOpen} />
    </>
  );
}
