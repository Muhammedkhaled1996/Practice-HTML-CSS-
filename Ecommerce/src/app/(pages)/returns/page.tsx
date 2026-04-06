import React from "react";
import Link from "next/link";
import {
  FaUndoAlt,
  FaQuestionCircle,
  FaArrowLeft,
  FaEnvelope,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function ReturnsRefundsPage() {
  const returnsFaqs = [
    {
      question: "What is the return policy?",
      answer:
        "We offer a 14-day return policy for most products. Items must be unused, in original packaging, and accompanied by a receipt or proof of purchase. Some items, such as perishable goods, are not eligible for return.",
    },
    {
      question: "How do I initiate a return?",
      answer:
        "You can initiate a return by contacting our support team via email at support@freshcart.com with your order number and reason for return, or through your account dashboard under 'My Orders'.",
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Once we receive your returned item, refunds are processed within 5-7 business days. The refund will be issued using the original payment method.",
    },
    {
      question: "Are there any fees for returns?",
      answer:
        "Returns are free for defective or incorrect items. For other returns, a small handling or shipping fee may apply depending on the order.",
    },
    {
      question: "Can I exchange an item?",
      answer:
        "Yes, exchanges are possible depending on stock availability. Contact our support team to arrange an exchange.",
    },
    {
      question: "What should I do if my refund is delayed?",
      answer:
        "If your refund has not been received within 7 business days, please contact our support team for assistance. Include your order number and details of the returned item.",
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
              current="Returns & Refunds"
              linkClassName="hover:text-white"
            />
          </div>
          <div className="flex items-center gap-6">
          <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaUndoAlt className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Returns & Refunds
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Everything you need to know about returning products and getting
                refunds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className=" mx-auto px-4 pt-12">
        <Accordion type="single" collapsible className="space-y-4 container">
          {returnsFaqs.map((faq, index) => (
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
            Contact our support team for any returns or refund inquiries.
          </p>
          <div className="flex justify-between sm:flex-row items-center gap-4 my-4">
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
      <LowerInstractions />
    </>
  );
}
