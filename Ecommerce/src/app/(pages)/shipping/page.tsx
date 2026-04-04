import React from "react";
import Link from "next/link";
import {
  FaTruck,
  FaQuestionCircle,
  FaArrowLeft,
  FaHeadset,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // تأكد المسار صحيح
import { FaArrowRotateLeft } from "react-icons/fa6";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function ShippingInfoPage() {
  const shippingFaqs = [
    {
      question: "What are the shipping options?",
      answer:
        "We offer standard, express, and same-day delivery options depending on your location. Standard shipping typically takes 3-5 business days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "After your order is shipped, you will receive a tracking number via email. You can also track your order from your account dashboard under 'My Orders'.",
    },
    {
      question: "Are there any shipping fees?",
      answer:
        "Shipping is free for orders over 500 EGP. For orders below 500 EGP, a flat shipping fee may apply depending on your location.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently, we only ship within Egypt. International shipping may be available in the future.",
    },
    {
      question: "What should I do if my shipment is delayed?",
      answer:
        "If your order is delayed, please contact our support team at support@freshcart.com. We will investigate and provide updates as soon as possible.",
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer:
        "You can update your shipping address within 1 hour of placing your order by contacting our support team. After that, the order may already be in processing.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="green-gradiant text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="my-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Shipping Info"
              linkClassName="hover:text-white"
            />
          </div>
          <div className="flex  items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaTruck className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Shipping Information
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Learn about our shipping options, tracking, and policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping FAQs */}
      <div className="mx-auto px-4 pt-12">
        <Accordion type="single" collapsible className="space-y-4 container">
          {shippingFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="flex items-center gap-3 p-4 text-gray-900 font-semibold text-lg rounded-3xl hover:bg-green-50">
                <FaQuestionCircle className="text-green-500 w-6 h-6 shrink-0" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Support / Contact Section */}
        <div className="container mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need more help?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our support team for any shipping-related inquiries.
          </p>
          <div className="flex justify-between sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all duration-200"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <Link
              href="mailto:support@freshcart.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200"
            >
              <FaEnvelope /> Contact Support
            </Link>
          </div>
        </div>
      </div>
      {/* Features Section */}

      <div className="mt-4">
        <LowerInstractions />
      </div>
    </>
  );
}
