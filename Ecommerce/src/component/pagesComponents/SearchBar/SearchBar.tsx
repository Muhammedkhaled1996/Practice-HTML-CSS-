"use client";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";

type FormValues = {
  searchValue: string;
};

export default function SearchBar() {
  const router = useRouter();

  const { handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(values: FormValues) {
    if (!values.searchValue.trim()) return;

    router.push(`/search?q=${values.searchValue}`);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Field className="hidden md:block">
        <InputGroup className="rounded-full focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
          <InputGroupInput
            placeholder="Search for product, brands and more..."
            {...register("searchValue")}
          />

          <InputGroupAddon align="inline-end" className="cursor-pointer">
            <button
              type="submit"
              className="flex items-center justify-center rounded-full bg-green-600 text-white size-6 hover:bg-green-700 duration-300 transition-colors"
            >
              <IoSearchSharp />
            </button>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  );
}
