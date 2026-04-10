"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
import { VerifyPassword } from "@/src/apiDataFetching/forgetPassword/forgetPassword.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheck, FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import { FaArrowLeftLong, FaShieldHalved } from "react-icons/fa6";
import { toast } from "sonner";
import z from "zod";

export default function ForgetPasswordSecondPage({
  setView,
}: {
  setView: any;
}) {
  const [loading, setloading] = useState(false);

  const verifyPasswordSchema = z.object({
    resetCode: z.string().nonempty("Reset code is required")
  });

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(verifyPasswordSchema),
  });

  async function handleVerifingCodeSubmit(values: { resetCode: string }) {
    setloading(true);
    try {
      const handlePasswordResponce = await VerifyPassword(values.resetCode);

      if (handlePasswordResponce?.status === "Success") {
        toast.success("Please Enter Your Email and New Password");
        reset();
        setTimeout(() => {
          setView("third");
        }, 2000);
      } else {
        toast.error("Error in Verifying Code");
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
                  Check Your Email
                </h1>
                <p className="text-gray-600">
                  Enter the 6-digit code sent to muhammedkhaled25@gmail.com
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
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
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
                onSubmit={handleSubmit(handleVerifingCodeSubmit)}
              >
                <div>
                  <div className="relative">
                    <Controller
                      name="resetCode"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          className="my-5"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldLabel htmlFor={field.name}>
                            Verification Code
                          </FieldLabel>

                          <div className="relative w-full border border-gray-200 py-1 rounded-lg flex  justify-center items-center">
                            <div>
                              <InputOTP
                                maxLength={6}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="•"
                                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                              >
                                <InputOTPGroup>
                                  <InputOTPSlot index={0} />
                                  <InputOTPSlot index={1} />
                                  <InputOTPSlot index={2} />
                                </InputOTPGroup>

                                <InputOTPSeparator />

                                <InputOTPGroup>
                                  <InputOTPSlot index={3} />
                                  <InputOTPSlot index={4} />
                                  <InputOTPSlot index={5} />
                                </InputOTPGroup>
                              </InputOTP>
                            </div>

                            <FaShieldHalved className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
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
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Didn't receive the code?{" "}
                    <button
                      type="button"
                      className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      Resend Code
                    </button>
                  </p>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="cursor-pointer w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex justify-center items-center gap-2">
                      <Spinner />
                      <span>Verifying Code...</span>
                    </div>
                  ) : (
                    " Verify Code"
                  )}
                </button>
                <div className="text-center">
                  <button
                    onClick={() => setView("first")}
                    type="button"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 font-medium transition-colors"
                  >
                    <FaArrowLeftLong className="text-xs" />
                    Change email address
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
