"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
  updateUserDataHandler,
  UserData,
} from "@/src/apiDataFetching/authontication/updateUserData";
import {
  passwordValues,
  updateUserPasswordHandler,
} from "@/src/apiDataFetching/authontication/updateUserPassword";
import {
  Decoded,
  verifyTokenHandler,
} from "@/src/apiDataFetching/authontication/VerifyToken";
import { userPasswordSchema } from "@/src/schema/userPasswordFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";
import { toast } from "sonner";

export default function UserPasswordForm() {
  const [loading, setloading] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: async () => {
      const data = await verifyTokenHandler();
      return {
        currentPassword: "",
        password: "",
        rePassword: "",
      };
    },
    resolver: zodResolver(userPasswordSchema),
  });

  const router = useRouter();

  async function handleUserPasswordSubmit(values: passwordValues) {
    setloading(true);
    try {
      const handlePasswordResponce = await updateUserPasswordHandler(values);

      if (handlePasswordResponce?.message === "success") {
        toast.success("Password Changed Successfully");
        reset();
        setTimeout(() => {
          signOut();
        }, 3000);
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
      <form
        className="space-y-5"
        onSubmit={handleSubmit(handleUserPasswordSubmit)}
      >
        {/* Current Password */}
        <Controller
          name="currentPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="my-5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Current Password</FieldLabel>
              <Input
                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Current Password"
                autoComplete="off"
                type="text"
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
        {/* New Password */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="my-5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>New Passwor</FieldLabel>
              <Input
                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter New Password"
                autoComplete="off"
                type="text"
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
        {/* Confirm New Password */}
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="my-5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm New Password</FieldLabel>
              <Input
                className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Confirm New Password"
                autoComplete="off"
                type="text"
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
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25 disabled:cursor-not-allowed"
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
                <FaLock />
                Change Password
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
