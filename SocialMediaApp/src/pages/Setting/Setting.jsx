import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordChangeSchema } from "../../Schema/AuthSchema";
import { FaArrowLeft, FaDoorOpen } from "react-icons/fa";
import { Button, Spinner } from "flowbite-react";
import { IoKeyOutline } from "react-icons/io5";
import { headerObjectData } from "../../helpers/headersObj";
import axios from "axios";

export default function Setting() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(AuthContext);

  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(PasswordChangeSchema), // to connect zod validation to hook-forms
  });

  async function handleLogin(values) {
    console.log(values);

    const data = {
      password: values.password,
      newPassword: values.newPassword,
    };

    setIsLoading(true);
    try {
      const response = await axios.patch(
        "https://route-posts.routemisr.com/users/change-password",
        data,
        headerObjectData(),
      );
      console.log(response.data.data, "data from login page");
      if (response.data.success == true) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.data.token);
        setToken(response.data.data.token);
        navigate("/login");
      }
    } catch (err) {
      console.log(err.response.data.errors, "error from login page");
      setApiError(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <title>Setting</title>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 text-center shadow-lg bg-white rounded-xl z-20 p-4 w-full md:w-5/6 lg:w-1/2">
          <Button
            as={Link}
            to={"/"}
            size="sm"
            className="flex self-start gap-2 mb-3 -mt-2 bg-gray-400 cursor-pointer w-fit hover:bg-gray-600"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Button>
          <div className="flex gap-3 items-center justify-start w-full">
            <div className="text-2xl p-3 bg-blue-600/20 rounded-full  flex items-center justify-center text-blue-600 font-bold">
              <IoKeyOutline />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-extrabold text-xl">Change Password</h1>
              <p className="text-gray-400 text-sm">
                Keep your account secure by using a strong password.
              </p>
            </div>
          </div>

          {apiError && (
            <p className="bg-red-900 text-white font-bold p-2 m-5 rounded-sm w-full mx-auto ">
              {apiError}
            </p>
          )}

          <form onSubmit={handleSubmit(handleLogin)} className="mx-auto w-full">
            {/* Current password */}
            <div className="relative z-0 w-full my-5 group">
              <input
                {...register("password")}
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.password && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.password.message}
                </p>
              )}
              <label
                htmlFor="password"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter current password
              </label>
            </div>
            {/* New password */}
            <div className="relative z-0 w-full my-5 group">
              <input
                {...register("newPassword")}
                type="password"
                id="newPassword"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.newPassword && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.newPassword.message}
                </p>
              )}
              <label
                htmlFor="newPassword"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter new password
              </label>
            </div>

            {/*  confirm password */}
            <div className="relative z-0 w-full my-5 group">
              <input
                {...register("confirmNewPassword")}
                type="password"
                id="confirmNewPassword"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.confirmNewPassword && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.confirmNewPassword.message}
                </p>
              )}
              <label
                htmlFor="confirmNewPassword"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Re-enter new password
              </label>
            </div>

            {/* submit */}

            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-900 hover:bg-red-700 duration-300 transition-all rounded-lg cursor-pointer text-white px-4 py-2.5 disabled:bg-gray-500 font-bold text-sm "
            >
              {isLoading ? (
                <div>
                  <Spinner
                    className="me-2"
                    aria-label="Spinner button example"
                    size="sm"
                    light
                  />
                  Loading ...
                </div>
              ) : (
                <div className="flex justify-center items-center gap-3">
                  <FaDoorOpen className="text-lg" />
                  <p>LOG IN</p>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
