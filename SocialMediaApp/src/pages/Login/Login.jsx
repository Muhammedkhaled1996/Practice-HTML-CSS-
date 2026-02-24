import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schema/AuthSchema";
import { Spinner } from "flowbite-react";
import { AuthContext } from "../../Context/AuthContext";
import { FaDoorOpen } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(AuthContext);

  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema), // to connect zod validation to hook-forms
  });

  async function handleLogin(values) {
    console.log(values);

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://route-posts.routemisr.com/users/signin",
        values,
      );
      console.log(response.data.data, "data from login page");
      if (response.data.success == true) {
        localStorage.setItem("token", response.data.data.token);
        setToken(response.data.data.token);
        navigate("/");
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
      <title>Social Media - Login</title>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full min-h-screen relative font-main p-4 py-10 lg:p-0">
        <div className="text-center shadow-lg bg-white w-full md:w-5/6 lg:w-96 min-h-96 px-6 rounded-xl z-20 flex flex-col justify-center items-center gap-5 translate-y-4 lg:translate-y-0 relative">
          <h1 className="font-bold text-3xl">Login</h1>
          {apiError && (
            <p className="bg-red-900 text-white font-bold p-2 m-5 rounded-sm w-full mx-auto ">
              {apiError}
            </p>
          )}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="max-w-md mx-auto w-full"
          >
            {/* email */}
            <div className="relative z-0 w-full my-5 group">
              <input
                {...register("email")}
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.email && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.email.message}
                </p>
              )}
              <label
                htmlFor="email"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter Your Email
              </label>
            </div>
            {/* password */}
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
                Enter Your Password
              </label>
            </div>
            <div className="flex justify-between items-center my-8">
              <div className="flex justify-center items-center gap-3">
                <input
                  type="checkbox"
                  id="remeber"
                  className="accent-blue-900 text-sm"
                />
                <label
                  htmlFor="remeber"
                  className="text-gray-600 text-sm font-semibold"
                >
                  Remember Me
                </label>
              </div>
              <p className="underline text-sm cursor-pointer text-blue-800 ">
                Forget Password?
              </p>
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
        <div className="w-full md:w-5/6 lg:w-120 h-120 lg:h-auto lg:min-h-120 bg-red-200 relative z-10 flex justify-center items-center flex-col bg-[url(background.jpeg)] bg-cover bg-center bg-no-repeat shadow-lg rounded-xl lg:-translate-x-12 -translate-y-2.5 lg:translate-y-0 ">
          <div className="text-center bg-white/30 backdrop-blur-sm p-8 rounded-2xl">
            <p className="text-2xl font-bold mb-1">Welcome Back!</p>
            <p className="text-2xl font-bold ">Sign in to continue</p>
            <p className="text-2xl font-bold my-4">OR</p>
            <Link
              to={"/register"}
              className="bg-blue-900 px-6 py-3 text-white rounded-lg font-bold hover:bg-red-600! duration-300 translate-all shadow-md inline-block"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
