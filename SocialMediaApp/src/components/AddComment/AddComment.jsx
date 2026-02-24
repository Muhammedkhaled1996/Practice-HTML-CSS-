import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { headerObjectData } from "../../helpers/headersObj";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";
import { FaImage, FaPaperPlane, FaSmile } from "react-icons/fa";
import { Spinner } from "@heroui/spinner";
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";
import { GeneralContext } from "../../Context/GeneralContext";

export default function AddComment({ postID }) {
  const { userData } = useContext(AuthContext);
  const { setcommentToBeUpdate, commentToBeUpdate } =
    useContext(GeneralContext);

  const { name, photo } = userData || {};

  // add comment logic here
  async function addComment(values) {
    const formData = new FormData();
    formData.append("content", values.content);
    if (values.image && values.image[0]) {
      formData.append("image", values.image[0]);
    }
    const response = await axios.post(
      `https://route-posts.routemisr.com/posts/${postID}/comments`,
      formData,
      headerObjectData(),
    );
    reset();
    setPreview(null);
    return response;
  }

  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, watch, setValue, getValues } = useForm(
    {
      defaultValues: {
        content: "",
        image: null,
      },
    },
  );

  const selectedImage = watch("image");
  console.log(selectedImage?.[0] || null, "selectedImage");

  const [preview, setPreview] = useState(null);

  const { mutate, isPending } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["postComments", postID]);
      toast.success("Comment added successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  useEffect(() => {
    if (selectedImage && selectedImage[0] instanceof File) {
      const url = URL.createObjectURL(selectedImage[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    // 2. لو القيمة عبارة عن String (جاية من postToBeUpdate أثناء التعديل)
    else if (typeof selectedImage === "string") {
      setPreview(selectedImage);
    }
    // 3. لو مفيش صورة خالص
    else {
      setPreview(null);
    }
  }, [selectedImage]);

  const { mutate: updateCommentMutate, isPending: isUpdatePending } =
    useMutation({
      mutationFn: updateComment,
      onSuccess: () => {
        queryClient.invalidateQueries(["postComments", postID]);
        toast.success("Comment Updated Successfully");
      },
      onError: (error) => {
        toast.error(
          error.response?.data?.message || "Error in Updating Comment",
        );
      },
    });

  async function updateComment() {
    const values = getValues();
    const formData = new FormData();
    formData.append("content", values.content);
    if (values.image && values.image[0] instanceof File) {
      formData.append("image", values.image[0]);
    }

    const { data } = await axios.put(
      `https://route-posts.routemisr.com/posts/${postID}/comments/${commentToBeUpdate._id}`,
      formData,
      headerObjectData(),
    );
    console.log(data, "Update Comment");
    reset();
    setPreview(null);
    setcommentToBeUpdate(null);
  }

  function cancelUpdate() {
    reset();
    setPreview(null);
    setcommentToBeUpdate(null);
  }
  useEffect(() => {
    if (commentToBeUpdate) {
      setValue("content", commentToBeUpdate.content);
      setValue("image", commentToBeUpdate.image);
    }
  }, [commentToBeUpdate]);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-2 w-full mt-2">
      <form onSubmit={handleSubmit(mutate)}>
        <div className="flex items-center gap-2">
          {/* User avatar + textarea */}
          <div className="flex items-start gap-3">
            <img
              src={
                photo ||
                "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff"
              }
              alt={name}
              className="size-11 rounded-full object-cover"
            />
          </div>

          <textarea
            {...register("content")}
            placeholder={`Comment as, ${name}....`}
            rows={2}
            className="w-full mt-3 px-3 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-gray-400"
          />
        </div>

        {preview && (
          <div className="relative mt-3 w-32 h-32 rounded-lg overflow-hidden border border-gray-200 group ms-14">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => reset({ ...watch(), image: null })}
              className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <IoIosCloseCircle />
            </button>
          </div>
        )}

        {/* File input hidden */}
        <input
          type="file"
          id={`comment-image-${postID}`}
          {...register("image")}
          className="hidden"
        />

        {/* Divider */}
        <div className="border-t border-gray-100 mt-2">
          <div className="flex items-center justify-between">
            {/* Action buttons */}
            <div className="flex items-center gap-6">
              <label
                htmlFor={`comment-image-${postID}`}
                className="flex items-center gap-2 text-lg text-gray-500 hover:text-blue-600 cursor-pointer transition-colors border border-transparent hover:border-gray-300 p-2 rounded-sm hover:bg-gray-100"
              >
                <FaImage className="text-green-500" />
              </label>
              <button
                type="button"
                className="flex items-center gap-2 text-lg text-gray-500 hover:text-blue-600 transition-colors  border border-transparent hover:border-gray-300 p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
              >
                <FaSmile className="text-amber-500" />
              </button>
            </div>

            {/* Post button */}
            {!commentToBeUpdate && (
              <button
                type="submit"
                disabled={isPending}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold size-6 rounded-sm flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed justify-center"
              >
                {isPending ? (
                  <Spinner color="white" size="sm" />
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            )}

            {/* Edit button */}
            {commentToBeUpdate && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={cancelUpdate}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 text-sm  rounded-sm flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed justify-center"
                >
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  disabled={isUpdatePending}
                  onClick={updateCommentMutate}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 text-sm  rounded-sm flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed justify-center"
                >
                  {isUpdatePending ? (
                    <>
                      <span>Updating...</span>
                      <Spinner size="sm" color="white" />
                    </>
                  ) : (
                    <>
                      <span>Update</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
