import { getSpecificCategory } from "@/src/apiDataFetching/categories/categories.actions";
import { getAllSubCategoriesByCategory } from "@/src/apiDataFetching/subcategories/subCategories.action";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFileContract,
  FaFolderOpen,
} from "react-icons/fa";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const allSubCategoriesResponce = await getAllSubCategoriesByCategory(id);
  const SpecificCategory = await getSpecificCategory(id);

  // console.log(SpecificCategory , "SpecificProducts from category");

  return (
    <>
      <div className="green-gradiant text-white">
        <div className="container px-4 md:px-0 py-8 ">
          <div className="mb-4">
            <AppBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Categories", href: "/categories" },
              ]}
              current={SpecificCategory?.data?.name}
            />
          </div>
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30">
              {SpecificCategory?.data ? (
                <Image
                  className="h-[90%] w-[90%] object-contain"
                  src={SpecificCategory?.data?.image}
                  alt={SpecificCategory?.data?.slug}
                  width={200}
                  height={200}
                />
              ) : (
                <FaFileContract className="text-4xl" />
              )}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {SpecificCategory?.data
                  ? SpecificCategory?.data?.name
                  : `Loading...`}
              </h1>
              <p className="text-white/80 mt-2 ">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Link
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
          href="/categories"
        >
          <FaArrowLeft />
          <span>Back to Categories</span>
        </Link>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            {`${allSubCategoriesResponce?.data?.length} Subcategories in ${SpecificCategory?.data?.name}`}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allSubCategoriesResponce?.data?.map((subCategory) => (
            <Link
              key={subCategory?._id}
              href={`/products?subcategory=${subCategory?._id}`}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors text-green-600 text-2xl">
                <FaFolderOpen />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                {subCategory?.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Browse Products</span>
                <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <LowerInstractions />
    </>
  );
}
