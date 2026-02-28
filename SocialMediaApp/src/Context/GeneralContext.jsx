import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { headerObjectData } from "../helpers/headersObj";
import usePost from "../CustomHooks/usePost";
import { useQuery } from "@tanstack/react-query";

export const GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
  const [postToBeUpdate, setpostToBeUpdate] = useState(null);
  const [commentToBeUpdate, setcommentToBeUpdate] = useState(null);
  const [queryFn, setQueryFn] = useState("coummunityPosts");
  const [endPointFeedPage, setEndPointFeedPage] = useState(
    "posts/feed?only=all&limit=20",
  );

  const profileDefaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg";

  // get notifcation count

  const { data: unReadMessegsCount } = useQuery({
    queryFn: getUnreadMessegs,
    queryKey: ["notificationCount"],
    enabled: true, // default value
  });

  async function getUnreadMessegs() {
    try {
      const responce = await axios.get(
        `https://route-posts.routemisr.com/notifications/unread-count`,
        headerObjectData(),
      );

      return responce?.data.data; // important with reactQuery
    } catch (err) {
      console.log(err, "error from getPosts");
      throw err.response;
    }
  }

  return (
    <GeneralContext.Provider
      value={{
        profileDefaultImage,
        postToBeUpdate,
        setpostToBeUpdate,
        commentToBeUpdate,
        setcommentToBeUpdate,
        queryFn,
        setQueryFn,
        endPointFeedPage,
        setEndPointFeedPage,
        unReadMessegsCount,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
