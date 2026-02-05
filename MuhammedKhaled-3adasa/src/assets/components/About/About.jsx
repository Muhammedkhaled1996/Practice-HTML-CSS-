import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About({ posts }) {
  return (
    <>
      <div className="bg-[url(../../../../public/gridBackground2.jpg)] bg-main bg-blend-multiply bg-cover border-b border-gray-600">
        {/* hero setion in about page */}
        <div className="mt-21 mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center items-center">
          <div className="relative flex justify-center items-center py-6">
            <div className="flex flex-col justify-center items-center text-center md:mb-0 md:mt-0">
              <div className="bg-main-orange/20 border border-main-orange rounded-xl w-fit p-3 flex justify-center items-center mb-6">
                <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
                <div className="relative">
                  <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                  <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
                </div>
                <p className="font-bold text-white">من نحن</p>
              </div>
              <div className="text-white font-extrabold text-4xl lg:text-7xl text-center mb-6">
                <h1>
                  مهمتنا هي
                  <span className="linerGradiantText"> الإعلام والإلهام</span>
                </h1>
              </div>
              <div className="text-xl md:text-2xl text-gray-600 my-4 lg:w-3/4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي
                الجودة.
              </div>
              <div className="w-full  md:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-5 my-4">
                <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                  <i className="fa-solid fa-newspaper text-3xl linerGradiantText mb-2"></i>
                  <div>
                    <p className="linerGradiantText font-bold text-4xl mb-2">
                      +2مليون
                    </p>
                    <span className="text-[1.4rem] text-gray-500 ">
                      قارئ شهرياَ
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                  <i className="fa-solid fa-people-group text-3xl linerGradiantText mb-2"></i>
                  <div>
                    <p className="linerGradiantText font-bold text-4xl mb-2">
                      +500
                    </p>
                    <span className="text-[1.4rem] text-gray-500 ">
                      مقالة منشورة
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                  <i className="fa-solid fa-folder-open text-3xl linerGradiantText mb-2"></i>
                  <div>
                    <p className="linerGradiantText font-bold text-4xl mb-2">
                      +50
                    </p>
                    <span className="text-[1.4rem] text-gray-500 ">
                      كاتب خبير
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                  <i className="fa-solid fa-pen-nib text-3xl linerGradiantText mb-2"></i>
                  <div>
                    <p className="linerGradiantText font-bold text-4xl mb-2">
                      +15
                    </p>
                    <span className="text-[1.4rem] text-gray-500 ">تصنيف</span>
                  </div>
                </div>
              </div>
              <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
              <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#111111] py-20 border-b border-gray-600  ">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white text-center flex flex-col justify-center items-center">
          <div className="relative mb-6">
            <p className="text-5xl font-bold after:w-2 after:h-full after:bg-main-orange after:absolute after:top-0 after:-left-6 after:rounded-2xl  before:w-2 before:h-full before:bg-main-orange before:absolute before:top-0 before:-right-6 before:rounded-2xl">
              قيمنا
            </p>
          </div>
          <p className="text-gray-300 text-2xl mb-8">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
            <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] hover:bg-main-orange/10 transition-all duration-200 p-3">
              <i className="fa-solid fa-bullseye text-5xl mt-4 linerGradiantText mb-6"></i>
              <div>
                <p className="linerGradiantText font-bold text-2xl mb-4">
                  الجودة أولاً
                </p>
                <span className=" text-gray-300 text-sm ">
                  محتوى مدروس ومكتوب بخبرة
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] hover:bg-main-orange/10 transition-all duration-200 p-3">
              <i className="fa-solid fa-bolt text-5xl mt-4 linerGradiantText mb-6"></i>
              <div>
                <p className="linerGradiantText font-bold text-2xl mb-4">
                  تركيز عملي
                </p>
                <span className=" text-gray-300 text-sm ">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] hover:bg-main-orange/10 transition-all duration-200 p-3">
              <i className="fa-solid fa-handshake text-5xl mt-4 linerGradiantText mb-6"></i>
              <div>
                <p className="linerGradiantText font-bold text-2xl mb-4">
                  المجتمع
                </p>
                <span className=" text-gray-300 text-sm ">
                  تعلم مع آلاف المصورين
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-4 rounded-2xl hover:scale-[1.03] hover:bg-main-orange/10 transition-all duration-200">
              <i className="fa-solid fa-arrows-rotate text-5xl mt-4 linerGradiantText mb-6"></i>
              <div>
                <p className="linerGradiantText font-bold text-2xl mb-4">
                  دائماً محدث
                </p>
                <span className=" text-gray-300 text-sm ">
                  أحدث الاتجاهات وأفضل الممارسات
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-main border-b border-gray-600">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center items-center py-10 ">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <div className="bg-main-orange/20 border border-main-orange rounded-xl w-fit p-3 flex justify-center items-center mb-6">
              <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
              <div className="relative">
                <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
              </div>
              <p className="font-bold text-white">فريقنا</p>
            </div>
            <div className="text-white font-extrabold text-4xl text-center mb-4">
              <h1>تعرف على كتابنا</h1>
            </div>
            <div className="text-2xl text-gray-400 mb-6">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
              {posts.map((post) => {
                return (
                  <div
                    key={post.author.name}
                    className="flex flex-col justify-between items-center text-white bg-main/75 border border-gray-700 py-6 rounded-2xl hover:scale-[1.03] hover:border-main-orange/30 group transition-all duration-200 cursor-pointer"
                  >
                    <div className="relative mb-4">
                      <img
                        src={post.author.avatar}
                        alt={`${post.author.name} image`}
                        className="size-30 rounded-full border-6 border-gray-800 group-hover:border-main-orange/30 duration-300 transition-all"
                      />
                      <div className="text-white bg-main-orange size-8 border-4 border-gray-900 flex items-center justify-center rounded-full absolute bottom-0 right-0">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-2xl mb-2">
                        {post.author.name}
                      </p>
                      <span className="text-lg text-main-orange   ">
                        {post.author.role}
                      </span>
                      <div className="flex items-center justify-center my-4">
                        <div className="px-3 py-2 rounded-lg bg-gray-600/20 me-3 hover:bg-main-orange duration-300 transition-all">
                          <i className="fa-brands fa-x-twitter"></i>
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-gray-600/20 me-3 hover:bg-gray-600 duration-300 transition-all">
                          <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-gray-600/20 me-3 hover:bg-blue-600 duration-300 transition-all">
                          <i className="fa-brands fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
