import React from "react";
import AutoSlider from "../components/ui/AutoSlider";
import cart from "@/src/assets/images/freshcartpic.png";
import Image from "next/image";
import {
  FaApple,
  FaArrowRight,
  FaEnvelope,
  FaGooglePlay,
  FaLeaf,
  FaLongArrowAltRight,
  FaTag,
  FaTruck,
} from "react-icons/fa";
import Link from "next/link";
import LowerInstractions from "../component/publicComponents/LowerInstractions/LowerInstractions";
import SkeletonCards from "../component/publicComponents/SkeletonCards/SkeletonCards";
import dynamic from "next/dynamic";
import InstractionInHomePage from "../component/pagesComponents/HomePageComponents/InstractionInHomePage/InstractionInHomePage";
import SilderComponent from "../component/pagesComponents/HomePageComponents/SilderComponent/SilderComponent";
import OfferCards from "../component/pagesComponents/HomePageComponents/OfferCards/OfferCards";

export default async function Home() {
  const DynamicCategoriesComponent = dynamic(
    () =>
      import("../component/pagesComponents/HomePageComponents/CategoryHomePage/CategoryHomePage"),
    {
      loading: () => <SkeletonCards />,
    },
  );

  const DynamicProductsComponent = dynamic(
    () =>
      import("../component/pagesComponents/HomePageComponents/AllProductsHomePage/AllProductsHomePage"),
    {
      loading: () => <SkeletonCards />,
    },
  );

  return (
    <>
      {/* slider */}
      <div className="h-80 w-full">
        <SilderComponent />
      </div>
      {/*  */}
      <InstractionInHomePage />
      {/* categories */}
      <div className="container px-4 md:px-0 py-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div className="flex items-center justify-between gap-3 my-4 w-full">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 ">
                Shop By <span className="text-emerald-600">Category</span>
              </h2>
            </div>
            <Link
              className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer gap-3 text-sm md:text-lg"
              href="categories"
            >
              View All Categories
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        <DynamicCategoriesComponent />
      </div>
      {/* offers */}
      <section className="py-10 px-4 md:px-0">
        <OfferCards/>
      </section>
      {/* all products */}
      <div className="container px-4 md:px-0 ">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div className="flex items-center gap-3 my-4">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Featured <span className="text-emerald-600">Products</span>
            </h2>
          </div>
        </div>
        {/* all products */}

        <DynamicProductsComponent />
      </div>

      {/* contact us */}
      <div className="relative grid lg:grid-cols-5 gap-8 p-8 lg:p-10 rounded-2xl shadow my-6   bg-linear-to-r from-green-100/40 to-green-200/20 container">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white text-2xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Newsletter
              </h3>
              <p className="text-xs text-gray-500">50,000+ subscribers</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Get the Freshest Updates{" "}
              <span className="text-emerald-600"> Delivered Free</span>
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Weekly recipes, seasonal offers &amp; exclusive member perks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
              <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-green-600 text-sm">
                <FaLeaf />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Fresh Picks Weekly
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
              <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-green-600 text-sm">
                <FaTruck />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Free Delivery Codes
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
              <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-green-600 text-sm">
                <FaTag />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Members-Only Deals
              </span>
            </div>
          </div>
          <form className="pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  placeholder="you@example.com"
                  className="w-full pl-5 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-base shadow-sm"
                  required
                  type="email"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]"
              >
                <span>Subscribe</span>
                <FaLongArrowAltRight />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 pl-1">
              ✨ Unsubscribe anytime. No spam, ever.
            </p>
          </form>
        </div>
        <div className="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
          <div className="h-full flex flex-col justify-center">
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="relative space-y-5">
                <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                  📱 MOBILE APP
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  Shop Faster on Our App
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get app-exclusive deals &amp; 15% off your first order.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <FaApple />

                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                        Download on
                      </div>
                      <div className="text-sm font-semibold -mt-0.5">
                        App Store
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <FaGooglePlay />

                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                        Get it on
                      </div>
                      <div className="text-sm font-semibold -mt-0.5">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2 text-sm">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-400">4.9 • 100K+ downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <LowerInstractions />
    </>
  );
}
