import React from "react";
import { Link } from "react-router-dom";

export default function MinCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="group hover:border-main-orange duration-300 transition-all cursor-pointer border border-gray-700 rounded-3xl h-full">
        <div className="bg-gray-800/40 rounded-3xl overflow-hidden shadow-lg text-white h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.slug}
              className="w-full h-64 object-cover group-hover:scale-110 duration-700 transition-all"
            />

            <span className="absolute top-4 right-4 bg-main-orange font-bold px-4 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-bold leading-snug mb-3 group-hover:text-main-orange duration-300 transition-all">
              {post.title}
            </h2>

            <div className="mt-auto">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-gray-400 text-lg">{post.author.name}</p>
                  </div>
                  <div className="text-gray-400 text-lg">{post.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
