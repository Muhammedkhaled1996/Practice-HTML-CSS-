import { FiHome, FiSearch, FiBookmark, FiUser } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { GeneralContext } from "../../Context/GeneralContext";
import { Modal, ModalContent, ModalBody } from "@heroui/react";
import AddPost from "./../AddPost/AddPost";

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

export default function ButttomLinksMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const showNav = useScrollDirection();

  const { queryFn, setQueryFn, setEndPointFeedPage } =
    useContext(GeneralContext);

  const navItems = [
    {
      key: "feedPosts",
      icon: FiHome,
      label: "Feed",
      endPoint: "posts/feed?only=following&limit=20",
    },
    {
      key: "allUserPosts",
      icon: FiSearch,
      label: " My Posts",
      endPoint: "posts/feed?only=me&limit=20",
    },
    {
      key: "coummunityPosts",
      icon: FiBookmark,
      label: "Community",
      endPoint: "posts/feed?only=all&limit=20",
    },
    {
      key: "savedPosts",
      icon: FiUser,
      label: "Saved",
      endPoint: "users/bookmarks",
    },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed  bottom-[env(safe-area-inset-bottom)] left-1/2 -translate-x-1/2 z-50 md:hidden w-full flex justify-center px-4"
        >
          {/* Container */}
          <div className="flex items-end justify-between w-full max-w-md px-6 pb-4 rounded-3xl backdrop-blur-2xl bg-white/80  border border-gray-200 shadow-xl">
            {/* LEFT ITEMS */}
            {navItems.slice(0, 2).map((item) => (
              <NavItem
                key={item.key}
                item={item}
                queryFn={queryFn}
                setQueryFn={setQueryFn}
                setEndPointFeedPage={setEndPointFeedPage}
              />
            ))}

            {/* CENTER ADD BUTTON */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="relative -top-6 flex items-center justify-center size-14 rounded-full bg-blue-800 text-white shadow-lg shadow-blue-800/30"
              onClick={() => setIsOpen(true)}
            >
              <IoAdd size={28} />
            </motion.button>

            {/* RIGHT ITEMS */}
            {navItems.slice(2).map((item) => (
              <NavItem
                key={item.key}
                item={item}
                queryFn={queryFn}
                setQueryFn={setQueryFn}
                setEndPointFeedPage={setEndPointFeedPage}
              />
            ))}
          </div>
          <Modal
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            placement="bottom-center"
            backdrop="blur"
            hideCloseButton
            motionProps={{
              initial: { y: 300 },
              animate: { y: 0 },
              exit: { y: 300 },
              transition: { type: "spring", stiffness: 260, damping: 25 },
            }}
            classNames={{
              base: "m-0",
              wrapper: "items-end", // يخليه لازق تحت
            }}
          >
            <ModalContent className="rounded-t-3xl h-[40vh] max-h-[40vh]">
              {(onClose) => (
                <>
                  {/* Drag Handle */}
                  <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 rounded-full bg-gray-300" />
                  </div>

                  <ModalBody className="p-0 overflow-y-auto">
                    <AddPost onClose={onClose} />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================= */
/* Nav Item                      */
/* ============================= */

function NavItem({ item, queryFn, setQueryFn, setEndPointFeedPage }) {
  const Icon = item.icon;
  const isActive = queryFn === item.key;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setQueryFn(item.key);
        setEndPointFeedPage(item.endPoint);
      }}
      className="flex flex-col items-center gap-1 min-w-[50px]"
    >
      {/* Icon */}
      <div
        className={`text-xl transition-colors duration-200 ${
          isActive ? "text-blue-800" : "text-gray-400"
        }`}
      >
        <Icon />
      </div>

      {/* Label */}
      <span
        className={`text-xs font-medium transition-colors ${
          isActive ? "text-blue-800" : "text-gray-400"
        }`}
      >
        {item.label}
      </span>

      {/* Active Line */}
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
