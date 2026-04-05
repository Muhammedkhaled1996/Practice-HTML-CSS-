"use server";
import {
  AllBrandsResponce,
  GetSpecificBrand,
} from "@/src/types/brands.interface";

// get all brands
export async function getAllBrands(): Promise<AllBrandsResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands`,
      {
        next: {
          revalidate: 60,
          tags: ["allBrands"],
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
    console.error("Error in getAllBrands:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}

// get specific brand products
export async function getSpecificProducts(
  id: string,
): Promise<GetSpecificBrand> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
      {
        next: {
          revalidate: 60,
          tags: ["brand"],
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
    console.error("Error in getSpecificProducts (brands):", error);
    return {
      data: {} as any,
    };
  }
}
