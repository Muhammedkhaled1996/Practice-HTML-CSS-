"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaFilter } from "react-icons/fa";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
import { AllBrandsResponce } from "@/src/types/brands.interface";
import { allCategoriesResponce } from "@/src/types/allCategories.interface";
import { useMemo } from "react";

export function DrawerScrollableContent({
  brands,
  categories,
}: {
  brands: AllBrandsResponce;
  categories: allCategoriesResponce;
}) {
  const filterButton = useMemo(
    () => (
      <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
        <FaFilter />
        Filters
      </button>
    ),
    [],
  );
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{filterButton}</DrawerTrigger>
      <DrawerContent className="p-3 w-[85vw] max-w-sm h-full overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Set your Filters Here.</DrawerDescription>
        </DrawerHeader>

        <aside className="w-full shrink-0 my-5">
          <FiltersComponent brands={brands} categories={categories} />
        </aside>
      </DrawerContent>
    </Drawer>
  );
}
