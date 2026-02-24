import React, { useState } from "react";
import { FaBell, FaCheckDouble, FaHeart, FaCheck } from "react-icons/fa";

// Mock notification data (since there's no real API for this)
const mockNotifications = [
    {
        id: 1,
        type: "like",
        user: {
            name: "Sayed Mokdam",
            username: "@sayedmokdam",
            avatar: "https://ui-avatars.com/api/?name=Sayed+Mokdam&background=10b981&color=fff&size=80",
        },
        action: "liked your post",
        postBody: "Ads",
        time: "20m",
        read: false,
    },
    {
        id: 2,
        type: "like",
        user: {
            name: "Sayed Mokdam",
            username: "@sayedmokdam",
            avatar: "https://ui-avatars.com/api/?name=Sayed+Mokdam&background=10b981&color=fff&size=80",
        },
        action: "liked your post",
        postBody: "Ads",
        time: "20m",
        read: false,
    },
];

export default function Notifications() {
    const [notifications, setNotifications] = useState(mockNotifications);
    const [filter, setFilter] = useState("all"); // "all" or "unread"

    const unreadCount = notifications.filter((n) => !n.read).length;

    const filteredNotifications =
        filter === "unread"
            ? notifications.filter((n) => !n.read)
            : notifications;

    function markAsRead(id) {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    }

    function markAllAsRead() {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: false })));
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }

    return (
        <>
            <title>Social Media - Notifications</title>
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                        <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
                        <button
                            onClick={markAllAsRead}
                            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
                        >
                            <FaCheckDouble className="text-xs" />
                            Mark all as read
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-5">
                        Realtime updates for likes, comments, shares, and follows.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 mb-5">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${filter === "all"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter("unread")}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${filter === "unread"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Unread
                            {unreadCount > 0 && (
                                <span
                                    className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${filter === "unread"
                                        ? "bg-white/20 text-white"
                                        : "bg-blue-100 text-blue-600"
                                        }`}
                                >
                                    {unreadCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Notification Items */}
                    <div className="flex flex-col gap-3">
                        {filteredNotifications.length === 0 && (
                            <div className="text-center py-10 text-gray-400">
                                <FaBell className="text-3xl mx-auto mb-3 opacity-30" />
                                <p className="text-sm">No notifications yet</p>
                            </div>
                        )}

                        {filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${notification.read
                                    ? "bg-white border-gray-100"
                                    : "bg-blue-50/50 border-blue-100"
                                    }`}
                            >
                                {/* Avatar */}
                                <img
                                    src={notification.user.avatar}
                                    alt={notification.user.name}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-800">
                                        <span className="font-semibold">{notification.user.name}</span>{" "}
                                        {notification.action}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {notification.postBody}
                                    </p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <FaHeart className="text-red-300 text-xs" />
                                        {!notification.read && (
                                            <button
                                                onClick={() => markAsRead(notification.id)}
                                                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
                                            >
                                                <FaCheck className="text-[10px]" /> Mark as read
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Time + indicator */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-xs text-gray-400">
                                        {notification.time}
                                    </span>
                                    {!notification.read && (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
