"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
  updateUserDataHandler,
  UserData,
} from "@/src/apiDataFetching/authontication/updateUserData";
import {
  Decoded,
  verifyTokenHandler,
} from "@/src/apiDataFetching/authontication/VerifyToken";
import { userDataSchema } from "@/src/schema/userDataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaFloppyDisk } from "react-icons/fa6";
import { toast } from "sonner";

export default function UserDataForm() {
  const [loading, setloading] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: async () => {
      const data = await verifyTokenHandler();
      return {
        name: data?.decoded.name || "",
        email: "",
        phone: "",
      };
    },
    resolver: zodResolver(userDataSchema),
  });

  async function handleUserDataSubmit(values: UserData) {
    setloading(true);
    try {
      const handleUserData = await updateUserDataHandler(values);

      if (handleUserData?.message === "success") {
        toast.success("Your data updated successfully, Please Login in again");
        reset();
        setTimeout(() => {
          signOut();
        }, 3000);
      } else {
        toast.error("Error in updating data");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error from server");
    } finally {
      setloading(false);
    }
  }

  const [userData, setuserData] = useState<Decoded | null>(null);

  async function getUserData() {
    const userDataResponce = await verifyTokenHandler();
    setuserData(userDataResponce as Decoded | null);
  }

  useEffect(() => {
    if (userData) {
      reset({
        name: userData.name,
        email: "",
        phone: "",
      });
    } else {
      reset({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [userData, reset]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit(handleUserDataSubmit)}>
        {/* name */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="my-5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Name"
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
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
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
        {/* phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="my-5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
              <Input
                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="01×××××××××"
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
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="flex items-center justify-center gap-2">
                  <Spinner />
                  <span>Saveing... </span>
                </div>
              </>
            ) : (
              <>
                <FaFloppyDisk />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
