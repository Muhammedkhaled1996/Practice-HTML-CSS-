"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  handleCashOrderSubmitAction,
  handlecheckoutSubmitAction,
} from "@/src/apiDataFetching/order/order.action";
import { checkoutSchema } from "@/src/schema/checkoutSchema";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { CrudCartResponce } from "@/src/types/cart.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaBox,
  FaBoxOpen,
  FaCheck,
  FaCreditCard,
  FaInfo,
  FaMoneyBill,
  FaShieldAlt,
  FaShoppingBag,
  FaSpinner,
  FaTruck,
  FaWallet,
} from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";

export default function CheckoutSection({
  cartResponce,
}: {
  cartResponce: CrudCartResponce;
}) {
  const [paymentMethod, setpaymentMethod] = useState<"cash" | "visa">("visa");
  const [loading, setLoading] = useState(false);

  const { setNumOfCartItems } = useCounterStore();

  const { handleSubmit, register, formState, control, reset } = useForm<any>({
    defaultValues: {
      shippingAddress: {
        city: "",
        details: "",
        phone: "",
        postalCode: "",
      },
    },
    resolver: zodResolver(checkoutSchema),
  });

  async function handleRegisterSubmit(values: any) {
    setLoading(true);
    if (paymentMethod === "cash") {
      setNumOfCartItems(0);
      const handleRegister = await handleCashOrderSubmitAction(
        values,
        cartResponce.data._id,
      );
    } else {
      setNumOfCartItems(0);
      const handleRegister = await handlecheckoutSubmitAction(
        values,
        cartResponce.data._id,
      );
    }

    reset();
    setLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
        {/* left section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaHouse />
                Shipping Address
              </h2>
              <p className="text-green-100 text-sm mt-1">
                Where should we deliver your order?
              </p>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <FaInfo />
                </div>
                <div>
                  <p className="text-sm text-blue-800 font-medium">
                    Delivery Information
                  </p>
                  <p className="text-xs text-blue-600 mt-0.5">
                    Please ensure your address is accurate for smooth delivery
                  </p>
                </div>
              </div>

              <form
                id="checkoutForm"
                onSubmit={handleSubmit(handleRegisterSubmit)}
              >
                <Controller
                  name="shippingAddress.city"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-5" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        City <span className="text-red-500">*</span>
                      </FieldLabel>
                      <Input
                        className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="e.g. Cairo, Alexandria, Giza"
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
                <Controller
                  name="shippingAddress.details"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-5" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Street Address <span className="text-red-500">*</span>
                      </FieldLabel>
                      <Textarea
                        rows={5}
                        className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Street name, building number, floor, apartment..."
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
                <Controller
                  name="shippingAddress.phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-5" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Phone Number <span className="text-red-500">*</span>
                      </FieldLabel>
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
                <Controller
                  name="shippingAddress.postalCode"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-5" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Postal Code</FieldLabel>
                      <Input
                        className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter your postal code"
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

                {/* <FaCity /> */}
                {/* <FaLocationDot /> */}
                {/*  <FaPhoneAlt /> */}
              </form>
            </div>
          </div>

          {/*  */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaWallet />
                Payment Method
              </h2>
              <p className="text-green-100 text-sm mt-1">
                Choose how you'd like to pay
              </p>
            </div>
            <div className="p-6 space-y-4">
              <button
                onClick={() => setpaymentMethod("cash")}
                type="button"
                className={` cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${paymentMethod === "cash" ? "border-green-500 bg-linear-to-r from-green-50 to-blue-50 shadow-sm" : "border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "cash" ? "bg-linear-to-br from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}
                >
                  <FaMoneyBill />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-900">Cash on Delivery</h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Pay when your order arrives at your doorstep
                  </p>
                </div>
                {paymentMethod === "cash" ? (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                    <FaCheck />
                  </div>
                ) : (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200`}
                  />
                )}
              </button>

              <button
                onClick={() => setpaymentMethod("visa")}
                type="button"
                className={`cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${paymentMethod === "visa" ? "border-green-500 bg-linear-to-r from-green-50 to-blue-50 shadow-sm" : "border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "visa" ? "bg-linear-to-br from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}
                >
                  <FaCreditCard />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-green-700">Pay Online</h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Secure payment with Credit/Debit Card via Stripe
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      alt="Visa"
                      className="h-5"
                      src="https://img.icons8.com/color/48/visa.png"
                    />
                    <img
                      alt="Mastercard"
                      className="h-5"
                      src="https://img.icons8.com/color/48/mastercard.png"
                    />
                    <img
                      alt="Amex"
                      className="h-5"
                      src="https://img.icons8.com/color/48/amex.png"
                    />
                  </div>
                </div>

                {paymentMethod === "visa" ? (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                    <FaCheck />
                  </div>
                ) : (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${paymentMethod === "cash" ? "" : "border-2 border-gray-200"}`}
                  />
                )}
              </button>

              <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Secure &amp; Encrypted
                  </p>
                  <p className="text-xs text-green-600 mt-0.5">
                    Your payment info is protected with 256-bit SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaShoppingBag />
                Order Summary
              </h2>
              <p className="text-green-100 text-sm mt-1">
                {cartResponce.data.products.length} items
              </p>
            </div>
            <div className="p-5">
              <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                {cartResponce?.data &&
                  cartResponce.data.products.map((product) => (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                        <Image
                          alt={product.product.slug}
                          className="w-full h-full object-contain"
                          src={product.product.imageCover}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {product.product.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {product.count} × {product.price} EGP
                        </p>
                      </div>
                      <p className="text-sm font-bold text-gray-900 shrink-0">
                        {product.count * product.price}
                      </p>
                    </div>
                  ))}
              </div>
              <hr className="border-gray-100 my-4" />
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    {cartResponce.data.totalCartPrice} EGP
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-2">
                    <FaTruck />
                    Shipping
                  </span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">
                      {cartResponce.data.totalCartPrice}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">EGP</span>
                  </div>
                </div>
              </div>

              {/* submit buttom */}
              <button
                form="checkoutForm"
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98] cursor-pointer"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Loading...
                  </>
                ) : paymentMethod === "cash" ? (
                  <>
                    <FaBox />
                    Place Order
                  </>
                ) : (
                  <>
                    <FaShieldAlt />
                    Proceed to Payment
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaShieldAlt />
                  <span>Secure</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaTruck />
                  <span>Fast Delivery</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaBoxOpen />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
