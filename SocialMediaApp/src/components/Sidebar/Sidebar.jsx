import React from "react";
import { NavLink } from "react-router-dom";
import { FaRss, FaUser, FaUsers, FaBookmark } from "react-icons/fa";

const navItems = [
  { to: "/feed", icon: FaRss, label: "Feed" },
  { to: "/posts", icon: FaUser, label: "My Posts" },
  { to: "/", icon: FaUsers, label: "Community" },
  { to: "saved", icon: FaBookmark, label: "Saved" },
];

export default function Sidebar() {
  return (
    <div className="sticky top-6">
      <nav className="bg-white rounded-2xl shadow-sm p-3">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
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
