"use client";
import React from "react";
import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaTrash } from "react-icons/fa";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { toast } from "sonner";

export default function DeleteItemDialog({
  productId,
  setLoading,
}: {
  productId: string;
  setLoading: (loading: boolean) => void;
}) {
  const { deleteItemFromCart } = useCounterStore();

  // delete item from cart
  async function deleteItem(productId: string) {
    setLoading(true);
    try {
      const data = await deleteItemFromCart(productId);

      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("error in Deleting Product from server");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200 cursor-pointer"
            title="Remove item"
          >
            <FaTrash className="text-sm" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete item?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this item from your cart.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline" className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteItem(productId)}
              variant="destructive"
              className="cursor-pointer"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
