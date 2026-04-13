import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productsDetails } from "@/types/allOrders.interface";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const columns: ColumnDef<productsDetails>[] = [
  {
    accessorKey: "_id",
    header: "ID",
    size: 150,
  },
  {
    accessorKey: "title",
    header: "Product",
    cell: (info) => (
      <p className="h-10 overflow-x-auto">{info.getValue() as string}</p>
    ),
    size: 500,
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorFn: (row) => row.category?.name ?? "-",
    id: "category",
    header: "Category",
    size: 150,
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorFn: (row) => row.brand?.name ?? "-",
    id: "brand",
    header: "Brand",
    size: 150,
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (info) => `${info.getValue()} EGP`,
    size: 100,
  },
  {
    accessorKey: "priceAfterDiscount",
    header: "After Discount",
    cell: (info) => (info.getValue() != null ? `${info.getValue()} EGP` : "-"),
    size: 100,
  },
  {
    accessorKey: "quantity",
    header: "Stock",
    cell: (info) => {
      const value = info.getValue() as number;

      return (
        <span
          className={`px-2 py-1 rounded text-xs ${
            value > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {value > 0 ? "In Stock" : "Out"}
        </span>
      );
    },
    size: 100,
  },
  {
    accessorKey: "ratingsAverage",
    header: "Rating",
    size: 50,
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: (info) => {
      const value = info.getValue() as string;
      return value ? new Date(value).toLocaleDateString() : "-";
    },
    size: 50,
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorKey: "imageCover",
    header: "Image",
    cell: (info) => (
      <Image
        src={info.getValue() as string}
        alt="product"
        width={20}
        height={20}
        className="rounded-md object-cover"
      />
    ),
    size: 100,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                console.log("Edit", product._id);
              }}
            >
              ✏️ Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                console.log("Delete", product._id);
              }}
              className="text-red-500"
            >
              🗑 Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    size: 50,
  },
];
