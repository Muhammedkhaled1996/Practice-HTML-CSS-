import { FiHome, FiSearch, FiBookmark, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { GeneralContext } from "../../Context/GeneralContext";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

/* ============================= */
/* Scroll Direction Hook         */
/* ============================= */

function useScrollDirection() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
}

/* ============================= */
/* Main Component                */
/* ============================= */

export default function ButttomLinksMobile() {
  const showNav = useScrollDirection();
  const navigate = useNavigate();

  const { setQueryFn, setEndPointFeedPage, unReadMessegsCount } =
    useContext(GeneralContext);

  const [activeTab, setActiveTab] = useState("coummunityPosts");

  const navItems = [
    {
      key: "feedPosts",
      icon: FiHome,
      label: "Feed",
      endPoint: "posts/feed?only=following&limit=20",
      type: "feed",
    },
    {
      key: "allUserPosts",
      icon: FiSearch,
      label: "My Posts",
      endPoint: "posts/feed?only=me&limit=20",
      type: "feed",
    },
    {
      key: "coummunityPosts",
      icon: FiBookmark,
      label: "Community",
      endPoint: "posts/feed?only=all&limit=20",
      type: "center",
    },
    {
      key: "profile",
      icon: FiUser,
      label: "Profile",
      type: "route",
      path: "/profile",
    },
    {
      key: "notifications",
      icon: FaBell,
      label: "Notifications",
      type: "route",
      path: "/notifications",
      badge: unReadMessegsCount?.unreadCount || "",
    },
  ];

  /* ============================= */
  /* Click Handler                 */
  /* ============================= */

  const handleNavClick = (item) => {
    setActiveTab(item.key);

    // feed buttons
    if (item.type === "feed" || item.type === "center") {
      setQueryFn(item.key);
      setEndPointFeedPage(item.endPoint);
      navigate("/");
    }

    // route buttons
    if (item.type === "route") {
      navigate(item.path);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-[env(safe-area-inset-bottom)] left-1/2 -translate-x-1/2 z-50 md:hidden w-full flex justify-center px-4"
        >
          <div className="flex items-end justify-between w-full max-w-md px-6 pb-4 rounded-3xl backdrop-blur-2xl bg-white/80 border border-gray-200 shadow-xl">
            {/* LEFT */}
            {navItems.slice(0, 2).map((item) => (
              <NavItem
                key={item.key}
                item={item}
                badge={item.badge}
                isActive={activeTab === item.key}
                onClick={() => handleNavClick(item)}
              />
            ))}

            {/* CENTER BUTTON */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => handleNavClick(navItems[2])}
              className={`relative -top-6 flex items-center justify-center size-14 rounded-full text-white shadow-lg transition-all
              ${
                activeTab === "coummunityPosts"
                  ? "bg-blue-900 shadow-blue-900/40"
                  : "bg-blue-800 shadow-blue-800/30"
              }`}
            >
              <FiHome size={26} />
            </motion.button>

            {/* RIGHT */}
            {navItems.slice(3).map((item) => (
              <NavItem
                key={item.key}
                item={item}
                badge={item.badge}
                isActive={activeTab === item.key}
                onClick={() => handleNavClick(item)}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================= */
/* Nav Item                      */
/* ============================= */

function NavItem({ item, isActive, onClick, badge }) {
  const Icon = item.icon;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex flex-col items-center gap-1 min-w-[50px] relative"
    >
      {/* ICON WRAPPER */}
      <div className="relative">
        <div
          className={`text-xl transition-colors duration-200 ${
            isActive ? "text-blue-800" : "text-gray-400"
          }`}
        >
          <Icon />
        </div>

        {/* BADGE */}
        {badge ? (
          <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold">
            {badge}
          </span>
        ) : null}
      </div>

      <span
        className={`text-xs font-medium transition-colors ${
          isActive ? "text-blue-800" : "text-gray-400"
        }`}
      >
        {item.label}
      </span>

      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="activeLine"
            className="h-[3px] w-6 rounded-full bg-blue-800 mt-1"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ originX: 0.5 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
