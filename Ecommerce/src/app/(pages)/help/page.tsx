import React from "react";
import Link from "next/link";
import {
  FaQuestionCircle,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaArrowRotateLeft } from "react-icons/fa6";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function HelpPage() {
  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with tracking information. You can also track your order in your account dashboard under 'My Orders'.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 14-day return policy for most products. Items must be unused and in their original packaging. Some restrictions apply for certain categories.",
    },
    {
      question: "How do I request a refund?",
      answer:
        "To request a refund, contact our support team with your order number and reason for return. Refunds are processed within 5-7 business days after receiving the returned item.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently, we only ship within Egypt. International shipping may be supported in the future.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team via email at support@freshcart.com or through the 24/7 live chat on our website.",
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
              current="Help"
              linkClassName="hover:text-white"
            />
          </div>
          <div className="flex items-start gap-6">
            <div className=" shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaQuestionCircle className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Help & FAQ
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Find answers to the most common questions and get support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with Accordion */}
      <div className=" mx-auto px-4 pt-12">
        <Accordion type="single" collapsible className="space-y-4 container">
          {faqs.map((faq, index) => (
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
        <div className="container mt-12 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            If your question is not listed, feel free to reach out to our
            support team.
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

        {/* Features Section */}
        <LowerInstractions />
      </div>
    </>
  );
}
