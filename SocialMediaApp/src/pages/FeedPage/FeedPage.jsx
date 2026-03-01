import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddPost from "../../components/AddPost/AddPost";
import SuggestedFriends from "../../components/SuggestedFriends/SuggestedFriends";
import HomeFeed from "./../../components/HomeFeed/HomeFeed";
import { GeneralContext } from "../../Context/GeneralContext";
import ButttomLinksMobile from "../../components/ButttomLinksMobile/ButttomLinksMobile";

export default function FeedPage() {
  const { endPointFeedPage } = useContext(GeneralContext);
  return (
    <>
      <title>Social Media - Feed</title>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-6 -mt-6 md:mt-0">
        {/* Left Sidebar */}
        <aside>
          <Sidebar />
          <ButttomLinksMobile />
        </aside>

        {/* Main Feed */}
        <main className="min-w-0 flex flex-col">
          <AddPost />
          <div>
            <HomeFeed endPointFeedPage={endPointFeedPage} />
          </div>
        </main>

        {/* Right Panel */}
        <aside className="hidden lg:block">
          <SuggestedFriends />
        </aside>
      </div>
    </>
  );
}
