import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SharedSchema } from "../../Schema/AuthSchema";
import axios from "axios";
import { headerObjectData } from "../../helpers/headersObj";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function ModelOfSharedPost({ post }) {
  const {
    body,
    _id: postID,
    image,
    user,
    createdAt: postDate,
    likesCount,
    sharesCount,
    commentsCount,
    bookmarked,
    likes,
    isShare,
  } = post;

  const { _id: creatoruserID, name, photo } = post.user;

  // Shared Post
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      body: "",
    },
    resolver: zodResolver(SharedSchema),
  });

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  async function handleShare(values, onClose) {
    console.log(values);

    try {
      const response = await axios.post(
        `https://route-posts.routemisr.com/posts/${postID}/share`,
        values,
        headerObjectData(),
      );
      console.log(response.data, "data from sahred post");
      if (response.data.success == true) {
        // navigate("/");
        queryClient.invalidateQueries(["allPosts"]);
        onClose();
        reset();
        toast.success("Post Shared Successfully!");
      }
      return response;
    } catch (err) {
      console.log(err.response.data.errors, "error from login page");
      toast.error(err.response.data.errors);
      throw err;
    }
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        variant="light"
        classNames={{
          base: `
      text-sm text-gray-500
      hover:text-blue-600
      font-medium
      transition-colors
      cursor-pointer
      py-1.5 px-3
      rounded-lg
      hover:bg-blue-50
      min-w-0 h-auto
    `,
        }}
      >
        <FaShareAlt />
        Share
      </Button>
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
              <ModalHeader className="flex flex-col gap-1">
                Share post
              </ModalHeader>
              <form>
                <ModalBody>
                  <div className="space-y-3 p-4">
                    <textarea
                      {...register("body")}
                      placeholder="Say something about this..."
                      rows={3}
                      maxLength={500}
                      className="w-full resize-none rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20"
                    />
                    {formState.errors.body && (
                      <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                        {formState.errors.body.message}
                      </p>
                    )}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <div className="flex items-center gap-2">
                        <img
                          alt={name}
                          className="h-8 w-8 rounded-full object-cover"
                          src={photo}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-slate-900">
                            {name}
                          </p>
                          <p className="truncate text-xs font-semibold text-slate-500">
                            @{name?.toLowerCase().replace(/\s/g, "")}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 whitespace-pre-wrap text-sm text-slate-800">
                        {body}
                      </p>
                      {image && (
                        <img
                          alt="post preview"
                          className="mt-2 max-h-[220px] w-full rounded-lg object-cover"
                          src={image}
                        />
                      )}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button className="font-bold" onPress={onClose}>
                    Cancel
                  </Button>

                  <Button
                    className="bg-blue-500 text-white font-bold shadow-lg shadow-indigo-500/20"
                    onPress={handleSubmit((values) =>
                      handleShare(values, onClose),
                    )}
                  >
                    Share post
                  </Button>
                  {/* <Button
                    type="submit"
                    className="bg-blue-500 text-white font-bold shadow-lg shadow-indigo-500/20"
                    // onPress={onClose}
                  >
                    Share post
                  </Button> */}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
