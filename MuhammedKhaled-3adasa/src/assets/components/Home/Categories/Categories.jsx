import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <>
      <div className="bg-main border-y border-gray-600">
        <div className="relative mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="py-8 flex flex-col items-center text-center">
            <div className="bg-main-orange/20 border border-main-orange rounded-4xl w-fit p-3 flex justify-center items-center mb-4">
              <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
              <div className="relative">
                <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
              </div>
              <p className="font-bold text-white">التصنيفات</p>
            </div>

            <p className="text-white text-5xl md:text-7xl font-bold mb-4">
              استكشف حسب الموضوع
            </p>

            <p className="text-gray-500 text-2xl mb-8">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              <Link
                to={`/blog?Category=${categories[0].name}`}
                className="p-4 rounded-2xl  cursor-pointer group border border-gray-700 bg-[linear-gradient(to_right,#161616,#161616,#E87200,#F3AD00)] bg-size-[300%_100%] bg-left hover:bg-right transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-center items-center bg-main-orange/10 text-main-orange p-4 rounded-xl border border-main-orange group-hover:bg-main-orange duration-500 transition-colors">
                    <i className="fa-solid fa-sun text-2xl group-hover:text-white duration-500 transition-colors"></i>
                  </div>
                  <i className="fa-solid fa-circle-arrow-left text-white/60 text-4xl invisible group-hover:visible duration-500 transition-all "></i>
                </div>
                <p className="text-white text-2xl font-bold mb-4 text-start">
                  {categories[0].name}
                </p>
                <span className="text-gray-500 text-start w-full block ">
                  {categories[0].count} مقالات
                </span>
              </Link>

              <Link
                to={`/blog?Category=${categories[1].name}`}
                className="p-4 rounded-2xl  cursor-pointer group border border-gray-700 bg-[linear-gradient(to_right,#161616,#161616,#E87200,#F3AD00)] bg-size-[300%_100%] bg-left hover:bg-right transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-center items-center bg-main-orange/10 text-main-orange p-4 rounded-xl border border-main-orange group-hover:bg-main-orange duration-500 transition-colors">
                    <i className="fa-solid fa-user text-2xl group-hover:text-white duration-500 transition-colors"></i>
                  </div>
                  <i className="fa-solid fa-circle-arrow-left text-white/60 text-4xl invisible group-hover:visible duration-500 transition-all "></i>
                </div>
                <p className="text-white text-2xl font-bold mb-4 text-start">
                  {categories[1].name}
                </p>
                <span className="text-gray-500 text-start w-full block">
                  {categories[1].count} مقالات
                </span>
              </Link>

              <Link
                to={`/blog?Category=${categories[2].name}`}
                className="p-4 rounded-2xl  cursor-pointer group border border-gray-700 bg-[linear-gradient(to_right,#161616,#161616,#E87200,#F3AD00)] bg-size-[300%_100%] bg-left hover:bg-right transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-center items-center bg-main-orange/10 text-main-orange p-4 rounded-xl border border-main-orange group-hover:bg-main-orange duration-500 transition-colors">
                    <i className="fa-solid fa-mountain-sun text-2xl group-hover:text-white duration-500 transition-colors"></i>
                  </div>
                  <i className="fa-solid fa-circle-arrow-left text-white/60 text-4xl invisible group-hover:visible duration-500 transition-all "></i>
                </div>
                <p className="text-white text-2xl font-bold mb-4 text-start">
                  {categories[2].name}
                </p>
                <span className="text-gray-500 text-start w-full block">
                  {categories[2].count} مقالات
                </span>
              </Link>

              <Link
                to={`/blog?Category=${categories[3].name}`}
                className="p-4 rounded-2xl  cursor-pointer group border border-gray-700 bg-[linear-gradient(to_right,#161616,#161616,#E87200,#F3AD00)] bg-size-[300%_100%] bg-left hover:bg-right transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-center items-center bg-main-orange/10 text-main-orange p-4 rounded-xl border border-main-orange group-hover:bg-main-orange duration-500 transition-colors">
                    <i className="fa-solid fa-sliders text-2xl group-hover:text-white duration-500 transition-colors"></i>
                  </div>
                  <i className="fa-solid fa-circle-arrow-left text-white/60 text-4xl invisible group-hover:visible duration-500 transition-all "></i>
                </div>
                <p className="text-white text-2xl font-bold mb-4 text-start">
                  {categories[3].name}
                </p>
                <span className="text-gray-500 text-start w-full block">
                  {categories[3].count} مقالات
                </span>
              </Link>

              <Link
                to={`/blog?Category=${categories[4].name}`}
                className="p-4 rounded-2xl  cursor-pointer group border border-gray-700 bg-[linear-gradient(to_right,#161616,#161616,#E87200,#F3AD00)] bg-size-[300%_100%] bg-left hover:bg-right transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex justify-center items-center bg-main-orange/10 text-main-orange p-4 rounded-xl border border-main-orange group-hover:bg-main-orange duration-500 transition-colors">
                    <i className="fa-solid fa-gear text-2xl group-hover:text-white duration-500 transition-colors"></i>
                  </div>
                  <i className="fa-solid fa-circle-arrow-left text-white/60 text-4xl invisible group-hover:visible duration-500 transition-all "></i>
                </div>
                <p className="text-white text-2xl font-bold mb-4 text-start">
                  {categories[4].name}
                </p>
                <span className="text-gray-500 text-start w-full block">
                  {categories[4].count} مقالات
                </span>
              </Link>
            </div>
          </div>
          <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
          <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
        </div>
      </div>
    </>
  );
}
