import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { headerObjectData } from "../helpers/headersObj";

export const GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
  const [postToBeUpdate, setpostToBeUpdate] = useState(null);
  const [commentToBeUpdate, setcommentToBeUpdate] = useState(null);
  const [queryFn, setQueryFn] = useState("coummunityPosts");
  const [endPointFeedPage, setEndPointFeedPage] = useState("posts/feed?only=all&limit=20");

  const profileDefaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg";

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
        setEndPointFeedPage
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
