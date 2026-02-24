import React, { useState } from "react";
import {
  FaThumbsUp,
  FaRegComment,
  FaShareAlt,
  FaEllipsisH,
  FaGlobe,
  FaTrash,
  FaSave,
} from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Comments from "../Comments/Comments";
import TopComment from "../TopComment/TopComment";
import { FiEdit } from "react-icons/fi";
import { GeneralContext } from "../../Context/GeneralContext";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function PostCard({ post, isPostDetails = false , isProfilePage = false}) {
  const [showComment, setShowComment] = useState(false);

  const {
    body,
    _id: postID,
    image,
    user,
    createdAt: postDate,
    likesCount,
    sharesCount,
    commentsCount,
  } = post;
  const { _id: creatoruserID, name, photo } = post.user;
  const { userData } = useContext(AuthContext);
  const { profileDefaultImage, setpostToBeUpdate } = useContext(GeneralContext);
  const { id: loginUserId } = userData;
  const [showMenu, setShowMenu] = useState(false);

  const result = formatDistanceToNow(new Date(postDate), { addSuffix: true });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["allPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      toast.success("Post Deleted Successfully!");
    },
    onError: () => {
      toast.error("Error in Deleting Post");
    },
  });

  async function deletePost() {
    try {
      const response = await axios.delete(
        `https://route-posts.routemisr.com/posts/${postID}`,
        headerObjectData(),
      );
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  if (!body && !image) return null;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm pt-5 mb-4">
        {/* Header */}
        <div className="flex justify-between items-start px-5">
          <div className="flex items-center gap-3">
            <img
              src={photo}
              alt={name}
              className="w-11 h-11 rounded-full object-cover"
              onError={(e) => {
                e.target.src = profileDefaultImage;
              }}
            />
            <div>
              <p className="font-semibold text-sm text-gray-900">{name}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>@{name?.toLowerCase().replace(/\s/g, "")}</span>
                <span>·</span>
                <span>{result}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <FaGlobe className="text-[10px]" /> Public
                </span>
              </div>
            </div>
          </div>

          {/* Three-dot menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FaEllipsisH />
            </button>

            {/* Delete post */}
            {showMenu && loginUserId === creatoruserID && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-1 z-10 min-w-[140px]">
                <button
                  onClick={() => {
                    mutate();
                    setShowMenu(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <FaTrash className="text-xs" />
                  {isPending ? "Deleting..." : "Delete Post"}
                </button>
                <button
                  onClick={() => {
                    setpostToBeUpdate(post);
                    setShowMenu(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  <FiEdit className="text-xs" />
                  {isPending ? "Updating..." : "Edit Post"}
                </button>
              </div>
            )}

            {/* Save post */}
            {showMenu && loginUserId !== creatoruserID && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-1 z-10 min-w-[140px]">
                <button
                  onClick={() => {
                    // mutate();
                    // setShowMenu(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                >
                  <FaSave className="text-xs" />
                  {isPending ? "Saving..." : "Save Post"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Body */}

        <div className="px-5">
          {body && (
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">{body}</p>
          )}
        </div>

        {/* Image */}
        {image && (
          <PhotoProvider>
            <div className="mt-3 overflow-hidden">
              <PhotoView key={postID} src={image}>
                <img
                  src={image}
                  alt={`Post by ${name}`}
                  className="w-full max-h-[400px] object-contain bg-gray-50 cursor-pointer"
                />
              </PhotoView>
            </div>
          </PhotoProvider>
        )}

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500 px-5">
          <div className="flex items-center gap-1">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              👍
            </span>
            <span>{likesCount} likes</span>
          </div>
          <div className="flex items-center gap-3">
            <span>↗ {sharesCount} shares</span>
            <span>{commentsCount} comments</span>
            <Link
              to={`/details/${postID}`}
              className="text-blue-500 hover:text-blue-700 font-medium hover:underline transition-colors"
            >
              View details
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-3 py-3 border-t border-gray-100 px-5">
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-blue-50">
            <FaThumbsUp />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-blue-50">
            <FaRegComment />
            <span
              onClick={() => {
                setShowComment(!showComment);
              }}
            >
              Comment
            </span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-blue-50">
            <FaShareAlt />
            <span>Share</span>
          </button>
        </div>

        {isPostDetails && !isProfilePage && (
          <div className="">
            <Comments postID={postID} />
          </div>
        )}

        {showComment && !isPostDetails && !isProfilePage && (
          <div className="">
            <Comments postID={postID} />
          </div>
        )}

        {!isPostDetails && !showComment && !isProfilePage && (
          <div className="px-4 pb-4">
            <TopComment post={post} />
          </div>
        )}
      </div>
    </>
  );
}
