import PostCard from "../PostCard/PostCard.jsx";
import PostCardSkeleton from "../PostCard/PostCardSkeleton.jsx";
import { useContext, useEffect } from "react";
import { GeneralContext } from "./../../Context/GeneralContext";
import { useInView } from "react-intersection-observer";
import useInfinitePosts from "../../CustomHooks/useInfinitePosts.jsx";
import { Spinner } from "@heroui/react";

export default function HomeFeed({ endPointFeedPage }) {
  const { queryFn } = useContext(GeneralContext);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts([queryFn], true, endPointFeedPage);

  const posts =
    queryFn === "savedPosts"
      ? (data?.pages?.flatMap((page) => page.data.bookmarks || []) ?? [])
      : (data?.pages?.flatMap((page) => page.data.posts || []) ?? []);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div>
        {isLoading && (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        )}
        {posts?.length === 0 && !isLoading && (
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 text-center text-gray-600 text-sm">
            No posts yet. Be the first one to publish.
          </div>
        )}
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
        <div ref={ref} className="text-center text-sm text-gray-400">
          {isFetchingNextPage && (
            <div className="flex items-center justify-center gap-3 bg-white p-2 rounded-lg w-fit mx-auto">
              <Spinner size="sm" color="gray" />
              <span>loading more posts...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
