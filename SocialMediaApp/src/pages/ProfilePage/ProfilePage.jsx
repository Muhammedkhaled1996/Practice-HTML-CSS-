import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import usePost from "../../CustomHooks/usePost";
import { FaEnvelope, FaUsers, FaBookmark } from "react-icons/fa";
import { GeneralContext } from "../../Context/GeneralContext";
import PostCard from "../../components/PostCard/PostCard";
import PostCardSkeleton from "../../components/PostCard/PostCardSkeleton";
import { IoCameraOutline } from "react-icons/io5";
import { TiArrowMaximise } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useForm } from "react-hook-form";
import { headerObjectData } from "../../helpers/headersObj";
import { useQueryClient } from "@tanstack/react-query";
import { Spinner } from "@heroui/react";
import axios from "axios";

export default function ProfilePage() {
  const { userData } = useContext(AuthContext);
  const { profileDefaultImage } = useContext(GeneralContext);
  const {
    name,
    email,
    photo,
    _id,
    followersCount,
    followingCount,
    bookmarksCount,
  } = userData || {};

  const { data, isLoading, isFetched } = usePost(
    ["allUserPosts"],
    Boolean(_id),
    `users/${_id}/posts`,
  );

  const posts = data?.posts || [];

  console.log(posts, "posts from profile");

  // update profile photo function

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      photo: null,
    },
  });

  const queryClient = useQueryClient();

  async function updateProfilePhoto(files) {
    try {
      console.log(files[0], "files");
      const formData = new FormData();
      if (files[0]) {
        formData.append("photo", files[0]);
      }
      await axios.put(
        "https://route-posts.routemisr.com/users/upload-photo",
        formData,
        headerObjectData(),
      );
      queryClient.invalidateQueries(["allUserPosts"]);
      queryClient.invalidateQueries(["loggedInUserData"]);
      toast.success("Profile Photo Updated Successfully");
      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error in Updating Profile Photo",
      );
      console.log(error, "error in updating profile photo");
    }
  }

  const selectedImage = watch("photo");
  console.log(selectedImage?.[0] || null, "selectedImage");

  useEffect(() => {
    if (selectedImage && selectedImage[0] instanceof File) {
      const url = URL.createObjectURL(selectedImage[0]);
      return () => URL.revokeObjectURL(url);
    }
  }, [selectedImage]);

  return (
    <>
      <title>Social Media - Profile</title>
      <div className="flex flex-col">
        {/* Cover Photo */}
        <div className="relative h-48 md:h-56 rounded-t-2xl overflow-hidden bg-linear-to-r from-slate-700 via-slate-600 to-slate-800">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
        </div>

        {/* Profile Info Card */}
        <PhotoProvider>
          <div className="bg-white rounded-b-2xl shadow-sm px-6 pb-6">
            {/* Avatar */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white p-3 rounded-t-2xl -mt-14 relative z-10">
              <div className="flex justify-center gap-4">
                <div className="relative group cursor-pointer w-fit">
                  <img
                    src={
                      photo ||
                      "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff&size=120"
                    }
                    alt={name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    onError={(e) => (e.target.src = profileDefaultImage)}
                  />
                  <label
                    htmlFor="profilePhoto"
                    className="size-8 flex justify-center items-center opacity-0 hover:scale-110 group-hover:opacity-100 duration-200 transition-all absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-1 shadow-md cursor-pointer"
                  >
                    <IoCameraOutline />
                  </label>

                  <input
                    type="file"
                    id="profilePhoto"
                    className="hidden"
                    accept="image/*"
                    {...register("photo")}
                    onChange={(e) => updateProfilePhoto(e.target.files)}
                  />
                  <PhotoView key={_id} src={photo || profileDefaultImage}>
                    <div className="size-8 flex justify-center items-center opacity-0 hover:scale-110 group-hover:opacity-100 duration-200 transition-all absolute bottom-1 left-1 bg-white rounded-full p-1 text-gray-600 shadow-md">
                      <TiArrowMaximise />
                    </div>
                  </PhotoView>
                </div>

                <div className="flex-1 pb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                  <p className="text-sm text-gray-400">
                    @{name?.toLowerCase().replace(/\s/g, "")}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    <FaUsers className="text-[10px]" /> Route Posts member
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 pb-2 items-end">
                {[
                  { label: "FOLLOWERS", value: followersCount },
                  { label: "FOLLOWING", value: followingCount },
                  { label: "BOOKMARKS", value: bookmarksCount },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="w-full text-center border border-gray-200 rounded-xl px-5 py-2.5 min-w-24"
                  >
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* About + Post Stats */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 mt-3 p-3">
              {/* About */}
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">
                  About
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEnvelope className="text-gray-400 text-xs" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaUsers className="text-gray-400 text-xs" />
                    <span>Active on Route Posts</span>
                  </div>
                </div>
              </div>

              {/* Post Stats */}
              <div className="flex flex-col gap-3">
                <div className="border border-gray-200 rounded-xl p-4 min-w-40">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    MY POSTS
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {posts.length}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 min-w-40">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    SAVED POSTS
                  </p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </div>
          </div>
        </PhotoProvider>

        {/* Posts Section */}
        <div className="mt-4">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-4 bg-white rounded-2xl shadow-sm p-2">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-xl transition-colors">
                <FaBookmark className="text-xs" /> My Posts
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                <FaBookmark className="text-xs" /> Saved
              </button>
            </div>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
              {posts.length}
            </span>
          </div>

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
                <PostCard key={post._id} post={post} isProfilePage={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
