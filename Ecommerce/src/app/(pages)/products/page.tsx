import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";
import { FaLayerGroup } from "react-icons/fa";
import SkeletonCards from "@/src/component/publicComponents/SkeletonCards/SkeletonCards";
import { getAllProducts } from "@/src/apiDataFetching/products/products.action";
import Image from "next/image";
import dynamic from "next/dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;

  const searchParamsValues = Object.fromEntries(
    Object.entries(rawParams || {}).map(([key, value]) => [key, value ?? ""]),
  );

  const allProductResponce = await getAllProducts(searchParamsValues);

  const DynamicProductsSection = dynamic(
    () =>
      import("@/src/component/pagesComponents/ProductsSection/ProductsSection"),
    { loading: () => <SkeletonCards /> },
  );

  return (
    <>
      {/* Header */}
      <div className="green-gradiant text-white">
        <div className="container px-4 md:px-0 py-12 sm:py-16">
          <div className="my-4">
            {Object.keys(searchParamsValues).length > 0 &&
            allProductResponce?.data[0]?.category ? (
              <AppBreadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Categories", href: "/categories" },
                ]}
                current={allProductResponce?.data[0]?.subcategory[0].name}
                linkClassName="hover:text-white"
              />
            ) : (
              <AppBreadcrumb
                items={[{ label: "Home", href: "/" }]}
                current="All Products"
                linkClassName="hover:text-white"
              />
            )}
          </div>

          <div className="flex items-start  gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              {Object.keys(searchParamsValues).length > 0 &&
              allProductResponce?.data[0]?.category ? (
                <Image
                  src={allProductResponce?.data[0].imageCover}
                  alt={allProductResponce?.data[0]?.slug}
                  height={200}
                  width={200}
                  className="w-full object-cover p-4"
                ></Image>
              ) : (
                <FaLayerGroup className="text-4xl" />
              )}
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                All Products
              </h1>
              <p className="text-white/80 mt-2 text-lg">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products with Suspense */}
      <div className="container mx-auto px-4 py-10">
        <DynamicProductsSection
          allProductResponce={allProductResponce}
          searchParamsValues={searchParamsValues}
        />
      </div>

      <LowerInstractions />
    </>
  );
}
