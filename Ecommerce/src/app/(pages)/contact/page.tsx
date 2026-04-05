"use client";
import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeadset,
  FaPaperPlane,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function Page() {
  const items = [
    { label: "General Inquiry", value: "General Inquiry" },
    { label: "Order Support", value: "Order Support" },
    { label: "Shiping Question", value: "Shiping Question" },
    { label: "Returns & Refunds", value: "Returns & Refunds" },
    { label: "Product Information", value: "Product Information" },
    { label: "Feedbacks & Suggestions", value: "Feedbacks & Suggestions" },
    { label: "Others", value: "Others" },
  ];

  return (
    <>
      {/* Header */}
      <div className="green-gradiant text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Contact Us"
              linkClassName="hover:text-white"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
              <FaHeadset className="text-4xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-white/80 mt-2">
                We&apos;d love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="card flex gap-4 items-start shadow p-3 rounded-xl ">
              <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
                <a
                  href="tel:+18001234567"
                  className="text-green-600 font-semibold w-full"
                >
                  +1 (800) 123-4567
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="card flex gap-4 items-start shadow p-3 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-sm text-gray-500 w-full">
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="text-green-600 font-semibold w-full"
                >
                  support@freshcart.com
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="card flex gap-4 items-start shadow p-3 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold">Office</h3>
                <p className="text-sm text-gray-500 w-full">
                  123 Commerce Street New York, NY 10001 United States
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card flex gap-4 items-start shadow p-3 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center shrink-0">
                <FaClock />
              </div>
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p className="text-sm text-gray-500">
                  Monday - Friday: 8am - 6pm <br />
                  Saturday: 9am - 4pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="card flex-col items-start">
              <h3 className="font-bold mb-3">Follow Us</h3>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition">
                  <FaFacebookF />
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition">
                  <FaTwitter />
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition">
                  <FaInstagram />
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                  <FaHeadset />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Send us a Message</h2>
                  <p className="text-sm text-gray-500">
                    Fill out the form and we&apos;ll get back to you
                  </p>
                </div>
              </div>

              {/* FORM */}
              <form>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email Address" />
                  </div>

                  <Select onValueChange={(value) => console.log(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Subject</SelectLabel>
                        {items.map((item) => (
                          // لازم كل value غير فارغ
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Textarea
                    className="input h-32 resize-none"
                    placeholder="How can we help you?"
                  />

                  <Button className="bg-green-600 text-white cursor-pointer flex items-center gap-2">
                    <FaPaperPlane />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Help Box */}
            <div className="mt-6 bg-green-50 border border-green-100 rounded-3xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center">
                ?
              </div>

              <div>
                <p className="font-semibold">Looking for quick answers?</p>
                <p className="text-sm text-gray-500">
                  Check out our Help Center for frequently asked questions.
                </p>

                <Link
                  href="/help"
                  className="text-green-600 text-sm font-semibold"
                >
                  Visit Help Center →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LowerInstractions />
    </>
  );
}
