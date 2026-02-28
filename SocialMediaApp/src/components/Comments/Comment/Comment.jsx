import React, { useState } from "react";
import { FaEllipsisH, FaPencilAlt, FaSave, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import toast from "react-hot-toast";
import { formatDistanceStrict, formatDistanceToNow } from "date-fns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { headerObjectData } from "../../../helpers/headersObj";
import { GeneralContext } from "../../../Context/GeneralContext";
import { AuthContext } from "../../../Context/AuthContext";

export default function Comment({ comment, postID }) {
  const { userData } = useContext(AuthContext);
  const { profileDefaultImage, setcommentToBeUpdate } =
    useContext(GeneralContext);

  const { _id: userID } = userData || {};
  const [showMenu, setShowMenu] = useState(false);

  const queryClient = useQueryClient();

  // Delete Comment
  const { mutate, isPending } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["postComments", postID]);
      toast.success("Comment Deleted Successfully!");
    },
    onError: () => {
      toast.error("Error in Deleting Comment");
    },
  });

  async function deleteComment(commentID) {
    console.log(postID, commentID);

    try {
      const response = await axios.delete(
        `https://route-posts.routemisr.com/posts/${postID}/comments/${commentID}`,
        headerObjectData(),
      );
      return response;
    } catch (err) {
      console.log(err);
      console.log(err.response.data);

      return err;
    }
  }

  // like or dislike post
  const [likeState, setlikeState] = useState(comment?.likes.includes(userID));
  const [likeCountState, setlikeCount] = useState(comment?.likes.length);
  async function likeComment() {
    try {
      const response = await axios.put(
        `https://route-posts.routemisr.com/posts/${postID}/comments/${comment._id}/like`,
        {},
        headerObjectData(),
      );
      queryClient.invalidateQueries(["postComments", postID]);
      console.log(response, "likePost");
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // formating data of created time below comments
  const formatShortTime = (date) => {
    const text = formatDistanceStrict(new Date(date), new Date());

    return text
      .replace(" seconds", "s")
      .replace(" second", "s")
      .replace(" minutes", "m")
      .replace(" minute", "m")
      .replace(" hours", "h")
      .replace(" hour", "h")
      .replace(" days", "d")
      .replace(" day", "d")
      .replace(" months", "mo")
      .replace(" month", "mo")
      .replace(" years", "y")
      .replace(" year", "y");
  };

  return (
    <div key={comment._id} className="flex flex-col items-start gap-2">
      <div className="w-full">
        <div className="flex gap-3">
          <img
            src={comment.commentCreator?.photo}
            alt={comment.commentCreator?.name}
            className="size-10 rounded-full object-cover shrink-0"
            onError={(e) => {
              e.target.src = profileDefaultImage;
            }}
          />
          <div className="rounded-2xl p-2 flex-1">
            <div className="rounded-2xl p-2 bg-white">
              <div>
                <div className=" flex justify-between">
                  <div className="flex gap-1 items-center justify-center">
                    <p className="text-sm font-bold">
                      {comment.commentCreator?.name}
                    </p>
                    <span className="font-bold text-gray-400">•</span>
                    <div className="text-[11px] font-bold text-gray-400">
                      <span>{formatShortTime(comment.createdAt)}</span>
                    </div>
                  </div>

                  {/* Three-dot menu */}

                  {userID === comment.commentCreator?._id && (
                    <div className="relative">
                      <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <FaEllipsisH />
                      </button>
                      {showMenu && userID === comment.commentCreator?._id && (
                        <div className=" absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-1 z-10 min-w-[120px]">
                          <button
                            onClick={() => {
                              setcommentToBeUpdate(comment);
                              setShowMenu(false);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <FaPencilAlt className="text-[12px]" />
                            {isPending ? "Updating..." : "Edit"}
                          </button>
                          <button
                            onClick={() => {
                              mutate(comment._id);
                              setShowMenu(false);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <FaTrash className="text-[12px]" />
                            {isPending ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {comment.content && (
                  <p className="text-sm">{comment.content}</p>
                )}
              </div>
              {comment.image && (
                <div className="mt-2 rounded-lg overflow-hidden border border-gray-300">
                  <img
                    src={comment.image}
                    alt="comment"
                    className="max-h-60 w-full object-contain bg-gray-50"
                  />
                </div>
              )}
            </div>
            <div className="mt-2 flex items-center justify-between px-1">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-slate-400">
                  {formatShortTime(comment.createdAt)}
                </span>
                <button
                  onClick={() => {
                    likeComment();
                    setlikeState(!likeState);
                    {
                      likeState
                        ? setlikeCount(likeCountState - 1)
                        : setlikeCount(likeCountState + 1);
                    }
                  }}
                  className={`cursor-pointer text-xs font-semibold hover:underline disabled:opacity-60 ${likeCountState ? "text-blue-500" : "text-slate-500"}`}
                >
                  {`Like (${likeCountState})`}
                </button>
                <button className="cursor-pointer text-xs font-semibold transition hover:underline disabled:opacity-60 text-slate-500 hover:text-[#1877f2]">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
