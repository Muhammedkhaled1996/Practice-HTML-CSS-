import React from "react";
import { FaLock, FaRegEye, FaUser } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";

export default function page() {
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
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                    required
                    type="text"
                    defaultValue="muhammed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    placeholder="01xxxxxxxxx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                    required
                    type="tel"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                  >
                    <FaFloppyDisk />
                    Save Changes
                  </button>
                </div>
              </form>
              {/* End Profile Information Form */}
            </div>
            <div className="p-6 sm:p-8 bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">
                Account Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">User ID</span>
                  <span className="font-mono text-gray-700">—</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Role</span>
                  <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                    user
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
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      placeholder="Enter your current password"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      required
                      type="password"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaRegEye />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      placeholder="Enter your new password"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      required
                      minLength={6}
                      type="password"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaRegEye />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 6 characters
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      placeholder="Confirm your new password"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      required
                      type="password"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaRegEye />
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25"
                  >
                    <FaLock />
                    Change Password
                  </button>
                </div>
              </form>
              {/* End Change Password Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
