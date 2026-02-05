import React from "react";
import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="group hover:-translate-y-2 duration-300 transition-all cursor-pointer border border-gray-700 rounded-3xl h-full">
        <div className="bg-gray-800/40 rounded-3xl overflow-hidden shadow-lg text-white h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.slug}
              className="w-full h-64 object-cover group-hover:scale-110 duration-300 transition-all"
            />

            <span className="absolute top-4 right-4 bg-black/70 px-4 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-gray-500 text-sm mb-4 text-[1.1rem]">
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:text-main-orange duration-300 transition-all">
              {post.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>

            <div className="mt-auto">
              <div className="border border-gray-700 w-full my-6"></div>

              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-gray-400">{post.author.role}</p>
                  </div>

                  <div className="text-main-orange group-hover:text-white duration-300 transition-all rounded-full border border-main-orange flex justify-center items-center size-10 text-lg group-hover:bg-main-orange/20">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
