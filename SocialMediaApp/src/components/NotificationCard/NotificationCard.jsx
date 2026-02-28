import axios from "axios";
import { formatDistanceStrict, formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { headerObjectData } from "../../helpers/headersObj";
import { useQueryClient } from "@tanstack/react-query";

export default function NotificationCard({
  notification,
  notificationType,
  setnotificationType,
}) {
  const [markState, setmarkState] = useState(notification?.isRead);

  const queryClient = useQueryClient();

  // mark as read Comment
  async function notificationRead() {
    try {
      const response = await axios.patch(
        `https://route-posts.routemisr.com/notifications/${notification._id}/read`,
        {},
        headerObjectData(),
      );
      queryClient.invalidateQueries(["notifications", notificationType]);
      queryClient.invalidateQueries(["notificationCount"]);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // formating data of created time below comments
  const formatShortTime = (date) => {
    const text = formatDistanceStrict(new Date(date), new Date());

    return text
      .replace(" seconds", "s")
      .replace(" second", "s")
      .replace(" minutes", "m")
      .replace(" minute", "m")
      .replace(" hours", "h")
      .replace(" hour", "h")
      .replace(" days", "d")
      .replace(" day", "d")
      .replace(" months", "mo")
      .replace(" month", "mo")
      .replace(" years", "y")
      .replace(" year", "y");
  };

  return (
    <div className="relative">
      <Link
        to={`/details/${notification.entity._id}`}
        className={`absolute inset-0 rounded-xl border transition-colors border-gray-100 ${!markState ? "bg-blue-300/20" : "bg-white/20"} pointer-events-auto`}
      />
      <div
        className={`flex items-start gap-4 p-4 rounded-xl relative z-10 pointer-events-none`}
      >
        {/* Avatar */}
        <img
          src={notification?.actor.photo}
          alt={notification?.actor.name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm">
            <span className="font-semibold">{notification?.actor.name} </span>
            <span className="text-gray-500 text-sm">{notification?.type}</span>
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {notification?.entity.body}{" "}
          </p>
          <div className="flex items-center gap-3 mt-2">
            {notification?.type === "comment_post" && (
              <FaRegCommentAlt className="text-blue-300 font-bold" />
            )}
            {notification?.type === "like_post" && (
              <FaRegHeart className="text-red-300 font-bold" />
            )}
            {!markState && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  notificationRead();
                  setmarkState(true);
                }}
                className={`pointer-events-auto flex items-center gap-1 p-1 rounded-lg text-xs  font-medium transition-color bg-white text-blue-600 hover:text-blue-800 hover:bg-blue-300/20 " : "text-green-600 cursor-pointer`}
              >
                <FaCheck className="text-[10px]" />
                <span>Mark as read</span>
              </button>
            )}
            {markState && (
              <button
                className={`flex items-center gap-1 p-1 rounded-lg text-xs font-medium transition-color bg-white text-green-600`}
              >
                <FaCheck className="text-[10px]" />
                <span>read</span>
              </button>
            )}
          </div>
        </div>

        {/* Time + indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-400">
            {formatShortTime(notification.createdAt)}
          </span>
          {!markState && <div className="w-1 h-1 bg-blue-500 rounded-full" />}
        </div>
      </div>
    </div>
  );
}
