import React, { useContext, useState } from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { headerObjectData } from "./../../helpers/headersObj";
import { IoPersonAddOutline } from "react-icons/io5";
import { GeneralContext } from "../../Context/GeneralContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function SuggestedFriends() {
  const { userData } = useContext(AuthContext);
  const { profileDefaultImage } = useContext(GeneralContext);
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const { data: suggestions, isLoading } = useQuery({
    queryFn: getSuggestedFriends,
    queryKey: ["suggestedFriends"],
  });

  //
  async function getSuggestedFriends() {
    try {
      const { data } = await axios.get(
        `https://route-posts.routemisr.com/users/suggestions`,
        headerObjectData(),
      );
      return data.data.suggestions;
    } catch (err) {
      // console.log(err, "error from SuggestedFriends");
      throw err;
    }
  }

  const matchesSearch = suggestions?.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.username?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const displayedFriends = searchTerm
    ? matchesSearch
    : matchesSearch?.slice(0, 5);

  const { mutate, isPending } = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["allPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      toast.success("Follow Successfully!");
    },
    onError: (err) => {
      toast.error(err.response.messege);
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
      return response;
    } catch (err) {
      console.log(err.response);
      return err;
    }
  }

  return (
    <div className="sticky top-6">
      <div className="bg-white rounded-2xl shadow-sm p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-gray-500 text-lg" />
            <h3 className="font-semibold text-gray-900 text-sm">
              Suggested Friends
            </h3>
          </div>
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
            {displayedFriends?.length || 0}
          </span>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          <input
            type="text"
            placeholder="Search friends..."
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
          />
        </div>

        {/* Friends List */}
        <div className="flex flex-col gap-4 ">
          {isLoading ? (
            <p className="text-center text-xs text-gray-500">Loading...</p>
          ) : (
            displayedFriends?.map((friend) => (
              <div
                key={friend?._id}
                className="px-2 py-3 rounded-xl border border-gray-200 "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Link
                      to={`/profile${userData?._id === friend?._id ? "" : `/${friend?._id}`}`}
                    >
                      <img
                        src={friend?.photo || profileDefaultImage}
                        alt={friend?.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                        onError={(e) => (e.target.src = profileDefaultImage)}
                      />
                    </Link>
                    <div className="min-w-0">
                      <Link
                        to={`/profile${userData?._id === friend?._id ? "" : `/${friend?._id}`}`}
                        className="min-w-0"
                      >
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {friend?.name}
                        </p>
                      </Link>
                      {friend?.username ? (
                        <p className="text-xs text-gray-400 truncate">
                          @{friend?.username}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400">Route User</p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      mutate(friend?._id);
                    }}
                    className="text-xs bg-gray-300/20 px-1.5 py-1 rounded-full font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    <IoPersonAddOutline />
                    <span>Follow</span>
                  </button>
                </div>
                <div className="flex gap-3 mt-2 items-center">
                  <p className="text-xs text-gray-700 p-1 rounded-full bg-gray-300/20 ">
                    {friend?.followersCount} followers
                  </p>
                  <p className="text-xs text-blue-700 p-1 rounded-full bg-blue-300/20">
                    {friend?.mutualFollowersCount} mutual
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View More */}
        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <button className="text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors cursor-pointer">
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
