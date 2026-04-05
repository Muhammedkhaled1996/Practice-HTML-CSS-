import React from "react";
import Link from "next/link";
import {
  FaDatabase,
  FaUserShield,
  FaLock,
  FaClock,
  FaEnvelope,
  FaArrowLeft,
  FaCookie,
  FaBalanceScale,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function page() {
  return (
    <>
      {/* Header */}
      <div className="green-gradiant text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Cookies Policy"
                            linkClassName="hover:text-white"

            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaCookie className="text-4xl" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Cookies Policy
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Notice */}
        <div className="bg-linear-to-r from-yellow-50 to-yellow-200/50 border border-yellow-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-15 h-15 rounded bg-yellow-400 text-white flex justify-center items-center text-xl">
              <FaCookie />
            </div>
            <div className="text-gray-700">
              <h2 className="text-lg font-bold text-yellow-900 mb-2">
                Important Notice
              </h2>
              <p className="text-yellow-800 leading-relaxed">
                This Cookies Policy explains how FreshCart uses cookies and
                similar technologies to recognize you when you visit our
                website.
              </p>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Article 1 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaCookie />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 1
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  What Are Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Cookies are small data files stored on your device that help
                improve your browsing experience.
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaDatabase />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 2
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Types of Cookies We Use
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Essential cookies for core functionality.
              </p>
              <p className="text-sm text-gray-600">
                Analytics cookies to understand usage.
              </p>
              <p className="text-sm text-gray-600">
                Marketing cookies for personalized ads.
              </p>
            </div>
          </section>

          {/* Article 3 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaUserShield />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 3
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  How We Use Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                To remember your preferences.
              </p>
              <p className="text-sm text-gray-600">
                To improve performance and speed.
              </p>
              <p className="text-sm text-gray-600">To personalize content.</p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaLock />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 4
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Managing Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                You can control cookies through your browser settings.
              </p>
              <p className="text-sm text-gray-600">
                Disabling cookies may affect functionality.
              </p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaClock />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 5
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Data Retention
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Cookies may be stored for different durations depending on their
              type.
            </p>
          </section>

          {/* Article 6 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaBalanceScale />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 6
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Consent
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              By continuing to use our website, you agree to our use of cookies.
            </p>
          </section>

          {/* Article 7 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-200 group-hover:bg-green-500 group-hover:text-white">
                <FaEnvelope />
              </div>
              <div>
                <span className="text-xs font-bold text-green-600 uppercase">
                  Article 7
                </span>
                <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              If you have any questions about this Cookies Policy, contact us at{" "}
              <a
                href="mailto:privacy@freshcart.com"
                className="text-green-600 font-semibold hover:underline"
              >
                privacy@freshcart.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
              href="/"
            >
              <FaArrowLeft />
              Back to Home
            </Link>

            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium"
              href="/privacy"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>


      <LowerInstractions/>

      
    </>
  );
}
