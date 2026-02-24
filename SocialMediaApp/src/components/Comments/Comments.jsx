import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";
import { Spinner } from "@heroui/react";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import AddComment from "../AddComment/AddComment";
import { AuthContext } from "../../Context/AuthContext";
import { FaEllipsisH, FaPencilAlt, FaSave, FaTrash } from "react-icons/fa";
import { GeneralContext } from "../../Context/GeneralContext";

export default function Comments({ postID }) {
  const { userData } = useContext(AuthContext);
  const { profileDefaultImage ,setcommentToBeUpdate} = useContext(GeneralContext);

  const { _id: userID } = userData || {};
  const [showMenu, setShowMenu] = useState(false);

  async function getPostComments() {
    const response = await axios.get(
      `https://route-posts.routemisr.com/posts/${postID}/comments?page=1&limit=10`,
      headerObjectData(),
    );

    return response.data;
  }

  const { data: commentsData, isLoading: commentsLoading } = useQuery({
    queryKey: ["postComments", postID],
    queryFn: getPostComments,
  });

  const commentsRows = commentsData?.data?.comments;
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["postComments", postID]);
      toast.success("Comment Deleted Successfully!");
    },
    onError: () => {
      toast.error("Error in Deleting Comment");
    },
  });

  async function deletePost(commentID) {
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

  return (
    <>
      <div className="bg-gray-100 rounded-b-2xl shadow-sm p-3 w-full">
        <div className="flex justify-between items-center p-2.5 rounded-xl bg-white w-full">
          <div className="flex items-center gap-3">
            <p className="font-bold text-sm">comments</p>
            <span className="size-5 flex items-center justify-center font-bold text-blue-800 text-[11px] rounded-full bg-blue-300 ">
              {commentsRows?.length || 0}
            </span>
          </div>
          <div className="p-1">
            <select
              name="sort"
              id="sort"
              className="px-2 py-1 rounded-lg border-gray-400 border font-bold text-[11px]"
            >
              <option value="Most Relevant">Most Relevant</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4 w-full">
          {commentsLoading ? (
            <Spinner />
          ) : commentsData?.data?.comments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-5 text-center text-gray-600 text-sm font-bold">
              No comments yet. Be the first one to comment.
            </div>
          ) : (
            commentsRows?.map((comment) => (
              <div
                key={comment._id}
                className="flex flex-col items-start gap-2 w-full"
              >
                <div className="flex gap-3 w-full">
                  <img
                    src={comment.commentCreator?.photo}
                    alt={comment.commentCreator?.name}
                    className="size-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = profileDefaultImage;
                    }}
                  />
                  <div className="rounded-2xl p-2 bg-white w-full">
                    <div>
                      <div className=" flex justify-between">
                        <div>
                          <p className="text-sm font-bold">
                            {comment.commentCreator?.name}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <span>
                              {formatDistanceToNow(
                                new Date(comment.createdAt),
                                {
                                  addSuffix: true,
                                },
                              )}
                            </span>
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
                            {showMenu &&
                              userID === comment.commentCreator?._id && (
                                <div className=" absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-1 z-10 min-w-[140px]">
                                  <button
                                    onClick={() => {
                                      setcommentToBeUpdate(comment);
                                      setShowMenu(false);
                                    }}
                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                                  >
                                    <FaPencilAlt className="text-xs" />
                                    {isPending ? "Updating..." : "Update"}
                                  </button>
                                  <button
                                    onClick={() => {
                                      mutate(comment._id);
                                      setShowMenu(false);
                                    }}
                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                  >
                                    <FaTrash className="text-xs" />
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
                </div>
              </div>
            ))
          )}

          <AddComment postID={postID} />
        </div>
      </div>
    </>
  );
}
