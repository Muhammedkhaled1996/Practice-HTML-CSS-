import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { getAllBrands } from "@/src/apiDataFetching/brands/brands.actions";
import { getAllCategories } from "@/src/apiDataFetching/categories/categories.actions";
import { getAllProducts } from "@/src/apiDataFetching/products/products.action";
import FiltersComponent from "@/src/component/pagesComponents/FiltersComponent/FiltersComponent";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import { ProductCard } from "@/src/component/publicComponents/ProductCard/ProductCard";
import { FaFilter, FaGripVertical, FaList } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;

  const searchParamsValues = Object.fromEntries(
    Object.entries(rawParams || {}).map(([key, value]) => [key, value ?? ""]),
  );

  console.log(searchParamsValues, "searchParamsValues");

  // get searched products
  const allProductResponce = await getAllProducts(searchParamsValues);

  // get categories name
  const allCategoriesResponce = await getAllCategories();

  // get brands name
  const allBrandsResponce = await getAllBrands();

  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <div className="mt-4">
          <AppBreadcrumb
            items={[{ label: "Home", href: "/" }]}
            current="Search Results"
            linkClassName="hover:text-black text-gray-500 text-sm"
            itemClassName=""
            currentClassName="text-black text-sm"
            separatorClassName="text-gray-500"
          />
          <Field className="hidden md:block my-4">
            <InputGroup className="rounded-xl focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
              <InputGroupInput placeholder="Search for product, brands and more..." />
            </InputGroup>
          </Field>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-8">
            {/* aside */}
            <FiltersComponent
              brands={allBrandsResponce}
              categories={allCategoriesResponce}
            />

            {/* main */}
            <main className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                    <FaFilter />
                    Filters
                  </button>
                  <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
                    <button className="p-2 rounded-md transition-colors bg-green-600 text-white">
                      <FaGripVertical />
                    </button>
                    <button className="p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700">
                      <FaList />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select
                    // onChange={(e) => {
                    //   const params = new URLSearchParams(
                    //     searchParams.toString(),
                    //   );
                    //   params.set("sort", e.target.value);
                    //   // router.push(`/search?${params.toString()}`);
                    // }}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white"
                  >
                    <option value="">Relevance</option>
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                    <option value="-ratingsAverage">Rating: High to Low</option>
                    <option value="title">Name: A to Z</option>
                    <option value="-title">Name: Z to A</option>
                  </select>
                </div>
              </div>
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaFilter className="text-xs" />
                  Active:
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  Women's Fashion
                  <button className="hover:text-red-500">
                    <FaXmark />
                  </button>
                </span>
                <button
                  // onClick={() => router.push("/search")}
                  className="text-xs text-gray-500 hover:text-gray-700 underline ml-2"
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allProductResponce &&
                  allProductResponce.data.length > 0 &&
                  allProductResponce.data.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
