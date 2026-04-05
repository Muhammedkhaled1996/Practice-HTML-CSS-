import {
  deleteUserAddress,
  getUserAddresses,
} from "@/src/apiDataFetching/address/address.actions";
import { allUserAddressResponce } from "@/src/types/address.interface";
import React from "react";
import { FaCity, FaPen, FaPhone, FaTrash } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DeleteUserAddress from "../DeleteUserAddress/DeleteUserAddress";
import EditAddress from "../EditAddress";

export default async function AddressCard({
  userAddresses,
}: {
  userAddresses: allUserAddressResponce;
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userAddresses?.data?.length > 0 &&
          userAddresses &&
          userAddresses?.data?.map((address) => (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                    <FaLocationDot className="text-lg text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">Home</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {address.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <FaPhone className="text-xs" />
                        {address.phone}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCity className="text-xs" />
                        {address.city}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                 <EditAddress addressId={address._id} />
                 <DeleteUserAddress addressId={address._id}/>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
