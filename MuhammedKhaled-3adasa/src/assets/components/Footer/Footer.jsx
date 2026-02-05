import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ siteInfo }) {
  return (
    <>
      <div className="relative bg-[#0A0A0A]">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
            <div className="my-8">
              <div className="flex items-center mb-6">
                <div className=" rounded-lg bg-main-orange me-4 size-12 flex items-center justify-center cursor-pointer hover:scale-110 duration-300 transition-all ">
                  <p className="text-white text-2xl font-bold">ع</p>
                </div>
                <span className="text-white font-bold text-xl">عدسة</span>
              </div>
              <p className="text-gray-500 text-lg mb-6">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex items-center text-xl">
                <div className="rounded-lg bg-gray-500/20 border border-gray-400 text-gray-400 me-3 p-3 cursor-pointer hover:bg-main-orange hover:text-white duration-300 transition-all hover:scale-110">
                  <a href={siteInfo.social.twitter}>
                    <i className="fa-brands fa-x-twitter "></i>
                  </a>
                </div>
                <div className="rounded-lg bg-gray-500/20 border border-gray-400 text-gray-400 me-3 p-3 cursor-pointer hover:bg-main-orange hover:text-white duration-300 transition-all hover:scale-110">
                  <a href={siteInfo.social.github}>
                    <i className="fa-brands fa-github "></i>
                  </a>
                </div>
                <div className="rounded-lg bg-gray-500/20 border border-gray-400 text-gray-400 me-3 p-3 cursor-pointer hover:bg-main-orange hover:text-white duration-300 transition-all hover:scale-110">
                  <a href={siteInfo.social.linkedin}>
                    <i className="fa-brands fa-linkedin "></i>
                  </a>
                </div>
                <div className="rounded-lg bg-gray-500/20 border border-gray-400 text-gray-400 me-3 p-3 cursor-pointer hover:bg-main-orange hover:text-white duration-300 transition-all hover:scale-110">
                  <a href={siteInfo.social.youtube}>
                    <i className="fa-brands fa-youtube "></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className=" my-8 flex items-center">
                <span className="w-15 h-1 bg-linear-to-r from-[#FF6D00] to-[#F4A700] rounded me-2"></span>
                <p className="text-white font-bold text-xl">استكشف</p>
              </div>
              <div className="text-gray-500">
                <ul className="overflow-hidden">
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={"/"}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">الرئيسية</li>
                    </Link>
                  </div>
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={"/blog"}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">المدونة</li>
                    </Link>
                  </div>
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={"/about"}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">من نحن</li>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>

            <div>
              <div className=" my-8 flex items-center">
                <span className="w-15 h-1 bg-linear-to-r from-[#FF6D00] to-[#F4A700] rounded me-2"></span>
                <p className="text-white font-bold text-xl">التصنيفات</p>
              </div>
              <div className="text-gray-500">
                <ul className="overflow-hidden">
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={`/blog?Category=إضاءة`}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">إضاءة</li>
                    </Link>
                  </div>
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={`/blog?Category=بورتريه`}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">بورتريه</li>
                    </Link>
                  </div>
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={`/blog?Category=مناظر طبيعية`}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">مناظر طبيعية</li>
                    </Link>
                  </div>
                  <div className="flex items-center mb-4 group text-lg">
                    <i className="fa-solid fa-angle-left translate-x-4 text-main-orange group-hover:translate-x-0 duration-500 transition-all  me-2"></i>

                    <Link
                      to={`/blog?Category=تقنيات`}
                      className="group-hover:text-main-orange  translate-x-5 group-hover:translate-x-0 duration-500 transition-all"
                    >
                      <li className="">تقنيات</li>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>

            <div>
              <div className=" my-8 flex items-center">
                <span className="w-15 h-1 bg-linear-to-r from-[#FF6D00] to-[#F4A700] rounded me-2"></span>
                <p className="text-white font-bold text-xl">استكشف</p>
              </div>
              <div className="text-gray-500 text-lg mb-5">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </div>
              <form>
                <input
                  type="text"
                  placeholder="أدخل بريدك الألكترونى"
                  className="w-full text-gray-300 bg-main rounded-xl border border-gray-400 focus:outline-main-orange focus:outline-3 p-3 mb-4 placeholder:text-gray-400"
                />
                <button className=" w-full p-2 cursor-pointer hover:bg-main-orange duration-300 transition-colors bg-[#f64b00] text-white rounded-lg font-bold">
                  اشترك الاَن
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start justify-between items-center pb-3">
            <p className="text-gray-400">
              © 2026 عدسة. صنع بكل
              <span>
                <i className="fa-solid fa-heart mx-2 text-main-orange"></i>
              </span>
              جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center md:justify-end  text-gray-400">
              <Link
                to={"/privacy"}
                className="me-4 cursor-pointer hover:text-main-orange duration-300 transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to={"/terms"}
                className="cursor-pointer hover:text-main-orange duration-300 transition-colors"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
        <div class="h-40 w-40 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 left-5"></div>
        <div class="h-40 w-40 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 right-5"></div>
      </div>
    </>
  );
}
