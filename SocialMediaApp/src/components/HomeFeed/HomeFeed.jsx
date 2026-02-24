import AddPost from "../AddPost/AddPost.jsx";
import PostCard from "../PostCard/PostCard.jsx";
import PostCardSkeleton from "../PostCard/PostCardSkeleton.jsx";
import usePost from "../../CustomHooks/usePost.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import SuggestedFriends from "../SuggestedFriends/SuggestedFriends.jsx";

export default function HomeFeed() {
  const { data, isLoading, isFetching, isFetched, isError } = usePost(
    ["feedPosts"],
    true,
    "/posts/feed?only=following&limit=10",
  );

  const posts = data?.posts || [];

  console.log(posts);

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
      </div>
    </>
  );
}
