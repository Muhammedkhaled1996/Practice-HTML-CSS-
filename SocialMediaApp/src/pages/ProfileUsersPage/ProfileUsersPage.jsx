import React, { useContext, useEffect, useState } from "react";
import usePost from "../../CustomHooks/usePost";
import { FaUsers } from "react-icons/fa";
import PostCard from "../../components/PostCard/PostCard";
import PostCardSkeleton from "../../components/PostCard/PostCardSkeleton";
import { IoPersonAddOutline } from "react-icons/io5";
import { TiArrowMaximise } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

export default function ProfileUsersPage() {
  const { userData: loginUserData } = useContext(AuthContext);

  const { _id } = useParams();

  const { data, isLoading, isFetched } = usePost(
    ["ProfileUsersPosts", _id],
    Boolean(_id),
    `users/${_id}/posts`,
  );

  const { data: userData } = useQuery({
    queryFn: getUserData,
    queryKey: ["getUserData", _id],
    enabled: Boolean(_id),
  });

  async function getUserData() {
    try {
      const data = await axios.get(
        `https://route-posts.routemisr.com/users/${_id}/profile`,
        headerObjectData(),
      );
      return data.data.data.user;
    } catch (err) {
      console.dir(err, "error from AuthContext");
      throw err;
    }
  }

  const posts = data?.data?.posts || [];

  // console.log(posts, "posts from profile Page");

  const queryClient = useQueryClient();

  const isFollowing =
    loginUserData?.following?.includes(userData?._id) ?? false;

  // console.log(loginUserData, "loginUserData from Profile of user page");
  // console.log(userData, "userData from Profile of user page");
  // console.log(isFollowing, "isFollowing State");

  const { mutate, isPending } = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["getUserData", _id]);
      if (isFollowing) {
        toast.success("Follow Successfully!");
      } else {
        toast.success("Unfollow Successfully!");
      }
    },
    onError: (err) => {
      toast.error("Error In Following This User");
    },
  });

  // follow or unfollow user
  async function followUser(userId) {
    try {
      const response = await axios.put(
        `https://route-posts.routemisr.com/users/${userId}/follow`,
        {},
        headerObjectData(),
      );
      // console.log(response, "from profile of user");
      return response;
    } catch (err) {
      // console.log(err.response);
      throw err;
    }
  }

  return (
    <>
      <title>Social Media - Profile</title>
      <div className="flex flex-col">
        {/* Cover Photo */}
        <div className="cursor-pointer relative h-48 md:h-70 rounded-t-2xl overflow-hidden bg-linear-to-r from-slate-700 via-slate-600 to-slate-800 group">
          <PhotoProvider>
            <PhotoView key={userData?._id} src={userData?.cover}>
              <img
                src={
                  userData?.cover ||
                  "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                }
                alt={`${userData?.name}'s cover`}
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = profileDefaultImage)}
              />
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* Profile Info Card */}
        <PhotoProvider>
          <div className="bg-white rounded-b-2xl shadow-sm px-6 pb-6">
            {/* Avatar */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white p-3 rounded-t-2xl -mt-14 relative z-10 w-full">
              <div className="flex justify-between gap-4 w-full">
                <div className="flex justify-between gap-4 ">
                  <div className="relative group cursor-pointer w-fit">
                    <img
                      src={
                        userData?.photo ||
                        "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff&size=120"
                      }
                      alt={userData?.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />

                    <PhotoView key={userData?._id} src={userData?.photo}>
                      <div className="size-8 flex justify-center items-center opacity-0 hover:scale-110 group-hover:opacity-100 duration-200 transition-all absolute bottom-1 left-1 bg-white rounded-full p-1 text-gray-600 shadow-md">
                        <TiArrowMaximise />
                      </div>
                    </PhotoView>
                  </div>

                  <div className="flex-1 pb-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {userData?.name}
                    </h1>
                    <p className="text-sm text-gray-400">
                      @{userData?.name?.toLowerCase().replace(/\s/g, "")}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      <FaUsers className="text-[10px]" /> Route Posts member
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    disabled={isPending}
                    onClick={() => {
                      mutate(_id);
                    }}
                    className="self-start text-[14px] bg-gray-300/20 px-3 py-2 rounded-full font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-progress disabled:bg-gray-400"
                  >
                    <IoPersonAddOutline />
                    <span>{isFollowing ? "Unfollow" : "Follow"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </PhotoProvider>

        <div className="mt-4">
          {/* Section of posts */}
          {/* Sekeleton of post */}
          {isLoading && (
            <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
          )}

          {/* if no posts */}
          {posts.length === 0 && !isLoading && (
            <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 text-center text-gray-600 text-sm">
              No posts yet. Be the first one to publish.
            </div>
          )}

          {/* posts of profile page */}
          {isFetched && (
            <div className="flex mb-3 flex-col gap-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
