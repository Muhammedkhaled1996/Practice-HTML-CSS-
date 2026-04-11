import { Product } from "@/src/types/allProduct.interface";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import Rating from "./../Rating/Rating";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import AddWishlist from "./addWishlist/addWishlist";

export function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div
        id="product-card"
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadowlg  hover:-translate-y-1 duration-300 transition-all"
      >
        <div className="relative">
          <Image
            className="w-full h-50 md:h-65  object-contain object-center bg-white"
            alt={product.slug}
            src={product.imageCover}
            width={200}
            height={200}
          />
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <AddWishlist productId={product._id} />
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm">
              <TiArrowSync />
            </button>
            <Link
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
              href={`/product/${product._id}`}
            >
              <FaRegEye />
            </Link>
          </div>

          {product.priceAfterDiscount ? (
            <>
              <div className="absolute top-3 left-3">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -
                  {Math.floor(
                    100 - (product.priceAfterDiscount / product.price) * 100,
                  )}
                  %
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {product.category.name}
          </div>
          <h3
            className="font-medium mb-1 text-sm cursor-pointer h-auto md:h-11"
            title={product.slug}
          >
            <Link
              className="md:line-clamp-2 line-clamp-1 text-sm "
              href={`/product/${product._id}`}
            >
              {product.title}
            </Link>
          </h3>
          <div className="flex justify-between items-center mb-2">
            <Rating rating={product.ratingsAverage} />
            <span className="text-xs text-gray-500">{`${product.ratingsAverage} (${product.ratingsQuantity})`}</span>
          </div>
          <div className="flex-col md:flex-row flex items-center justify-between">
            <div className=" flex items-center justify-between md:justify-start my-1 md:my-0 w-full">
              {product.priceAfterDiscount ? (
                <>
                  <span className="  md:text-lg font-bold text-green-600">
                    {product.priceAfterDiscount} EGP
                  </span>
                  <span className="text-[12px] md:text-sm text-gray-500 line-through ml-2">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className=" md:text-lg font-bold text-green-600">
                  {product.price} EGP
                </span>
              )}
            </div>
            {/* Add to cart component (client component) */}
            <AddToCartButton productId={product._id} />
          </div>
        </div>
      </div>
    </>
  );
}
