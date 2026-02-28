import React, { useState } from "react";
import { FaRegComment, FaEllipsisH, FaGlobe, FaTrash } from "react-icons/fa";
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
import { FaRegBookmark } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import SharedPost from "../SharedPost/SharedPost";
import ModelOfSharedPost from "../ModelOfSharedPost/ModelOfSharedPost";
import LikesPersons from "./../LikesPersons/LikesPersons";
import { AiOutlineLike } from "react-icons/ai";

export default function PostCard({ post, isPostDetails = false }) {
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
    bookmarked,
    likes,
    isShare,
  } = post;

  const { _id: creatoruserID, name, photo } = post.user;
  const { userData } = useContext(AuthContext);
  const { id: loginUserId } = userData;
  const { profileDefaultImage, setpostToBeUpdate } = useContext(GeneralContext);
  const [showMenu, setShowMenu] = useState(false);

  const result = formatDistanceToNow(new Date(postDate), { addSuffix: true });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["feedPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      queryClient.invalidateQueries(["coummunityPosts"]);
      queryClient.invalidateQueries(["savedPosts"]);
      toast.success("Post Deleted Successfully!");
    },
    onError: () => {
      toast.error("Error in Deleting Post");
    },
  });

  // delete post
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

  // like or dislike post
  const [likeState, setlikeState] = useState(likes?.includes(loginUserId));

  const [likeCountState, setlikeCount] = useState(likesCount);

  async function likePost() {
    try {
      const response = await axios.put(
        `https://route-posts.routemisr.com/posts/${postID}/like`,
        {},
        headerObjectData(),
      );
      queryClient.invalidateQueries(["feedPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      queryClient.invalidateQueries(["coummunityPosts"]);
      queryClient.invalidateQueries(["savedPosts"]);
      queryClient.invalidateQueries(["ProfileUsersPosts", _id]);
      queryClient.invalidateQueries(["postComments", postID]);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // save or unsave post
  async function bookmarkPost() {
    try {
      const response = await axios.put(
        `https://route-posts.routemisr.com/posts/${postID}/bookmark`,
        {},
        headerObjectData(),
      );
      queryClient.invalidateQueries(["feedPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      queryClient.invalidateQueries(["coummunityPosts"]);
      queryClient.invalidateQueries(["savedPosts"]);
      queryClient.invalidateQueries(["ProfileUsersPosts", _id]);
      queryClient.invalidateQueries(["postComments", postID]);

      if (bookmarked) {
        toast.success("Post Unsaved Successfully!");
      } else {
        toast.success("Post Saved Successfully!");
      }
      return response;
    } catch (err) {
      console.log(err);
      toast.error("Error in Bookmarking Post");
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
            <Link
              to={`/profile${loginUserId === creatoruserID ? "" : `/${creatoruserID}`}`}
              className="flex items-center gap-3"
            >
              <img
                src={photo}
                alt={name}
                className="w-11 h-11 rounded-full object-cover cursor-pointer"
                onError={(e) => {
                  e.target.src = profileDefaultImage;
                }}
              />
            </Link>
            <div>
              <Link
                to={`/profile${loginUserId === creatoruserID ? "" : `/${creatoruserID}`}`}
              >
                <p className="font-semibold text-sm text-gray-900">{name}</p>
              </Link>
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
                  className="font-bold flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <FaTrash className="text-xs" />
                  {isPending ? "Deleting..." : "Delete Post"}
                </button>
                <button
                  onClick={() => {
                    setpostToBeUpdate(post);
                    setShowMenu(false);
                  }}
                  className="font-bold flex items-center gap-2 w-full px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                >
                  <FiEdit className="text-xs" />
                  {isPending ? "Updating..." : "Edit Post"}
                </button>
                <button
                  onClick={() => {
                    bookmarkPost();
                    setShowMenu(false);
                  }}
                  className={`font-bold flex items-center gap-2 w-full px-3 py-2 text-sm  rounded-lg transition-colors cursor-pointer ${
                    bookmarked
                      ? "text-red-600 hover:bg-red-50"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <FaRegBookmark className="text-xs" />
                  {isPending
                    ? "Saving..."
                    : bookmarked
                      ? "Unsave Post"
                      : "Save Post"}
                </button>
              </div>
            )}

            {/* Save post */}
            {showMenu && loginUserId !== creatoruserID && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-1 z-10 min-w-[140px]">
                <button
                  onClick={() => {
                    bookmarkPost();
                    setShowMenu(false);
                  }}
                  className={`font-bold flex items-center gap-2 w-full px-3 py-2 text-sm  rounded-lg transition-colors cursor-pointer ${
                    bookmarked
                      ? "text-red-600 hover:bg-red-50"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <FaRegBookmark className="text-xs" />
                  {isPending
                    ? "Saving..."
                    : bookmarked
                      ? "Unsave Post"
                      : "Save Post"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Body */}

        <div className="px-5">
          {body && (
            <p className="mt-3 text-sm text-gray-800 leading-relaxed overflow-hidden">
              {body}
            </p>
          )}
        </div>

        {/* if post is from shared Post */}
        {isShare && <SharedPost post={post} />}

        {/* if post isn't from shared Post */}
        {!isShare && (
          <>
            {bookmarked && (
              <div className="font-bold flex items-center justify-center gap-1 ms-4 my-2 rounded-full px-2 py-0.5 text-[10px] bg-blue-200/40 text-blue-700 w-fit">
                <FaRegBookmark />
                <span>Saved</span>
              </div>
            )}

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
          </>
        )}

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500 px-5">
          <div className="flex items-center gap-3">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              <AiOutlineLike />
            </span>
            <span>{likeCountState}</span>
            {likeCountState ? (
              <LikesPersons post={post} />
            ) : (
              <span className="text-sm">Likes</span>
            )}
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
          <button
            onClick={() => {
              likePost();
              setlikeState(!likeState);
              {
                likeState
                  ? setlikeCount(likeCountState - 1)
                  : setlikeCount(likeCountState + 1);
              }
            }}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-blue-50"
          >
            {likeState ? (
              <FcLike className="text-xl" />
            ) : (
              <CiHeart className="text-xl" />
            )}
            <span>Like</span>
          </button>
          <button
            onClick={() => {
              setShowComment(!showComment);
            }}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-blue-50"
          >
            <FaRegComment />
            <span>Comment</span>
          </button>
          <div>
            <ModelOfSharedPost post={post} />
          </div>
        </div>

        {isPostDetails && (
          <div className="">
            <Comments postID={postID} />
          </div>
        )}

        {showComment && !isPostDetails && (
          <div className="">
            <Comments postID={postID} />
          </div>
        )}

        {!isPostDetails && !showComment && (
          <div className="px-4 pb-4">
            <TopComment post={post} />
          </div>
        )}
      </div>
    </>
  );
}
