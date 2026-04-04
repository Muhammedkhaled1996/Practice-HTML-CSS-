"use client";
import { Spinner } from "@/components/ui/spinner";
import { deleteUserAddress } from "@/src/apiDataFetching/address/address.actions";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

export default function DeleteUserAddress({
  addressId,
}: {
  addressId: string;
}) {
  const [loading, setloading] = useState(false);

  async function deleteAddress(addressId: string) {
    setloading(true);
    try {
      const res = await deleteUserAddress(addressId);
      if (res.status === "success") {
        toast.success("Address deleted successfully");
      } else {
        toast.error("Error in deleting address");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  }

  return (
    <>
      <button
        disabled={loading}
        onClick={() => deleteAddress(addressId)}
        className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
        title="Delete address"
      >
        {loading ? (
          <div>
            <Spinner color="red" />
          </div>
        ) : (
          <FaTrash className="text-sm" />
        )}
      </button>
    </>
  );
}
