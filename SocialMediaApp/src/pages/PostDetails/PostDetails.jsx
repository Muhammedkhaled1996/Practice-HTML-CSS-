import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import usePost from "../../CustomHooks/usePost";
import PostCard from "./../../components/PostCard/PostCard";
import PostCardSkeleton from "./../../components/PostCard/PostCardSkeleton";
import { Button } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";
import { GeneralContext } from "../../Context/GeneralContext";
import AddPost from './../../components/AddPost/AddPost';

export default function PostDetails() {
  const { id } = useParams();
  const { postToBeUpdate } = useContext(GeneralContext);
  //   console.log(id);

  const { data, isLoading, isFetching, isFetched, isError } = usePost(
    ["details", id],
    true,
    `posts/${id}`,
  );

  //   console.log(data);

  return (
    <>
      <title>Social Media - Post Details</title>
      <div className="container w-full md:w-3/4 mx-auto">
        <Button
          as={Link}
          to={"/"}
          size="sm"
          className="flex gap-2 mb-3 -mt-2 bg-gray-400 cursor-pointer w-fit hover:bg-gray-600"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Button>
        {postToBeUpdate && <AddPost />}

        {isLoading && <PostCardSkeleton />}
        {isFetched && <PostCard post={data.post} isPostDetails={true} />}
      </div>
    </>
  );
}
