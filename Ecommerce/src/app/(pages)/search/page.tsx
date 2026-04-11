import { Field } from "@/components/ui/field";
import { getAllBrands } from "@/src/apiDataFetching/brands/brands.actions";
import { getAllCategories } from "@/src/apiDataFetching/categories/categories.actions";
import { getAllProducts } from "@/src/apiDataFetching/products/products.action";
import ActiveFilters from "@/src/component/pagesComponents/SearchPageComponents/ActiveFilters/ActiveFilters";
import { DrawerScrollableContent } from "@/src/component/pagesComponents/SearchPageComponents/DrawerFilterSearchPage/DrawerFilterSearchPage";
import FiltersComponent from "@/src/component/pagesComponents/SearchPageComponents/FiltersComponent/FiltersComponent";
import PaginationComponent from "@/src/component/pagesComponents/SearchPageComponents/PaginationComponent/PaginationComponent";
import SearchInput from "@/src/component/pagesComponents/SearchInput/SearchInput";
import SortComponent from "@/src/component/pagesComponents/SearchPageComponents/SortComponent/SortComponent";
import ViewShapeSearchPage from "@/src/component/pagesComponents/ViewShapeSearchPage/ViewShapeSearchPage";
import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import SkeletonCards from "@/src/component/publicComponents/SkeletonCards/SkeletonCards";
import dynamic from "next/dynamic";

const DynamicProductsComponent = dynamic(
  () =>
    import("@/src/component/pagesComponents/SearchPageComponents/AllProductsSearchPage/AllProductsSearchPage"),
  {
    loading: () => <SkeletonCards />,
  },
);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;

  const searchParamsValues = Object.fromEntries(
    Object.entries(rawParams).map(([k, v]) => [k, String(v ?? "")]),
  );


  console.log(searchParamsValues , "searchParamsValues");
  

  // get categories name
  const allCategoriesResponce = await getAllCategories();

  // get brands name
  const allBrandsResponce = await getAllBrands();

  // get searched products
  const allProductResponce = await getAllProducts(searchParamsValues);

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
            <SearchInput />
          </Field>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-8">
            {/* aside */}

            <aside className="hidden lg:block w-64 shrink-0">
              <FiltersComponent
                brands={allBrandsResponce}
                categories={allCategoriesResponce}
              />
            </aside>

            {/* main */}
            <main className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <DrawerScrollableContent
                    brands={allBrandsResponce}
                    categories={allCategoriesResponce}
                  />

                  <ViewShapeSearchPage />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <SortComponent />
                </div>
              </div>
              <ActiveFilters
                categories={allCategoriesResponce.data}
                brands={allBrandsResponce.data}
              />
              {/* all products view */}
              <DynamicProductsComponent
                allProductResponce={allProductResponce}
              />

              <PaginationComponent
                currentPage={allProductResponce.metadata.currentPage}
                numberOfPages={allProductResponce.metadata.numberOfPages}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
