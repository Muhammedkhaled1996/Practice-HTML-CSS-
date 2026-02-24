import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddPost from "../../components/AddPost/AddPost";
import SuggestedFriends from "../../components/SuggestedFriends/SuggestedFriends";

export default function FeedPage() {
  return (
    <>
      <title>Social Media - Feed</title>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* Main Feed */}
        <main className="min-w-0 flex flex-col">
          <AddPost />
          <div>
            <Outlet />
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
