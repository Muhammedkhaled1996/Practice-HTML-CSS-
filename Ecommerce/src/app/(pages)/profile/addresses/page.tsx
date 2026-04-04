import { getUserAddresses } from "@/src/apiDataFetching/address/address.actions";
import DialogDemo from "@/src/component/pagesComponents/AddAddress/AddAddress";
import AddressSkeleton from "@/src/component/pagesComponents/AddressSkeleton/AddressSkeleton";
import AddAddressButton from "@/src/component/publicComponents/AddAddressBtn/AddAddressBtn";
import React, { lazy, Suspense } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default async function page() {
  const userAddresses = await getUserAddresses();

  console.log(userAddresses, "get all user addresses");

  const LazyAddressCards = lazy(
    () => import("@/src/component/pagesComponents/AddressCard/AddressCard"),
  );

  return (
    <>
      <main className="flex-1 min-w-0 ">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
              <p className="text-gray-500 text-sm mt-1">
                Manage your saved delivery addresses
              </p>
            </div>
            <AddAddressButton title="Add Address" />
            <DialogDemo />
          </div>
          {!userAddresses ||
            (userAddresses.results === 0 && (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                  <FaLocationDot className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No Addresses Yet
                </h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  Add your first delivery address to make checkout faster and
                  easier.
                </p>
                <AddAddressButton title="Add Your First Address" />
              </div>
            ))}
        </div>

        <Suspense fallback={<AddressSkeleton />}>
          <LazyAddressCards userAddresses={userAddresses} />
        </Suspense>
      </main>
    </>
  );
}
