"use server";
import {
  allCategoriesResponce,
  categoryDetails,
} from "@/src/types/allCategories.interface";

// get all sub categories by category id
export async function getAllSubCategories(
  id: string,
): Promise<allCategoriesResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/subcategories`,
    {
      next: {
        revalidate: 60,
        tags: ["allSubCategories"],
      },
    },
  );
  const data = await responce.json();
  return data;
}

// get specific sub category
export async function getSpacificSubCategory(
  categoryId: string,
): Promise<categoryDetails> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/subcategories/${categoryId}`,
    {
      next: {
        revalidate: 60,
        tags: ["specificSubCategory"],
      },
    },
  );
  const data = await responce.json();
  return data;
}

// get all sub categories by category id
export async function getAllSubCategoriesByCategory(
  id: string,
): Promise<allCategoriesResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
    {
      next: {
        revalidate: 60,
        tags: ["allSubCategoriesByCategory"],
      },
    },
  );
  const data = await responce.json();
  return data;
}
