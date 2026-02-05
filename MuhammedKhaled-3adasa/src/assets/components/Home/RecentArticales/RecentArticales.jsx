import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

export default function RecentArticales({ posts }) {
  const topThreePosts = posts.filter((post, index) => {
    return index > 3 && index <= 6;
  });

  console.log(topThreePosts);

  return (
    <>
      <div className="bg-[#120E0A]">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="py-8">
            <div className="bg-main-orange/20 border border-main-orange rounded-4xl w-fit p-3 flex justify-center items-center mb-4">
              <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
              <div className="relative">
                <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
              </div>
              <p className="font-bold text-white">الأحدث</p>
            </div>
            <p className="text-white text-7xl font-bold">أحدث المقالات</p>
            <div className="flex flex-wrap justify-between items-center mt-2 mb-6">
              <p className="text-gray-500 text-2xl">
                محتوى جديد طازج من المطبعة
              </p>
              <Link
                className="w-full mt-2 md:w-fit flex items-center text-main-orange text-2xl font-bold hover:-translate-y-1 transition-all duration-300 group"
                to={"/blog"}
              >
                <span>عرض جميع المقالات</span>
                <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 duration-300 transition-all"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {topThreePosts.map((post) => {
                return <Card post={post} key={post.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
