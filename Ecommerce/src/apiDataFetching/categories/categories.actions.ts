"use server";
import { allCategoriesResponce, getSpecificCategoryResponce } from "@/src/types/allCategories.interface";

// get all categories
export async function getAllCategories(): Promise<allCategoriesResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
      {
        next: {
          revalidate: 60,
          tags: ["allCategories"],
        },
      },
    );

    if (!responce.ok) {
      return {
        results: 0,
        metadata: {} as any,
        data: [],
      };
    }

    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error in getAllCategories:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}

// get specific category products
export async function getSpecificCategory(
  id: string,
): Promise<getSpecificCategoryResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
      {
        next: {
          revalidate: 60,
          tags: ["category"],
        },
      },
    );

    if (!responce.ok) {
      return {
        data: {} as any,
      };
    }

    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error in getSpecificCategory:", error);
    return {
      data: {} as any,
    };
  }
}
