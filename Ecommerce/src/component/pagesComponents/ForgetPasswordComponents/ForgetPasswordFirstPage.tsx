"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ForgetPassword } from "@/src/apiDataFetching/forgetPassword/forgetPassword.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import { FaArrowLeftLong, FaShieldHalved } from "react-icons/fa6";
import { toast } from "sonner";
import z from "zod";

export default function ForgetPasswordFirstPage({
  setView,
  setEmail,
}: {
  setView: any;
  setEmail: any;
}) {
  const [loading, setloading] = useState(false);

  const forgetPasswordSchema = z.object({
    email: z.string().nonempty("Email is required").email("Invalid email"),
  });

  const { handleSubmit, control, reset } = useForm({
    defaultValues: async () => {
      return {
        email: "",
      };
    },
    resolver: zodResolver(forgetPasswordSchema),
  });

  async function handleForgetPasswordSubmit(values: { email: string }) {
    setloading(true);
    try {
      const handlePasswordResponce = await ForgetPassword(values.email);

      if (handlePasswordResponce?.statusMsg === "success") {
        toast.success("Please Check Your Email");
        setEmail(values.email);
        reset();
        setTimeout(() => {
          setView("second");
        }, 2000);
      } else {
        toast.error("Error in Changing Password");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error from server");
    } finally {
      setloading(false);
    }
  }

  return (
    <>
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <div className="w-full h-96 bg-linear-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50" />
                <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
                <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
                <div className="relative flex flex-col items-center gap-6 z-10">
                  <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                      <FaLock className="text-green-600 text-4xl" />
                    </div>
                  </div>
                  <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                    <FaEnvelope className="text-green-500 text-xl" />
                  </div>
                  <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                    <FaShieldHalved className="text-green-500 text-xl" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]" />
                    <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  Reset Your Password
                </h2>
                <p className="text-lg text-gray-600">
                  Don't worry, it happens to the best of us. We'll help you get
                  back into your account in no time.
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaEnvelope className="text-green-600 mr-2" />
                    Email Verification
                  </div>
                  <div className="flex items-center">
                    <FaShieldHalved className="text-green-600 mr-2" />
                    Secure Reset
                  </div>
                  <div className="flex items-center">
                    <FaLock className="text-green-600 mr-2" />
                    Encrypted
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600">
                  No worries, we'll send you a reset code
                </p>
              </div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <FaKey className="text-xs" />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <FaLock className="text-xs" />
                  </div>
                </div>
              </div>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(handleForgetPasswordSubmit)}
              >
                <div>
                  <div className="relative">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          className="my-5"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldLabel htmlFor={field.name}>
                            Email Address
                          </FieldLabel>

                          <div className="relative">
                            <Input
                              className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200 pl-12"
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="Please Enter Your Email"
                              autoComplete="off"
                            />
                            <FaEnvelope className="absolute top-1/2 left-5 -translate-1/2 text-gray-400 text-2xl" />
                          </div>

                          {fieldState.invalid && (
                            <FieldError
                              className="text-start"
                              errors={[fieldState.error]}
                            />
                          )}
                        </Field>
                      )}
                    />
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="cursor-pointer w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex justify-center items-center gap-2">
                      <Spinner />
                      <span>Sending Reset Code...</span>
                    </div>
                  ) : (
                    <span>Send Reset Code</span>
                  )}
                </button>
                <div className="text-center">
                  <Link
                    className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                    href="/login"
                  >
                    <FaArrowLeftLong className=" text-xs" />
                    Back to Sign In
                  </Link>
                </div>
              </form>
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  Remember your password?{/* */}{" "}
                  <Link
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
