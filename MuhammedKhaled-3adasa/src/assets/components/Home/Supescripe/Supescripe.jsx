import React from "react";

export default function Supescripe() {
  return (
    <>
      <div className="bg-main border-y border-gray-600">
        <div className="relative mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center items-center py-20">
          <div className=" rounded-3xl lg:w-2/3 mx-auto bg-gray-700/20 border border-gray-500 flex flex-col justify-center items-center p-6 ">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="p-5 rounded-2xl bg-main-orange mb-8">
                <i className="fa-regular fa-envelope text-white text-4xl"></i>
              </div>
              <div className="font-extrabold text-5xl mb-8">
                <p className="text-white">
                  اشترك في{" "}
                  <span className="linerGradiantText">نشرتنا الإخبارية</span>
                </p>
              </div>
              <p className="text-gray-400 text-lg mb-8">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full text-lg mb-8">
                <input
                  type="text"
                  placeholder="أدخل بريدك الألكترونى"
                  className="md:col-span-2 text-gray-300 bg-main rounded-xl border border-gray-400 focus:outline-main-orange focus:outline-3 p-3 placeholder:text-gray-400"
                />
                <button className="p-2 cursor-pointer hover:bg-main-orange duration-300 transition-colors bg-[#f64b00] text-white rounded-lg font-bold">
                  اشترك الاَن
                </button>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                <div className="flex justify-center items-center me-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="author1"
                    className="size-10 rounded-full border-2 border-main"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                    alt="author2"
                    className="size-10 rounded-full border-2 -ms-3 me-1 border-main"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="author3"
                    className="size-10 rounded-full border-2 border-main"
                  />
                </div>
                <p className="text-gray-400">
                  انضم لـ <span className="text-white">+10,000</span> مصور
                </p>
                <p className="text-gray-400">بدون إزعاج</p>
                <p className="text-gray-400">إلغاء الاشتراك في أي وقت</p>
              </div>
            </div>
            <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
            <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
