import React from "react";
import { Link } from "react-router-dom";

export default function List({ post }) {
  return (
    <>
      <Link to={`/blog/${post.slug}`}>
        <div className="group/card mx-auto w-full overflow-hidden rounded-4xl border-2 border-gray-700 bg-white lg:max-w-full hover:border-main-orange transition-colors duration-300 cursor-pointer">
          <div className="lg:flex">
            <div className="lg:shrink-0 relative overflow-hidden">
              <img
                className="h-80 w-full object-cover lg:h-full lg:w-140  group-hover/card:scale-110 transition-all duration-300"
                src={post.image}
                alt={post.slug}
              />
              <div className="px-3 py-2 bg-linear-to-r from-[#FF7000] to-[#F1AE00] rounded-4xl text-white font-bold absolute top-3 right-3 flex justify-center items-center">
                <i className="fa-solid fa-star me-2"></i>
                <p className="">مميز</p>
              </div>
            </div>
            <div className="p-8 bg-main w-full flex flex-col items-start">
              <div className="flex justify-center items-center mb-6">
                <p className="px-3 py-2 bg-main-orange/20 border border-main-orange rounded-3xl text-main-orange font-bold me-4">
                  {post.category}
                </p>
                <div className="flex justify-center items-center text-gray-500">
                  <i className="fa-regular fa-clock me-1"></i>
                  <p>{post.readTime}</p>
                </div>
              </div>
              <div className="flex justify-center items-center mb-6">
                <p className="text-white font-bold text-3xl group-hover/card:text-main-orange transition-colors duration-300">
                  {post.title}
                </p>
              </div>
              <div className="flex justify-center items-center mb-6">
                <p className="text-gray-400 text-xl">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center w-full ">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="size-16 rounded-full "
                  />
                  <i className="fa-solid fa-circle absolute left-0 bottom-0 text-main-orange border-2 border-main rounded-full "></i>
                </div>
                <div className="flex justify-center items-center text-main-orange font-bold text-[1.1rem]">
                  <div className="flex justify-center items-center">
                    <p className="me-4 group-hover/card:translate-x-2 transition-transform duration-300 ">
                      اقرأ المقال
                    </p>
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
