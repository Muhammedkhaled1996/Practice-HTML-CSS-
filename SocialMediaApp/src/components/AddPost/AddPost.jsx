import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaImage, FaSmile, FaPaperPlane } from "react-icons/fa";
import { headerObjectData } from "./../../helpers/headersObj";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import { IoIosCloseCircle } from "react-icons/io";
import { GeneralContext } from "../../Context/GeneralContext";
import { image } from "@heroui/react";

export default function AddPost() {
  const { userData } = useContext(AuthContext);
  const { postToBeUpdate, setpostToBeUpdate } = useContext(GeneralContext);
  const { name, photo } = userData || {};

  const { register, handleSubmit, reset, watch, setValue, getValues } = useForm(
    {
      defaultValues: {
        body: "",
        image: null,
      },
    },
  );

  async function addPost(values) {
    const formData = new FormData();
    formData.append("body", values.body);
    if (values.image && values.image[0]) {
      formData.append("image", values.image[0]);
    }
    const response = await axios.post(
      "https://route-posts.routemisr.com/posts",
      formData,
      headerObjectData(),
    );
    reset();
    setPreview(null);
  }

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["allPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      toast.success("Post Added Successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Error in Adding Post");
    },
  });

  const selectedImage = watch("image");
  console.log(selectedImage?.[0] || null, "selectedImage");

  const [preview, setPreview] = useState(null);

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

  console.log(postToBeUpdate, "postToBeUpdate from add post");

  const { mutate: updatePostMutate, isPending: isUpdatePending } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["allPosts"]);
      queryClient.invalidateQueries(["allUserPosts"]);
      toast.success("Post Updated Successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Error in Updating Post");
    },
  });

  async function updatePost() {
    const values = getValues();
    const formData = new FormData();
    formData.append("body", values.body);
    if (values.image && values.image[0] instanceof File) {
      formData.append("image", values.image[0]);
    }

    const { data } = await axios.put(
      `https://route-posts.routemisr.com/posts/${postToBeUpdate._id}`,
      formData,
      headerObjectData(),
    );
    console.log(data, "Update Post");
    reset();
    setPreview(null);
    setpostToBeUpdate(null);
  }

  function cancelUpdate() {
    reset();
    setPreview(null);
    setpostToBeUpdate(null);
  }

  useEffect(() => {
    if (postToBeUpdate) {
      setValue("body", postToBeUpdate.body);
      setValue("image", postToBeUpdate.image);
    }
  }, [postToBeUpdate]);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
      <form onSubmit={handleSubmit(mutate)}>
        {/* User avatar + textarea */}
        <div className="flex items-start gap-3">
          <img
            src={
              photo ||
              "https://ui-avatars.com/api/?name=U&background=3b82f6&color=fff"
            }
            alt={name}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-gray-900 mb-1">{name}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                🌐 Public <span className="text-[10px]">▾</span>
              </span>
            </div>
          </div>
        </div>

        <textarea
          {...register("body")}
          placeholder={`What's on your mind, ${name || "user"}?`}
          rows={3}
          className="w-full mt-3 px-3 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-gray-400"
        />

        {/* File input hidden */}
        <input
          type="file"
          id="image"
          {...register("image")}
          className="hidden"
        />

        {/* Divider */}
        <div className="border-t border-gray-100 mt-3 ">
          {preview && (
            <div className="relative my-3 h-50 rounded-lg overflow-hidden border border-gray-200 group">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => reset({ ...watch(), image: null })}
                className="absolute top-1 right-1 p-1 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <IoIosCloseCircle className="text-2xl text-gray-700 bg-white rounded-full" />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between -mb-2 mt-2">
            {/* Action buttons */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="image"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors"
              >
                <FaImage className="text-green-500" />
                <span className="font-medium">Photo/video</span>
              </label>
              <button
                type="button"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaSmile className="text-amber-500" />
                <span className="font-medium">Feeling/activity</span>
              </button>
            </div>

            {/* Add button */}
            {!postToBeUpdate && (
              <button
                type="submit"
                disabled={isPending}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <span>Posting...</span>
                ) : (
                  <>
                    <span>Post</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            )}

            {/* Edit button */}
            {postToBeUpdate && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={cancelUpdate}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  disabled={isUpdatePending}
                  onClick={updatePostMutate}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isUpdatePending ? (
                    <>
                      <span>Updating...</span>
                      <FaPaperPlane className="text-xs" />
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
