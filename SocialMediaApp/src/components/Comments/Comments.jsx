import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";
import { Spinner } from "@heroui/react";
import AddComment from "../AddComment/AddComment";
import Comment from "./Comment/Comment";

export default function Comments({ postID }) {
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
    refetchInterval: 5000,
  });

  const commentsRows = commentsData?.data?.comments;

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
              <Comment key={comment._id} postID={postID} comment={comment} />
            ))
          )}

          <AddComment postID={postID} />
        </div>
      </div>
    </>
  );
}
