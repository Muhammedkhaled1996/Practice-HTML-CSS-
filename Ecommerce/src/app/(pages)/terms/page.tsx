import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaLock,
  FaShareAlt,
  FaUserCheck,
  FaClock,
  FaEnvelope,
  FaArrowLeft,
  FaCookie,
  FaHeadset,
  FaTruck,
  FaFileContract,
  FaHandsHelping,
  FaBalanceScale,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function page() {
  return (
    <>
      <div className="green-gradiant text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Terms of Service"
                            linkClassName="hover:text-white"

            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaFileContract  className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-linear-to-r from-yellow-50 to-yellow-200/50 border border-yellow-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="grow shrink-0 w-15 h-15 rounded bg-yellow-400 text-white flex justify-center items-center text-xl">
              <FaFileContract  />
            </div>
            <div className="text-gray-700">
              <h2 className="text-lg font-bold text-yellow-900 mb-2">
                Important Notice
              </h2>
              <p className="text-yellow-800 leading-relaxed">
                By accessing and using FreshCart, you accept and agree to be
                bound by the terms and provisions of this agreement. Please read
                these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaHandsHelping  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 1
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  1.1
                </span>
                <p className="text-sm">
                  By accessing or using the Service, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  1.2
                </span>
                <p className="text-sm">
                  If you do not agree to these Terms, you must not access or use
                  the Service.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  1.3
                </span>
                <p className="text-sm">
                  We reserve the right to modify these Terms at any time, and
                  such modifications shall be effective immediately upon
                  posting.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaUserCheck  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 2
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  User Eligibility
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  2.1
                </span>
                <p className="text-sm">
                  The Service is intended for users who are at least eighteen
                  (18) years of age.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  2.2
                </span>
                <p className="text-sm">
                  By using the Service, you represent and warrant that you are
                  of legal age to form a binding contract.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  2.3
                </span>
                <p className="text-sm">
                  If you are accessing the Service on behalf of a legal entity,
                  you represent that you have the authority to bind such entity.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <BsCardText  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 3
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Account Registration
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  3.1
                </span>
                <p className="text-sm">
                  You may be required to create an account to access certain
                  features of the Service.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  3.2
                </span>
                <p className="text-sm">
                  You agree to provide accurate, current, and complete
                  information during registration.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  3.3
                </span>
                <p className="text-sm">
                  You are solely responsible for maintaining the confidentiality
                  of your account credentials.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  3.4
                </span>
                <p className="text-sm">
                  You agree to notify us immediately of any unauthorized use of
                  your account.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <CiCreditCard1  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 4
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Orders and Payments
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  4.1
                </span>
                <p className="text-sm">
                  All orders placed through the Service are subject to
                  acceptance and availability.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  4.2
                </span>
                <p className="text-sm">
                  Prices are subject to change without notice prior to order
                  confirmation.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  4.3
                </span>
                <p className="text-sm">
                  Payment must be made in full at the time of purchase through
                  approved payment methods.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  4.4
                </span>
                <p className="text-sm">
                  We reserve the right to refuse or cancel any order at our sole
                  discretion. We reserve the right to refuse or cancel any order
                  at our sole discretion.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaTruck  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 5
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Shipping and Delivery
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  5.1
                </span>
                <p className="text-sm">
                  Shipping times are estimates only and are not guaranteed.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  5.2
                </span>
                <p className="text-sm">
                  Risk of loss and title for items purchased pass to you upon
                  delivery to the carrier.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  5.3
                </span>
                <p className="text-sm">
                  We are not responsible for delays caused by carriers, customs,
                  or other factors beyond our control.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaArrowRotateLeft  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 6
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Returns and Refunds
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  6.1
                </span>
                <p className="text-sm">
                  Our return policy allows returns within 14 days of delivery
                  for most items.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  6.2
                </span>
                <p className="text-sm">
                  Products must be unused and in original packaging.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                  6.3
                </span>
                <p className="text-sm">
                  Refunds will be processed within 5-7 business days after
                  receiving the returned item.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaBalanceScale  />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 7
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              To the maximum extent permitted by applicable law, FreshCart shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly.
            </p>
          </section>
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-green-200 group-hover:bg-green-500 group-hover:text-white to-green-500">
                <FaEnvelope />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Article 8
                </span>
                <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:privacy@freshcart.com"
                className="text-green-600 hover:text-green-700 font-semibold hover:underline"
              >
                privacy@freshcart.com
              </a>
            </p>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all duration-200"
              href="/"
            >
              <div>
                <FaArrowLeft />
              </div>
              Back to Home
            </Link>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200"
              href="/privacy"
            >
              View Privacy Policy<span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>

       <LowerInstractions/>
    </>
  );
}
