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
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";

export default function ProfileUsersPage() {
    const { _id } = useParams();

    const { data, isLoading, isFetched } = usePost(
        ["ProfileUsersPosts", _id],
        Boolean(_id),
        `users/${_id}/posts`,
    );

    const { data: userData } = useQuery({
        queryFn: getUserData,
        queryKey: ["getUserData", _id],
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

    console.log(userData, "userData");

    const posts = data?.posts || [];

    console.log(posts, "posts from profile Page");

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
                        <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white p-3 rounded-t-2xl -mt-14 relative z-10">
                            <div className="flex justify-center gap-4">
                                <div className="relative group cursor-pointer w-fit">
                                    <img
                                        src={
                                            userData?.photo ||
                                            "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff&size=120"
                                        }
                                        alt={name}
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
