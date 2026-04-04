import AppBreadcrumb from "@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb";
import { IoIosHome } from "react-icons/io";
import Link from "next/link";
import Rating from "@/src/component/publicComponents/Rating/Rating";
import { FaRegHeart, FaShieldAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import { FaArrowRotateLeft, FaTruckFast } from "react-icons/fa6";
import ProductNumberSec from "@/src/component/pagesComponents/ProductNumberSec/ProductNumberSec";
import Gallery from "@/src/component/pagesComponents/Gallery/Gallery";
import {
  getAllProducts,
  getAllProductsByParams,
} from "@/src/apiDataFetching/products/products.action";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";
import { TabsDemo } from "@/src/component/pagesComponents/Tabs/Tabs";
import SliderRelatedProduct from "@/src/component/pagesComponents/SliderRelatedProduct/SliderRelatedProduct";
import AddToCartProductDetails from "@/src/component/pagesComponents/AddToCartProductDetails/AddToCartProductDetails";
import { getSpecificProducts } from "@/src/apiDataFetching/products/products.action";
import AddtoWishlistProductDetails from "@/src/component/pagesComponents/AddtoWishlistProductDetails/AddtoWishlistProductDetails";

export default async function details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  const product = await getSpecificProducts(id);

  const allProducts = await getAllProducts();

  const relatedProducts = await getAllProductsByParams(
    "category[in]",
    product.data.category._id,
  );

  return (
    <>
      <div className="container">
        <div className="mt-4 mb-6 p-4">
          <AppBreadcrumb
            items={[
              { label: "Home", href: "/", icon: <IoIosHome /> },
              {
                label: product.data.category.name,
                href: `/categories/${product.data.category._id}`,
              },
              {
                label: product.data.brand.name,
                href: `/brands/${product.data.brand._id}`,
              },
            ]}
            current={product.data.title}
            currentClassName="text-black font-semibold"
            linkClassName="text-gray-400 font-semibold hover:text-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 my-2 p-4">
          {/* left Section */}
          <div className="col-span-1 md:col-span-2 md:sticky top-20 left-0  rounded-2xl shadow-lg p-4 h-fit">
            <div>
              <Gallery product={product} />
            </div>
          </div>

          {/* right Section */}
          <div className="col-span-1 md:col-span-4 rounded-2xl shadow-lg p-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition"
                  href={`/categories/${product.data.category._id}`}
                >
                  {product.data.category.name}
                </Link>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {product.data.brand.name}
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {product.data.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-yellow-400">
                  <Rating rating={product.data.ratingsAverage} />
                </div>
                <span className="text-sm text-gray-600">{`${product.data.ratingsAverage} (${product.data.ratingsQuantity} reviews)`}</span>
              </div>
              <div className="flex items-center flex-wrap gap-3 mb-6">
                {product.data.priceAfterDiscount ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      {product.data.priceAfterDiscount} EGP
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.data.price} EGP
                    </span>
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                      Save{" "}
                      {Math.floor(
                        100 -
                          (product.data.priceAfterDiscount /
                            product.data.price) *
                            100,
                      )}
                      %
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {product.data.price} EGP
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full ${product.data.quantity > 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${product.data.quantity > 0 ? "bg-green-500" : "bg-red-500"}`}
                  />
                  {product.data.quantity > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </div>
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.data.description}
                </p>
              </div>

              {/* ProductNumberSec */}
              <ProductNumberSec product={product} />

              {/* AddToCartProductDetails */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <AddToCartProductDetails productId={product.data._id} />
                <button
                  id="buy-now"
                  className="w-full bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <AiFillThunderbolt />
                  Buy Now
                </button>
              </div>
              <div className="flex gap-3 mb-6">
                <AddtoWishlistProductDetails product={product}/>
                <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition cursor-pointer">
                  <IoShareSocial />
                </button>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <FaTruckFast />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Free Delivery
                      </h4>
                      <p className="text-xs text-gray-500">Orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <FaArrowRotateLeft />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        30 Days Return
                      </h4>
                      <p className="text-xs text-gray-500">Money back</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Secure Payment
                      </h4>
                      <p className="text-xs text-gray-500">100% Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4 mt-2 p-4 shadow rounded-2xl">
        <TabsDemo product={product} />
      </div>

      <div className="my-4 container p-4">
        <SliderRelatedProduct relatedProducts={relatedProducts.data} />
      </div>

      <LowerInstractions />
    </>
  );
}
