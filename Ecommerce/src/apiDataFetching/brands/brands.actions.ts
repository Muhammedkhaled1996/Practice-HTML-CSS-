"use server";
import {
  AllBrandsResponce,
  GetSpecificBrand,
} from "@/src/types/brands.interface";

// get all brands
export async function getAllBrands(): Promise<AllBrandsResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands`,
    {
      next: {
        revalidate: 60,
        tags: ["allBrands"],
      },
    },
  );
  const data = await responce.json();
  return data;
}

// get specific brand products
export async function getSpecificProducts(
  id: string,
): Promise<GetSpecificBrand> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    {
      next: {
        revalidate: 60,
        tags: ["brand"],
      },
    },
  );
  const data = await responce.json();
  return data;
}
