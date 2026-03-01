import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaRss, FaUser, FaUsers, FaBookmark } from "react-icons/fa";
import { GeneralContext } from "../../Context/GeneralContext";

export default function Sidebar() {
  const { queryFn, setQueryFn, setEndPointFeedPage } =
    useContext(GeneralContext);

  const navItems = [
    {
      to: "feedPosts",
      icon: FaRss,
      label: "Feed",
      endPoint: "posts/feed?only=following&limit=20",
    },
    {
      to: "allUserPosts",
      icon: FaUser,
      label: "My Posts",
      endPoint: "posts/feed?only=me&limit=20",
    },
    {
      to: "coummunityPosts",
      icon: FaUsers,
      label: "Community",
      endPoint: "posts/feed?only=all&limit=20",
    },
    {
      to: "savedPosts",
      icon: FaBookmark,
      label: "Saved",
      endPoint: "users/bookmarks",
    },
  ];

  return (
    <div className="sticky top-6 hidden md:block">
      <nav className="bg-white rounded-2xl shadow-sm p-3">
        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                onClick={() => {
                  setQueryFn(item.to);
                  setEndPointFeedPage(item.endPoint);
                }}
                className={() =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    queryFn === item.to
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="text-lg" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
