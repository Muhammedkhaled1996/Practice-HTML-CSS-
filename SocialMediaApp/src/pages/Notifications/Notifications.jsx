import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaBell, FaCheckDouble } from "react-icons/fa";
import { headerObjectData } from "../../helpers/headersObj";
import axios from "axios";
import NotificationSkeleton from "./NotificationSkeleton/NotificationSkeleton";
import NotificationCard from "./../../components/NotificationCard/NotificationCard";
import { GeneralContext } from "../../Context/GeneralContext";
import useInfinitePosts from "../../CustomHooks/useInfinitePosts";
import { useInView } from "react-intersection-observer";
import {Spinner} from "@heroui/react";

export default function Notifications() {
  // `https://route-posts.routemisr.com/notifications?unread=false&page=1&limit=50`,

  const { unReadMessegsCount } = useContext(GeneralContext);

  const [notificationType, setnotificationType] = useState(true);

  // console.log(notificationType);

  const endpoint = notificationType
    ? "notifications?limit=50"
    : "notifications?unread=false&limit=50";

  // get notifications function
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts(["notifications", notificationType], true, endpoint);

  const queryclient = useQueryClient();

  // mark all as read Comment
  async function notificationReadAll() {
    try {
      const response = await axios.patch(
        `https://route-posts.routemisr.com/notifications/read-all`,
        {},
        headerObjectData(),
      );
      queryclient.invalidateQueries(["notifications", notificationType]);
      queryclient.invalidateQueries(["notificationCount"]);
      return response;
    } catch (err) {
      // console.log(err);
      return err;
    }
  }

  // console.log(data, "data of notifications");

  const notifications =
    data?.pages?.flatMap((page) => page?.data?.notifications || []) ?? [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      <title>Social Media - Notifications</title>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
            <button
              onClick={notificationReadAll}
              className={`flex items-center p-2 gap-2 text-sm rounded-lg border  font-medium transition-colors ${unReadMessegsCount?.unreadCount ? "bg-blue-200/20  border-blue-200  cursor-pointer text-blue-600 hover:text-blue-800" : "bg-gray-200/20  border-gray-200 cursor-not-allowed text-gray-600 pointer-events-auto"}`}
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
              onClick={() => setnotificationType(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors cursor-pointer   ${notificationType ? "bg-blue-600 text-white" : "bg-blue-200/20 text-black"}`}
            >
              All
            </button>
            <button
              onClick={() => setnotificationType(false)}
              className={`font-bold px-4 py-1.5 rounded-full text-sm transition-colors cursor-pointer flex items-center gap-2 ${!notificationType ? "bg-blue-600 text-white" : "bg-blue-200/20 text-black"}
              `}
            >
              Unread
              <span
                className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${!notificationType ? "bg-blue-400 " : "bg-white"}`}
              >
                {unReadMessegsCount?.unreadCount}
              </span>
            </button>
          </div>

          {/* Notification Items */}
          <div className="flex flex-col gap-3">
            {isLoading && (
              <>
                <NotificationSkeleton />
                <NotificationSkeleton />
                <NotificationSkeleton />
              </>
            )}

            {(notifications.length === 0 && !isLoading) ||
              (unReadMessegsCount?.unreadCount === 0 && !notificationType && (
                <div className="text-center py-10 text-gray-400">
                  <FaBell className="text-3xl mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No notifications yet</p>
                </div>
              ))}

            {data &&
              !isLoading &&
              notifications.map((notification) => (
                <NotificationCard
                  setnotificationType={setnotificationType}
                  notificationType={notificationType}
                  key={notification._id}
                  notification={notification}
                />
              ))}
            <div ref={ref}>
              {isFetchingNextPage && (
                <div className="flex items-center justify-center gap-3 bg-white p-2 rounded-lg w-fit mx-auto">
                  <Spinner size="sm" color="gray" />
                  <span>loading more notifications...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
