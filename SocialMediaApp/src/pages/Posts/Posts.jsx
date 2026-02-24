import AddPost from "../../components/AddPost/AddPost";
import PostCard from "../../components/PostCard/PostCard.jsx";
import PostCardSkeleton from "../../components/PostCard/PostCardSkeleton";
import usePost from "../../CustomHooks/usePost";
import Sidebar from "../../components/Sidebar/Sidebar";
import SuggestedFriends from "../../components/SuggestedFriends/SuggestedFriends";

export default function Posts() {
  const { data, isLoading, isFetching, isFetched, isError } = usePost(
    ["allPosts"],
    true,
    "posts?limit=50&sort=-createdAt",
  );

  console.log(data, "from posts");



  const posts = data?.posts || [];
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
        {posts.length === 0 && !isLoading && (
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 text-center text-gray-600 text-sm">
            No posts yet. Be the first one to publish.
          </div>
        )}
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}
