"use server";
import {
  allCategoriesResponce,
  categoryDetails,
} from "@/src/types/allCategories.interface";

// get all sub categories by category id
export async function getAllSubCategories(
  id: string,
): Promise<allCategoriesResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories`,
      {
        next: {
          revalidate: 60,
          tags: ["allSubCategories"],
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
    console.error("Error in getAllSubCategories:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}

// get specific sub category
export async function getSpacificSubCategory(
  categoryId: string,
): Promise<categoryDetails> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories/${categoryId}`,
      {
        next: {
          revalidate: 60,
          tags: ["specificSubCategory"],
        },
      },
    );

    if (!responce.ok) {
      return {} as any;
    }

    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error in getSpacificSubCategory:", error);
    return {} as any;
  }
}

// get all sub categories by category id
export async function getAllSubCategoriesByCategory(
  id: string,
): Promise<allCategoriesResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
      {
        next: {
          revalidate: 60,
          tags: ["allSubCategoriesByCategory"],
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
    console.error("Error in getAllSubCategoriesByCategory:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}
