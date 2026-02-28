import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../CustomHooks/usePost";
import PostCard from "./../../components/PostCard/PostCard";
import PostCardSkeleton from "./../../components/PostCard/PostCardSkeleton";
import { Button } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";
import { GeneralContext } from "../../Context/GeneralContext";
import AddPost from "./../../components/AddPost/AddPost";

export default function PostDetails() {
  const { id } = useParams();
  const { postToBeUpdate } = useContext(GeneralContext);

  const { data, isLoading, isFetching, isFetched, isError, error } = usePost(
    ["details", id],
    true,
    `posts/${id}`,
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (isError && error?.response?.status === 404) {
      navigate("/", { replace: true });
    }
  }, [isError]);

  return (
    <>
      <title>Social Media - Post Details</title>
      <div className="container w-full md:w-3/4 mx-auto">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          className="flex gap-2 mb-3 -mt-2 bg-gray-400 cursor-pointer w-fit hover:bg-gray-600"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Button>
        {postToBeUpdate && <AddPost />}

        {isLoading && <PostCardSkeleton />}

        {isError ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              {error?.response?.status === 404
                ? "Post has been deleted."
                : "Something went wrong."}
            </p>
          </div>
        ) : (
          data?.data?.post && <PostCard post={data?.data.post} isPostDetails />
        )}

        {/* {isFetched && <PostCard post={data.post} isPostDetails={true} />} */}
      </div>
    </>
  );
}
