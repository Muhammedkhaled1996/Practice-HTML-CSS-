import React, { useContext } from "react";
import { AuthContext } from "./../../Context/AuthContext";
import usePost from "../../CustomHooks/usePost";
import PostCard from "../../components/PostCard/PostCard.jsx";
import PostCardSkeleton from "../../components/PostCard/PostCardSkeleton";

export default function MyPosts() {
  const { userData } = useContext(AuthContext);

  const { data, isLoading, isFetching, isFetched, isError } = usePost(
    ["allUserPosts"],
    Boolean(userData?._id),
    `posts/feed?only=me&limit=20`,
  );

  console.log(data, "data from my posts");

  return (
    <>
      {isLoading ||
        (Boolean(userData?._id) == false && (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ))}
      {data?.posts?.length === 0 && !isLoading && (
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 text-center text-gray-600 text-sm">
          No posts yet. Be the first one to publish.
        </div>
      )}
      {isFetched &&
        data.posts.map((post) => <PostCard key={post._id} post={post} />)}
    </>
  );
}
