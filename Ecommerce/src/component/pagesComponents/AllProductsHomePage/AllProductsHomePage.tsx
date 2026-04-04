import { getAllProducts } from "@/src/apiDataFetching/products/products.action";
import { ProductCard } from "../../publicComponents/ProductCard/ProductCard";
import { Product } from "@/src/types/allProduct.interface";
import { FaBoxOpen } from "react-icons/fa";

export default async function AllProductsHomePage() {
  
  const allProductResponce = await getAllProducts();


  console.log(allProductResponce,"allProductResponce from home page");
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-2">
      {allProductResponce?.data?.length > 0 ? (
        allProductResponce?.data?.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-10 text-gray-500 w-full text-center">
          <FaBoxOpen className="text-5xl mb-4" />
          <h2 className="text-lg font-semibold mb-1">No Products Found</h2>
          <p className="text-sm">Try again later or check your connection</p>
        </div>
      )}
    </div>
  );
}
