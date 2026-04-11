"use client";
import { getSpecificAddresses } from "@/src/apiDataFetching/address/address.actions";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import DialogDemo from "../AddAddress/AddAddress";

export default function EditAddress({ addressId }: { addressId: string }) {
  const [open, setOpen] = useState(false);
  const [addressData, setAddressData] = useState<any>(null);

  async function handleEditClick() {
    const res = await getSpecificAddresses(addressId);

    if (res?.data) {
      setAddressData(res.data);
      setOpen(true);
    }
  }

  return (
    <>
      <button
        onClick={handleEditClick}
        className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors"
        title="Edit address"
      >
        <FaPen className="text-sm" />
      </button>

      <DialogDemo open={open} setOpen={setOpen} addressData={addressData} />
    </>
  );
}
