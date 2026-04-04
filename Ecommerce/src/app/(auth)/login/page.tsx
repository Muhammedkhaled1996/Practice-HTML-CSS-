"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { loginSchema } from "@/src/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import {
  handleLoginSubmitAction,
  loginFormValues,
} from "@/src/apiDataFetching/authontication/signin";
import Image from "next/image";
import freshCartPic from "@/src/assets/images/freshcartpic.png";
import {
  FaFacebook,
  FaGoogle,
  FaLock,
  FaRegEnvelope,
  FaStar,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { signIn } from "next-auth/react";
import LowerInstractions from "../../../component/publicComponents/LowerInstractions/LowerInstractions";

export default function page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, register, formState, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLoginSubmit(values: loginFormValues) {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.ok) {
        toast.success("Login successful", {
          position: "top-right",
          duration: 2000,
          richColors: true,
        });
        router.push("/");
      } else {
        toast.error(result?.error || "Login failed", {
          position: "top-right",
          duration: 2000,
          richColors: true,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container justify-center items-center my-4">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <Image
            src={freshCartPic}
            alt="FreshCart picture"
            width={300}
            height={450}
            className="border border-black w-[85%] h-75 object-cover rounded-2xl shadow"
          />
          <h1 className="font-bold text-xl">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h1>
          <span className="text-[12px] text-gray-500 font-medium">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs
          </span>
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-2">
              <FaTruck className="text-green-600 text-sm" />
              <span className="text-[12px] text-gray-400">Free Delivery</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaTruck className="text-green-600 text-sm" />
              <span className="text-[12px] text-gray-400">Secure Payment</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaTruck className="text-green-600 text-sm" />
              <span className="text-[12px] text-gray-400">24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadowlg rounded-2xl max-w-6xl mx-auto p-5 my-5 w-full text-center">
          <h1 className="text-3xl text-center font-bold mb-2">
            <span className="text-green-600">Fresh</span>Cart
          </h1>
          <p className="font-bold mb-1">Welcome Back!</p>
          <span className="text-gray-400 text-sm mb-4">
            Sign in to continue your fresh shopping experience
          </span>

          <Button
            className="mb-3 cursor-pointer hover:bg-green-300/30 hover:border-green-400 text-gray-700"
            variant={"outline"}
          >
            <FaGoogle className="text-red-500 me-2" />
            <span>Continue with Google</span>
          </Button>
          <Button
            className="mb-3 cursor-pointer hover:bg-green-300/30 hover:border-green-400 text-gray-700"
            variant={"outline"}
          >
            <FaFacebook className="text-blue-500 me-2" />
            <span>Continue with Facebook</span>
          </Button>
          <p className="my-4 text-gray-500 text-[12px] relative flex items-center justify-center before:content-[''] before:flex-1 before:border-t before:border-gray-300 before:mr-3 after:content-[''] after:flex-1 after:border-t after:border-gray-300 after:ml-3">
            OR CONTINUE WITH EMAIL
          </p>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            {/* email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="my-5" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email your email</FieldLabel>
                  <InputGroup className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Email Address"
                      autoComplete="off"
                    />
                    <InputGroupAddon align="inline-start">
                      <FaRegEnvelope />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError
                      className="text-start"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
            {/* password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="my-5" data-invalid={fieldState.invalid}>
                  <div className="flex justify-between items-center">
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Link
                      href={"/forget-password"}
                      className="text-green-600 text-[12px]"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <InputGroup className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                    <InputGroupAddon align="inline-start">
                      <FaLock />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError
                      className="text-start"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
            <FieldGroup>
              <Field orientation="horizontal" className="mb-3">
                <input
                  type="checkbox"
                  id="terms-checkbox-basic"
                  className="accent-green-600 size-4"
                />
                <FieldLabel htmlFor="terms-checkbox-basic" className="text-sm">
                  Keep me signed in
                </FieldLabel>
              </Field>
            </FieldGroup>

            <button
              type="submit"
              disabled={loading}
              className={`text-white rounded-xl font-semibold py-2 bg-green-700 hover:bg-green-800 duration-200 transition-colors cursor-pointer w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <div className="my-5 font-medium">
            <p>
              New to FreshCart?{" "}
              <Link
                href={"/register"}
                className="text-green-600 cursor-pointer"
              >
                Create an account
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-2">
              <FaLock className="text-gray-600 text-sm" />
              <span className="text-[12px] text-gray-400">SSL Secured</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaUsers className="text-gray-600 text-sm" />
              <span className="text-[12px] text-gray-400">50K+ Users</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaStar className="text-gray-600 text-sm" />
              <span className="text-[12px] text-gray-400">4.9 Rating</span>
            </div>
          </div>
        </div>
      </div>

      <LowerInstractions />
    </>
  );
}
