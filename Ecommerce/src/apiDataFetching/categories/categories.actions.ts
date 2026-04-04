"use server";
import { allCategoriesResponce, getSpecificCategoryResponce } from "@/src/types/allCategories.interface";

// get all categories
export async function getAllCategories(): Promise<allCategoriesResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories`,
    {
      next: {
        revalidate: 60,
        tags: ["allCategories"],
      },
    },
  );
  const data = await responce.json();
  return data;
}

// get specific category products
export async function getSpecificCategory(
  id: string,
): Promise<getSpecificCategoryResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    {
      next: {
        revalidate: 60,
        tags: ["category"],
      },
    },
  );
  const data = await responce.json();
  return data;
}
