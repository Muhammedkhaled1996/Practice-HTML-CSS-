import React, { useContext, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { AiOutlineLike } from "react-icons/ai";
import useInfinitePosts from "../../CustomHooks/useInfinitePosts";
import { useInView } from "react-intersection-observer";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function LikesPersons({ post }) {
  const { _id: postId } = post;
  const { userData } = useContext(AuthContext);
  const { id: loginUserId } = userData;

  // get likes function
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts(["likes", postId], true, `posts/${postId}/likes?limit=20`);

  const likes = data?.pages?.flatMap((page) => page?.data?.likes || []) ?? [];

  console.log(likes, "likes");

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="text-sm text-gray-500 font-medium transition-colors cursor-pointer hover:text-blue-500 hover:underline"
      >
        Likes
      </button>
      <Modal
        backdrop="opaque"
        size="xl"
        classNames={{
          body: "p-1",
          backdrop: "bg-black/50 backdrop-opacity-40",
          base: "border-black bg-black dark:bg-black text-[#a8b0d3]",
          header: "border-b-[1px] border-black",
          footer: "border-t-[1px] border-black",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
        className="bg-white text-black m-2"
        placement={"center"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-1">
                <AiOutlineLike className="text-xl" />
                People who reacted
              </ModalHeader>

              <ModalBody>
                <div className="space-y-3 p-4">
                  {likes.map((person) => (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <Link
                        Link
                        to={`/profile${loginUserId === person._id ? "" : `/${person._id}`}`}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            alt={person?.name}
                            className="h-8 w-8 rounded-full object-cover"
                            src={person?.photo}
                          />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-900">
                              {person?.name}
                            </p>
                            {person?.username && (
                              <p className="truncate text-xs font-semibold text-slate-500">
                                @
                                {person?.name?.toLowerCase().replace(/\s/g, "")}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
