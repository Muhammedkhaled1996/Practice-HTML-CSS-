import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className=" relative bg-[url(/gridBackground.jpg)] bg-cover py-5 lg:p-0">
        <div className="inset-0 bg-black/80 absolute z-10"></div>
        <div className="relative z-20">
          <div
            style={{ minHeight: "calc(100vh - 84px)" }}
            className="z-10 mt-21 mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center items-center "
          >
            <div className="w-full flex justify-center items-center self-center">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="bg-main-orange/20 border border-main-orange rounded-xl w-fit p-3 flex justify-center items-center mb-6">
                  <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
                  <div className="relative">
                    <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                    <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
                  </div>
                  <p className="font-bold text-white">مرحباً بك في عدسة</p>
                </div>
                <div className="text-white font-extrabold text-4xl md:text-7xl text-center mb-6 flex flex-col">
                  <h1 className="">
                    اكتشف <span className="linerGradiantText">فن</span>
                  </h1>
                  <span className="leading-20">التصوير الفوتوغرافي</span>
                </div>
                <div className="text-2xl md:text-3xl text-gray-600 my-4 mb-6">
                  انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                </div>
                <div className="grid grid-cols-1 gap-3 w-full lg:w-fit lg:grid-cols-2 text-[1.2rem]">
                  <Link
                    className="btn flex justify-center items-center p-3 font-semibold hover:-translate-y-1.5 transition-all duration-300 w-full"
                    to="/blog"
                  >
                    <span className="me-3">استكشف المقالات</span>
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </Link>
                  <Link
                    className="text-white border border-gray-700 rounded-full flex justify-center items-center p-3 font-semibold hover:border-main-orange hover:bg-main-orange/10 hover:text-main-orange transition-all duration-300 group"
                    to="/about"
                  >
                    <div className="flex items-center justify-center border border-gray-700 rounded-full  size-10 me-3 group-hover:border-main-orange transition-all duration-300">
                      <i className="fa-solid fa-info"></i>
                    </div>
                    <span>اعرف المزيد</span>
                  </Link>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                  <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                    <i className="fa-solid fa-newspaper text-3xl linerGradiantText mb-2"></i>
                    <div>
                      <p className="linerGradiantText font-bold text-4xl mb-2">
                        50+
                      </p>
                      <span className="text-[1.4rem] text-gray-500 ">مقالة</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                    <i className="fa-solid fa-people-group text-3xl linerGradiantText mb-2"></i>
                    <div>
                      <p className="linerGradiantText font-bold text-4xl mb-2">
                        +10 ألف
                      </p>
                      <span className="text-[1.4rem] text-gray-500 ">قارئ</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                    <i className="fa-solid fa-folder-open text-3xl linerGradiantText mb-2"></i>
                    <div>
                      <p className="linerGradiantText font-bold text-4xl mb-2">
                        4
                      </p>
                      <span className="text-[1.4rem] text-gray-500 ">
                        تصنيفات
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                    <i className="fa-solid fa-pen-nib text-3xl linerGradiantText mb-2"></i>
                    <div>
                      <p className="linerGradiantText font-bold text-4xl mb-2">
                        6
                      </p>
                      <span className="text-[1.4rem] text-gray-500 ">كاتب</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
        <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
      </div>

    </>
  );
}
