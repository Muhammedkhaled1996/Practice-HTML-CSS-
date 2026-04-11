"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import {
  addAddressAction,
  deleteUserAddress,
  valuesType,
} from "@/src/apiDataFetching/address/address.actions";
import { addAddressSchema } from "@/src/schema/addAddressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function DialogDemo({
  open,
  setOpen,
  addressData,
}: {
  open?: boolean;
  setOpen?: (val: boolean) => void;
  addressData?: any;
}) {
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(addAddressSchema),
  });

  // submit (Add / Edit)
  async function handleSubmitForm(values: valuesType) {
    if (loading) return;

    try {
      setLoading(true);

      let response;

      if (addressData) {
        response = await deleteUserAddress(addressData._id);
        if (response?.status === "success") {
          response = await addAddressAction(values);
        }
      } else {
        response = await addAddressAction(values);
      }

      if (response?.status === "success") {
        toast.success(
          addressData ? "Updated successfully" : "Added successfully",
          {
            position: "top-right",
            duration: 2000,
            richColors: true,
          },
        );

        reset();
        setOpen?.(false);
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          duration: 2000,
          richColors: true,
        });
      }
    } catch (error) {
      toast.error("Error occurred", {
        position: "top-right",
        duration: 2000,
        richColors: true,
      });
    } finally {
      setLoading(false);
    }
  }

  // fill data for edit
  useEffect(() => {
    if (addressData) {
      reset({
        name: addressData.name,
        details: addressData.details,
        phone: addressData.phone,
        city: addressData.city,
      });
    } else {
      reset({
        name: "",
        details: "",
        phone: "",
        city: "",
      });
    }
  }, [addressData, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {addressData ? "Edit Address" : "Add New Address"}
            </DialogTitle>
          </DialogHeader>

          <FieldGroup className="my-4">
            {/* name */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Address Name</FieldLabel>
                  <Input {...field} placeholder="Home, Office..." />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* details */}
            <Controller
              name="details"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Full Address</FieldLabel>
                  <Textarea {...field} rows={3} />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-2 gap-3">
              {/* phone */}
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Phone</FieldLabel>
                    <Input {...field} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* city */}
              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>City</FieldLabel>
                    <Input {...field} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>

          <DialogFooter className="flex gap-4">
            <DialogClose asChild>
              <button className="w-full py-2 rounded-lg hover:bg-gray-200">
                Cancel
              </button>
            </DialogClose>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg ${
                loading
                  ? "bg-green-300"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner />
                  Saving...
                </div>
              ) : addressData ? (
                "Update"
              ) : (
                "Save"
              )}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
