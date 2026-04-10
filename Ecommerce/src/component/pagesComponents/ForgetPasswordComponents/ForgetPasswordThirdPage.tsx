"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { UpdatePassword } from "@/src/apiDataFetching/forgetPassword/forgetPassword.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaCheck,
  FaEnvelope,
  FaEye,
  FaKey,
  FaLock,
  FaRegEye,
} from "react-icons/fa";
import { FaArrowLeftLong, FaShieldHalved } from "react-icons/fa6";
import { toast } from "sonner";
import z from "zod";

export default function ForgetPasswordThirdPage({
  setView,
  email,
}: {
  setView: any;
  email: any;
}) {
  const [loading, setloading] = useState(false);

  const updatePasswordSchema = z
    .object({
      newPassword: z.string().nonempty("New Password Required"),
      confirmPassword: z.string().nonempty("Confirm Password Required"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(updatePasswordSchema),
  });

  async function handleUpdatePasswordSubmit(values: { newPassword: string }) {
    setloading(true);
    try {
      const handleUpdatePasswordResponce = await UpdatePassword({
        email: email,
        newPassword: values.newPassword,
      });

      if (handleUpdatePasswordResponce.token) {
        toast.success("Password Changed Successfully");
        setTimeout(() => {
          toast.success("Please login again");
          redirect("/login");
        }, 2000);
      } else {
        toast.error("Error in Updating Password");
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
      <div
        className="container py-16 mx-auto px-4"
        id="forgot-password-section"
      >
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
                  Create New Password
                </h1>
                <p className="text-gray-600">
                  Your new password must be different from previous passwords
                </p>
              </div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white">
                    <FaCheck />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-green-600" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white">
                    <FaCheck />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-green-600" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
                    <FaLock className="text-xs" />
                  </div>
                </div>
              </div>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(handleUpdatePasswordSubmit)}
              >
                <div>
                  <div className="relative">
                    <Controller
                      name="newPassword"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          className="my-5"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldLabel htmlFor={field.name}>
                            New Password
                          </FieldLabel>

                          <div className="relative">
                            <Input
                              className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200 pl-12"
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="Please Enter Your New Password"
                              autoComplete="off"
                              type="password"
                            />
                            <FaLock className="absolute top-1/2 left-5 -translate-1/2 text-gray-400 text-2xl" />
                            <button
                              type="button"
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              <FaRegEye />
                            </button>
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
                    <Controller
                      name="confirmPassword"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          className="my-5"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldLabel htmlFor={field.name}>
                            Confirm Password
                          </FieldLabel>

                          <div className="relative">
                            <Input
                              className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200 pl-12"
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="Confirm New Password"
                              autoComplete="off"
                              type="password"
                            />
                            <FaLock className="absolute top-1/2 left-5 -translate-1/2 text-gray-400 text-2xl" />
                            <button
                              type="button"
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              <FaRegEye />
                            </button>
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
                      <span>Updating...</span>
                    </div>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
