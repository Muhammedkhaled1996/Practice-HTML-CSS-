import { useQuery, keepPreviousData } from "@tanstack/react-query";

async function fetchProducts(params: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?${params}`,
  );

  if (!res.ok) throw new Error("Error fetching");

  return res.json();
}

export function useProducts(params: string) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    placeholderData: keepPreviousData,
  });
}
