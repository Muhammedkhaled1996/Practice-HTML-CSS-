"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { RxSlash } from "react-icons/rx";
import clsx from "clsx";

type BreadcrumbItemType = {
  label: string;
  href: string;
  icon?: React.ReactNode; // 👈 icon اختياري
};

type Props = {
  items: BreadcrumbItemType[];
  current: string;

  className?: string; // 👈 للـ wrapper
  itemClassName?: string; // 👈 لكل item
  linkClassName?: string; // 👈 للـ link
  currentClassName?: string; // 👈 للـ current
  separatorClassName?: string; // 👈 للـ slash
};

export default function AppBreadcrumb({
  items,
  current,
  className,
  itemClassName,
  linkClassName,
  currentClassName,
  separatorClassName,
}: Props) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={index} className={clsx("flex items-center font-semibold", itemClassName)}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 text-gray-300 ",
                    linkClassName,
                  )}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <RxSlash
              className={clsx("mx-2 text-gray-300", separatorClassName)}
            />
          </div>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage
            className={clsx(
              "text-white flex items-center gap-1 max-w-100 min-w-0",
              currentClassName,
            )}
          >
            <span className="truncate block font-semibold">{current}</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
