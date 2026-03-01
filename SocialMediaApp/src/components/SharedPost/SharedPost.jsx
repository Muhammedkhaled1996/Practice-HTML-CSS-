import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

export default function SharedPost({ post }) {
  // console.log(post, "post from shared post component");

  const { body, _id, isShare, sharedPost } = post || {};
  const { body: sharedBody, image, user, id: postId } = sharedPost || {};
  const { name, photo, username, _id: userPostId } = user || {};

  return (
    <>
      <div className="mx-4 my-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="p-3">
          <div className="mb-2 flex items-center gap-2">
            <img
              alt={name}
              className="h-9 w-9 rounded-full object-cover"
              src={photo}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900">
                {name}
              </p>
              {username && (
                <p className="truncate text-xs text-slate-500">{username}</p>
              )}
            </div>
            <Link
              to={`/details/${postId}`}
              className="cursor-pointer ml-auto inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff] duration-200 transition-all"
            >
              Original Post
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
                aria-hidden="true"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>
          </div>
          {sharedBody && (
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
              {sharedBody}
            </p>
          )}
        </div>
        <PhotoProvider>
          <div className="border-t border-slate-200">
            <button
              type="button"
              className="group relative block w-full cursor-pointer"
            >
              <PhotoView key={postId} src={image}>
                <img
                  alt="Shared post"
                  className="max-h-[560px] w-full object-cover"
                  src={image}
                />
              </PhotoView>
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
          </div>
        </PhotoProvider>
      </div>
    </>
  );
}
