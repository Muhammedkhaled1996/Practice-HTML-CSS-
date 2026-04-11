import { getAllCategories } from "@/src/apiDataFetching/categories/categories.actions";
import { categoryDetails } from "@/src/types/allCategories.interface";
import Image from "next/image";
import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";

export default async function CategoryHomePage() {
  const allCategoriesResponce = await getAllCategories();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-2">
      {allCategoriesResponce?.data?.length > 0 ? (
        allCategoriesResponce?.data?.map((category: categoryDetails) => (
          <Link
            key={category?._id}
            className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
            href={`/categories/${category?._id}`}
          >
            <div className="h-20 w-20 overflow-hidden bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition">
              <Image
                alt={category?.slug}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                src={category?.image}
              />
            </div>
            <h3 className="font-medium">{category?.name}</h3>
          </Link>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-10 text-gray-500 w-full text-center">
          <FaBoxOpen className="text-5xl mb-4" />
          <h2 className="text-lg font-semibold mb-1">No Categories Found</h2>
          <p className="text-sm">Try again later or check your connection</p>
        </div>
      )}
    </div>
  );
}
