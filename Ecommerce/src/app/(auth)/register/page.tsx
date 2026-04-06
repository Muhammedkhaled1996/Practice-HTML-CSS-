"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/src/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import {
  handleRegisterSubmitAction,
  registerFormValues,
} from "@/src/apiDataFetching/authontication/signup";
import {
  FaFacebook,
  FaGoogle,
  FaShieldAlt,
  FaShippingFast,
  FaStar,
  FaTruck,
  FaUserPlus,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import personReviwer from "@/src/assets/images/review-author.webp";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function RegisterPage() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  async function handleRegisterSubmit(values: registerFormValues) {
    const handleRegister = await handleRegisterSubmitAction(values);

    if (handleRegister === "success") {
      toast.success("Registered Successfully", {
        position: "top-right",
        duration: 2000,
        richColors: true,
      });
      setTimeout(() => {
        redirect("/login");
      }, 3000);
    } else {
      toast.error(handleRegister, {
        position: "top-right",
        duration: 2000,
        richColors: true,
      });
    }
  }

  return (
    <>
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container justify-center items-center my-4">
          <div className="flex flex-col gap-2 p-4">
            <h1 className="font-bold text-gray-700 text-4xl mb-2">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h1>

            <span className=" text-gray-500 font-medium mb-3">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </span>

            <div className="flex flex-col items-start gap-5">
              <div className="flex justify-center items-center gap-2">
                <div className="text-green-600 bg-green-400/30 rounded-full flex justify-center items-center size-10 text-lg">
                  <FaTruck />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Premium Quality</p>
                  <span className="text-[12px] text-gray-400">
                    Premium quality products sourced from trusted suppliers.
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="text-green-600 bg-green-400/30 rounded-full flex justify-center items-center size-10 text-lg">
                  <FaShippingFast />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Fast Delivery</p>
                  <span className="text-[12px] text-gray-400">
                    Same-day delivery available in most areas
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="text-green-600 bg-green-400/30 rounded-full flex justify-center items-center size-10 text-lg">
                  <FaShieldAlt />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Secure Shopping</p>
                  <span className="text-[12px] text-gray-400">
                    Your data and payments are completely secure
                  </span>
                </div>
              </div>
            </div>

            <div className="review bg-white shadow-sm p-4 rounded-md my-4">
              <div className="author flex items-center gap-4 mb-4">
                <Image
                  src={personReviwer}
                  alt="person picture"
                  width={512}
                  height={512}
                  className="size-12 rounded-full"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="text-yellow-300 flex items-center justify-center gap-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                &quot;FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-col shadow-xl rounded-2xl max-w-6xl mx-auto p-5 my-5 w-full text-center">
            <h1 className="font-bold mb-1 text-3xl">
              Create Your Account
            </h1>
            <span className="text-gray-400 text-sm mb-4">
              Start your fresh journey with us today
            </span>

            <div className="flex w-full justify-stretch items-center gap-3">
              <Button
                className="grow mb-3 cursor-pointer hover:bg-green-300/30 hover:border-green-400 text-gray-700"
                variant={"outline"}
              >
                <FaGoogle className="text-red-500 me-2" />
                <span>Continue with Google</span>
              </Button>
              <Button
                className="grow mb-3 cursor-pointer hover:bg-green-300/30 hover:border-green-400 text-gray-700"
                variant={"outline"}
              >
                <FaFacebook className="text-blue-500 me-2" />
                <span>Continue with Facebook</span>
              </Button>
            </div>
            <p className="my-4 text-gray-500 text-[12px] relative flex items-center justify-center before:content-[''] before:flex-1 before:border-t before:border-gray-300 before:mr-3 after:content-[''] after:flex-1 after:border-t after:border-gray-300 after:ml-3">
              OR
            </p>
            <form onSubmit={handleSubmit(handleRegisterSubmit)}>
              {/* name */}
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="my-5" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>User Name</FieldLabel>
                    <Input
                      className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter UserName"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className="text-start"
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* email */}
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="my-5" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Email Address"
                      autoComplete="off"
                    />
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
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter password"
                      autoComplete="off"
                      type="password"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className="text-start"
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* rePassword */}
              <Controller
                name="rePassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="my-5" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Confirm Password
                    </FieldLabel>
                    <Input
                      className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Confirm password"
                      autoComplete="off"
                      type="password"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className="text-start"
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* phone */}
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="my-5" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Enter phone</FieldLabel>
                    <Input
                      className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Phone"
                      autoComplete="off"
                    />
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
                  <FieldLabel
                    htmlFor="terms-checkbox-basic"
                    className="text-sm"
                  >
                    I agree to the
                    <span className="text-green-500">
                      <Link href="/terms">Terms of Service</Link>
                    </span>{" "}
                    and{" "}
                    <span className="text-green-500">
                      <Link href="/privacy">Privacy Policy</Link>
                    </span>
                    *
                  </FieldLabel>
                </Field>
              </FieldGroup>

              <button className="text-white rounded-xl font-semibold py-2 bg-green-700 hover:bg-green-800 duration-200 transition-colors cursor-pointer w-full flex justify-center items-center gap-3">
                <FaUserPlus className="text-lg" />
                <span> Create My Account</span>
              </button>
            </form>
            <div className="my-5 font-medium">
              <p>
                Already have an account?{" "}
                <Link href={"/login"} className="text-green-600 cursor-pointer">
                  Sign In{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>

         <LowerInstractions/>
      </>
    </>
  );
}
