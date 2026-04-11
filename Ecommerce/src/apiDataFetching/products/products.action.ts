"use server";
import {
  AllProductResponce,
  sepesificProductResponce,
} from "../../types/allProduct.interface";

// get all products
export async function getAllProducts(
  searchParams?: Record<string, any>,
): Promise<AllProductResponce> {
  const queryString = new URLSearchParams(searchParams).toString();
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?${queryString}`,
      {
        next: {
          revalidate: 60,
          tags: ["allProducts"],
        },
      },
    );

    if (!response.ok) {
      return {
        results: 0,
        metadata: {} as any,
        data: [],
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}

// get all products by params
export async function getAllProductsByParams(
  paramName: String | null = null,
  id: String | null = null,
): Promise<AllProductResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?${paramName}=${id}`,
      {
        next: {
          revalidate: 60,
          tags: ["allProductsByParams"],
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
    console.error("Error in getAllProductsByParams:", error);
    return {
      results: 0,
      metadata: {} as any,
      data: [],
    };
  }
}

// get specific product
export async function getSpecificProducts(
  id: string,
): Promise<sepesificProductResponce> {
  try {
    const responce = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      {
        next: {
          revalidate: 60,
          tags: ["product"],
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
    console.error("Error in getSpecificProducts (products):", error);
    return {
      data: {} as any,
    };
  }
}
