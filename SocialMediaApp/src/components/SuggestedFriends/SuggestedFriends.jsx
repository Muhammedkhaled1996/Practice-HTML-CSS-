import React from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";

const suggestedFriends = [
    {
        id: 1,
        name: "Ahmed Bahnasy",
        username: "@bahnasy20222",
        followers: 80,
        avatar: "https://ui-avatars.com/api/?name=Ahmed+Bahnasy&background=3b82f6&color=fff&size=80",
    },
    {
        id: 2,
        name: "Ahmed Abd Al...",
        username: "@ahmedmutti",
        followers: 50,
        avatar: "https://ui-avatars.com/api/?name=Ahmed+Abd&background=8b5cf6&color=fff&size=80",
    },
    {
        id: 3,
        name: "Nourhan",
        username: "@nourhan",
        followers: 25,
        avatar: "https://ui-avatars.com/api/?name=Nourhan&background=ec4899&color=fff&size=80",
    },
    {
        id: 4,
        name: "Ahmed Bahnasy",
        username: "@bahnasy20222v2",
        followers: 28,
        avatar: "https://ui-avatars.com/api/?name=Ahmed+B&background=f59e0b&color=fff&size=80",
    },
    {
        id: 5,
        name: "Ahmed Abd Al...",
        username: "@ahmedmutt3ri",
        followers: 21,
        avatar: "https://ui-avatars.com/api/?name=Ahmed+M&background=10b981&color=fff&size=80",
    },
];

export default function SuggestedFriends() {
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
                        {suggestedFriends.length}
                    </span>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <input
                        type="text"
                        placeholder="Search friends..."
                        className="w-full pl-8 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
                    />
                </div>

                {/* Friends List */}
                <div className="flex flex-col gap-4">
                    {suggestedFriends.map((friend) => (
                        <div key={friend.id}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={friend.avatar}
                                        alt={friend.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 leading-tight">
                                            {friend.name}
                                        </p>
                                        <p className="text-xs text-gray-400">{friend.username}</p>
                                    </div>
                                </div>
                                <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer">
                                    <span>👤</span> Follow
                                </button>
                            </div>
                            <p className="text-xs text-blue-400 mt-1 ml-14">
                                {friend.followers} followers
                            </p>
                        </div>
                    ))}
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
