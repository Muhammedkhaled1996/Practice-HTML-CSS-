import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../Schema/AuthSchema";
import { Spinner } from "flowbite-react";
import { AuthContext } from "../../Context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(AuthContext);


  const { register, handleSubmit, formState } =
    useForm({
      mode: "onSubmit",
      reValidateMode: "onChange",
      defaultValues: {
        name: "",
        username: "",
        email: "",
        password: "",
        rePassword: "",
        dateOfBirth: "",
        gender: "",
      },
      resolver: zodResolver(RegisterSchema), // to connect zod validation to hook-forms
    });

  // call api to signup
  async function handleRegister(values) {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://route-posts.routemisr.com/users/signup",
        values,
      );
      console.log(response.data.data , "data from register page");
      if (response.data.success == true) {
        localStorage.setItem("token", response.data.data.token);
        setToken(response.data.data.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data.errors , "error from register page");
      setApiError(err.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <title>Social Media - Register</title>

      <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-center items-center w-full min-h-screen relative font-main p-4 py-12 lg:p-0">
        <div className="w-full md:w-5/6 lg:w-120 min-h-120 bg-red-200 relative z-10 flex justify-center items-center flex-col bg-[url(/background.jpeg)] bg-cover bg-center bg-no-repeat shadow-lg rounded-xl translate-y-2 lg:translate-y-0">
          <div className="text-center bg-white/30 backdrop-blur-sm p-8 rounded-2xl">
            <p className="text-2xl font-bold mb-1">Welcome Back!</p>
            <p className="text-2xl font-bold ">Register Now</p>
            <p className="text-2xl font-bold my-4">OR</p>
            <Link
              to={"/login"}
              className="bg-blue-900 px-6 py-3 text-white rounded-lg font-bold hover:bg-red-600! duration-300 translate-all shadow-md inline-block"
            >
              Login Now
            </Link>
          </div>
        </div>
        <div className="text-center shadow-lg bg-white w-full md:w-5/6 lg:w-120 min-h-96 lg:min-h-max px-6 py-8 rounded-xl z-20 flex flex-col justify-center items-center gap-5 lg:-translate-x-12 -translate-y-2.5 lg:translate-y-0 relative">
          <h1 className="font-bold text-4xl">Register Now</h1>
          {apiError && (
            <p className="bg-red-900 text-white font-bold p-2 m-5 rounded-sm w-full mx-auto ">
              {apiError}
            </p>
          )}
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="mx-auto w-full"
          >
            {/* name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("name")}
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.name && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.name.message}
                </p>
              )}
              <label
                htmlFor="name"
                className="absolute start-1 top-3 text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Full Name
              </label>
            </div>
            {/* username */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("username")}
                type="text"
                id="username"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.username && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.username.message}
                </p>
              )}
              <label
                htmlFor="username"
                className="absolute start-1 top-3 text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Username
              </label>
            </div>
            {/* email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("email")}
                type="email"
                id="email"
                autoComplete=""
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
                Email address
              </label>
            </div>
            {/* password */}
            <div className="relative z-0 w-full mb-5 group">
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
                Password
              </label>
            </div>
            {/* repassword */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("rePassword")}
                type="password"
                id="repassword"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.rePassword && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.rePassword.message}
                </p>
              )}
              <label
                htmlFor="repassword"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Confirm password
              </label>
            </div>
            {/* dateOfBirth */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("dateOfBirth")}
                type="date"
                id="dateOfBirth"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
              />
              {formState.errors.dateOfBirth && (
                <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                  {formState.errors.dateOfBirth.message}
                </p>
              )}
              <label
                htmlFor="dateOfBirth"
                className="absolute start-1 top-3  text-sm text-body duration-300 transform -translate-y-6 scale-75 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Birthday
              </label>
            </div>
            {/* gender */}
            <div className="flex gap-2">
              <div className="flex items-center mb-4">
                <input
                  {...register("gender")}
                  id="male"
                  type="radio"
                  name="gender"
                  defaultValue="male"
                  className="w-4 h-4 accent-blue-800"
                  defaultChecked
                />
                {formState.errors.gender && (
                  <p className="absolute -bottom-4 right-0 text-red-600 text-start text-[10px] font-bold mt-1">
                    {formState.errors.gender.message}
                  </p>
                )}
                <label
                  htmlFor="male"
                  className="select-none ms-2 text-sm font-medium text-heading"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  {...register("gender")}
                  id="female"
                  type="radio"
                  name="gender"
                  defaultValue="female"
                  className="w-4 h-4 accent-blue-800"
                />
                <label
                  htmlFor="female"
                  className="select-none ms-2 text-sm font-medium text-heading"
                >
                  Female
                </label>
              </div>
            </div>
            {/* submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-900 hover:bg-blue-600 duration-300 transition-all rounded-lg cursor-pointer text-white px-6 py-3 disabled:bg-gray-500 font-bold text-sm shadow-md"
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
                  <p>Register Now</p>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
