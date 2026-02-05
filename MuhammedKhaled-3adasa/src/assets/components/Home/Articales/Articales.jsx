import React from "react";
import { Link } from "react-router-dom";
import List from "../../List/List";

export default function Articales({ posts }) {
  const topThreePosts = posts.filter((post, index) => {
    return index < 3;
  });

  return (
    <>
      <div className="bg-linear-to-r from-[#0A0A0A] to-[#16100A]">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="py-8">
            <div className="bg-main-orange/20 border border-main-orange rounded-xl w-fit p-3 flex justify-center items-center mb-6">
              <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
              <div className="relative">
                <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
              </div>
              <p className="font-bold text-white">مميز</p>
            </div>

            <h2 className="font-bold text-4xl md:text-7xl text-white">
              مقالات مختارة
            </h2>
            <div className="flex flex-wrap justify-between items-center mb-5">
              <h3 className="text-gray-500 text-2xl">
                محتوى منتقى لبدء رحلة تعلمك
              </h3>
              <Link
                className="btn flex items-center md:w-fit my-2 p-4 text-xl hover:-translate-y-1 transition-all duration-300 group"
                to={"/blog"}
              >
                <span>عرض الكل</span>
                <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 duration-300 transition-all"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {topThreePosts.map((post) => {
                return <List post={post} key={post.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
