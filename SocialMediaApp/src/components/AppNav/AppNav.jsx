import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import {
  FaHome,
  FaUser,
  FaBell,
  FaBars,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import usePost from "../../CustomHooks/usePost";
import { GeneralContext } from "../../Context/GeneralContext";

export default function AppNav() {
  const { token, setToken, userData } = useContext(AuthContext);
  const { unReadMessegsCount } = useContext(GeneralContext);
  const { name, email, photo } = userData || {};
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function signOut() {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  }

  const navLinks = [
    { to: "/", icon: FaHome, label: "Feed" },
    { to: "/profile", icon: FaUser, label: "Profile" },
    {
      to: "/notifications",
      icon: FaBell,
      label: "Notifications",
      badge: unReadMessegsCount?.unreadCount || "",
    },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left — Logo / Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="px-2 py-3 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md">
              ROUTE
            </div>
            <span className="font-bold text-gray-900 text-lg hidden sm:block">
              Route Posts
            </span>
          </Link>

          {/* Center — Nav Links */}
          {token && (
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  <link.icon className="text-base" />
                  <span className="hidden md:block">{link.label}</span>
                  {link.badge && (
                    <span className="absolute -top-1 right-0 bg-red-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          )}

          {/* Right — User Avatar + Dropdown */}
          {token ? (
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-xl px-2 py-1.5 transition-colors"
                >
                  <img
                    src={
                      photo ||
                      "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff"
                    }
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {name}
                  </span>
                  <FaBars className="text-gray-400 text-lg" />
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 min-w-[200px]">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {email}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <FaUser className="text-gray-400" /> Profile
                      </Link>
                      <Link
                        to="/setting"
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <FaUser className="text-gray-400" /> Setting
                      </Link>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={() => {
                            setShowDropdown(false);
                            signOut();
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <FaSignOutAlt /> Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {token && showMobileMenu && (
          <div className="md:hidden border-t border-gray-100 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setShowMobileMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <link.icon />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-red-500 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center ml-auto">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
