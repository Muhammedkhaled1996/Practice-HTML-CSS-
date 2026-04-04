"use server";
import {
  AllProductResponce,
  sepesificProductResponce,
} from "../../types/allProduct.interface";

// get all products
export async function getAllProducts(
  searchParams: Record<string, any>,
): Promise<AllProductResponce> {
  const queryString = new URLSearchParams(searchParams).toString();
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?${queryString}`,
    {
      next: {
        revalidate: 60,
        tags: ["allProducts"],
      },
    },
  );
  const data = await response.json();
  return data;
}

// get all products by params
export async function getAllProductsByParams(
  paramName: String | null = null,
  id: String | null = null,
): Promise<AllProductResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?${paramName}=${id}`,
    {
      next: {
        revalidate: 60,
        tags: ["allProductsByParams"],
      },
    },
  );
  const data = await responce.json();
  return data;
}

// get specific product
export async function getSpecificProducts(
  id: string,
): Promise<sepesificProductResponce> {
  const responce = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    {
      next: {
        revalidate: 60,
        tags: ["product"],
      },
    },
  );
  const data = await responce.json();

  console.log(data, "data of product");

  return data;
}
