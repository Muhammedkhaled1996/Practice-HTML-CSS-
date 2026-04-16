import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const SendContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^01[0-9]{9}$/, "Invalid Egyptian phone number"),
  message: z.string().min(30, "Message must be at least 30 characters"),
});

export default function Contact() {
  const handleWhatsApp = () =>
    window.open(`https://wa.me/201002165352`, "_blank");

  const form = useRef<HTMLFormElement>(null);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(SendContactSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any) => {
    if (!form.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_ffuq4k4",
        "template_ivpsa0e",
        form.current,
        "zawaZRIGzLeIJethB",
      );

      toast.success("Your message has been sent 🚀");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-black uppercase tracking-[0.3em]"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4"
          >
            Ready to <span className="text-orange-500">Collaborate?</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* 1. Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: <Mail className="text-orange-500" />,
                label: "Email Me",
                value: "MuhammedKhaled25@gmail.com",
                action: () =>
                  (window.location.href = "mailto:muhammedkhaled25@gmail.com"),
                color: "bg-orange-500/10",
              },
              {
                icon: <FaWhatsapp size={24} className="text-orange-500" />,
                label: "WhatsApp",
                value: "+20 100 216 5352",
                action: handleWhatsApp,
                color: "bg-orange-500/10",
              },
              {
                icon: <MapPin className="text-blue-500" />,
                label: "Location",
                value: "Cairo, Egypt",
                color: "bg-blue-500/10",
              },
            ].map((item, i) => (
              <div
                onClick={item.action}
                className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl "
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 2. Modern Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-3 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-6 md:-top-6 right-0 p-8 opacity-5 dark:opacity-10">
              <MessageSquare
                size={30}
                className="text-slate-900 dark:text-white"
              />
            </div>

            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center w-full"
            >
              {/* هيدن انبت عشان الـ Subject {{title}} اللى فى الصورة يوصل صح */}
              <input type="hidden" name="title" value="New Contact Message" />{" "}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />{" "}
              {/* name */}
              <div className="md:col-span-1">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-1" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                      <Input
                        className="focus-within:ring-orange-100! focus-within:border-orange-600! transition-all duration-200"
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
              </div>
              {/* phone */}
              <div className="md:col-span-1">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-1" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                      <Input
                        className="focus-within:ring-orange-100! focus-within:border-orange-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="01×× ××× ××××"
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
              </div>
              {/* email */}
              <div className="col-span-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-1" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Email Address
                      </FieldLabel>
                      <Input
                        className="focus-within:ring-orange-100! focus-within:border-orange-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Email"
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
              </div>
              {/* message */}
              <div className="col-span-2">
                <Controller
                  name="message"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field className="my-1" data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Your Message</FieldLabel>
                      <Textarea
                        rows={3}
                        className="focus-within:ring-orange-100! focus-within:border-orange-600! transition-all duration-200"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Tell me about your Dream..."
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
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`cursor-pointer md:col-span-2 w-full py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                  loading
                    ? "bg-orange-400 cursor-not-allowed opacity-80"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
              {/* <div className="space-y-2 md:col-span-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Email
                </label>
                <input
                  name="email" // طابقناه مع {{email}} فى صورتك
                  required
                  type="email"
                  placeholder="muhammed@example.com"
                  className="mt-3 w-full px-6 py-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-300 focus:border-orange-500/50 focus:ring-4 ring-orange-500/5 text-slate-900 dark:text-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Your Message
                </label>
                <textarea
                  name="message" // طابقناه مع {{message}} فى صورتك
                  required
                  rows={4}
                  placeholder="Tell me about your Dream..."
                  className="mt-3 w-full px-6 py-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-300 focus:border-orange-500/50 focus:ring-4 ring-orange-500/5 text-slate-900 dark:text-white outline-none transition-all resize-none"
                />
              </div> */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
