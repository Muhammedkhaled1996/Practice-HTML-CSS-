import { verifyTokenHandler } from "@/src/apiDataFetching/authontication/VerifyToken";
import UserDataForm from "@/src/component/pagesComponents/UserDataForm/UserDataForm";
import UserPasswordForm from "@/src/component/pagesComponents/UserPasswordForm/UserPasswordForm";
import React from "react";
import { FaLock, FaRegEye, FaUser } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";

export default async function page() {
  const userData = await verifyTokenHandler();

  return (
    <>
      <main className="flex-1 min-w-0">
        <div className="space-y-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Account Settings
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Update your profile information and change your password
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <FaUser className="text-2xl text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Profile Information
                  </h3>
                  <p className="text-sm text-gray-500">
                    Update your personal details
                  </p>
                </div>
              </div>

              {/* Profile Information Form */}
              <UserDataForm />
              {/* End Profile Information Form */}
            </div>
            <div className="p-6 sm:p-8 bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">
                Account Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">User ID</span>
                  <span className="font-mono text-gray-700">
                    {userData ? userData.decoded.id : "_"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Role</span>
                  <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                    {userData ? userData.decoded.role : "User"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <FaLock className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Change Password</h3>
                  <p className="text-sm text-gray-500">
                    Update your account password
                  </p>
                </div>
              </div>

              {/* Change Password Form */}
             <UserPasswordForm />
              {/* End Change Password Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
