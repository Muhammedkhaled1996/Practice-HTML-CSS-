import React from "react";
import Link from "next/link";
import {
  FaBoxOpen,
  FaTruck,
  FaRoute,
  FaCheckCircle,
  FaQuestionCircle,
  FaArrowLeft,
  FaEnvelope,
  FaHeadset,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";

export default function TrackOrderStepsPage() {
  const trackingSteps = [
    {
      icon: <FaBoxOpen className="w-6 h-6 text-green-500" />,
      title: "Order Confirmed",
      description:
        "We have received your order and it is being prepared for shipment.",
    },
    {
      icon: <FaTruck className="w-6 h-6 text-green-500" />,
      title: "Shipped",
      description:
        "Your order has been shipped and is on its way to the carrier.",
    },
    {
      icon: <FaRoute className="w-6 h-6 text-green-500" />,
      title: "In Transit",
      description:
        "The package is on the way and tracking updates are being provided.",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-green-500" />,
      title: "Out for Delivery",
      description: "Your order is out for delivery and will arrive soon.",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-green-500" />,
      title: "Delivered",
      description: "Your order has been delivered. Enjoy your purchase!",
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
              current="Track Order Help"
                            linkClassName="hover:text-white"

            />
          </div>
          <div className="flex  items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              <FaTruck className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Track Your Order
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                Follow the steps below to understand how your order moves from
                processing to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Steps Accordion */}
      <div className=" mx-auto px-4 pt-12">
        <Accordion type="single" collapsible className="space-y-4 container">
          {trackingSteps.map((step, idx) => (
            <AccordionItem
              key={idx}
              value={`step-${idx}`}
              className="border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="flex items-center gap-3 p-4 rounded-3xl hover:bg-green-50">
                {step.icon}
                <span className="text-gray-900 font-semibold text-lg">
                  {step.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-600 leading-relaxed">
                {step.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Support / Contact Section */}
        <div className="container mt-12 pt-8 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need more help?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our support team for any order tracking issues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:support@freshcart.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200"
            >
              <FaEnvelope /> Contact Support
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all duration-200"
            >
              <FaArrowLeft /> Back to Home
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
