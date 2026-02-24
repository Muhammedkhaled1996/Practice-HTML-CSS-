import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { GeneralContext } from "../../Context/GeneralContext";

export default function TopComment({ post }) {
  const { profileDefaultImage } = useContext(GeneralContext);
  const { _id: postID, topComment } = post || {};

  const { commentCreator, createdAt, image, _id } = topComment || {};

  const commentDate = createdAt ? new Date(createdAt) : null;

  // console.log(post, "from top comment");
  if (!topComment) return null;

  return (
    <>
      <div className="bg-gray-100/50 rounded-xl  p-2 w-full border border-gray-200">
        <p className="font-bold text-[12px] text-gray-600">Top Comment</p>

        <div className="flex flex-col gap-3 my-2 w-full">
          <div key={_id} className="flex flex-col items-start gap-2 w-full">
            <div className="flex gap-3 w-full">
              <img
                src={commentCreator?.photo}
                alt={commentCreator?.name}
                className="size-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.src = profileDefaultImage;
                }}
              />
              <div className="rounded-2xl p-2 bg-white w-full">
                <p className="text-sm font-bold">{commentCreator?.name}</p>
                <div className="flex items-center gap-2 text-[12px] text-gray-600 mb-2">
                  <span>
                    {commentDate && !isNaN(commentDate)
                      ? formatDistanceToNow(commentDate, { addSuffix: true })
                      : ""}
                  </span>
                </div>
                <p className="text-sm">{topComment?.content}</p>
                {image && (
                  <div className="mt-2 rounded-lg overflow-hidden border border-gray-300">
                    <img
                      src={topComment?.image}
                      alt="comment"
                      className="max-h-60 w-full object-contain bg-gray-50"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Link
          to={`/details/${postID}`}
          className="font-bold text-xs text-blue-700 cursor-pointer  "
        >
          View All Comments
        </Link>
      </div>
    </>
  );
}
