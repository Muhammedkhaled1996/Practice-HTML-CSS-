import Link from "next/link";
import Image from "next/image";
import { FaBoxOpen, FaHeart, FaLongArrowAltLeft } from "react-icons/fa";
import { getAllWishlist } from "@/src/apiDataFetching/wishlist/wishlist.actions";
import DeleteBtnWishlist from "../DeleteBtnWishlist/DeleteBtnWishlist";
import AddToCartProductDetails from "../AddToCartProductDetails/AddToCartProductDetails";
import InStockComponent from "../InStockComponent/InStockComponent";
import AppBreadcrumb from "../../publicComponents/AppBreadcrumb/AppBreadcrumb";

export default async function WishlistSection() {
  const data = await getAllWishlist();

  const { data: wishlistProduct } = data;

  if (wishlistProduct.length === 0) {
    return (
      <>
        <div>
          <div className="mt-4">
            <AppBreadcrumb
              items={[{ label: "Home", href: "/" }]}
              current="Shopping Cart"
              linkClassName="hover:text-black text-gray-500 text-sm"
              itemClassName=""
              currentClassName="text-black text-sm"
              separatorClassName="text-gray-500"
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-linear-to-r from-red-600 to-red-700 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaHeart />
                </span>
                Shopping Cart
              </h1>
              <p className="text-gray-500 mt-2">
                You have{" "}
                <span className="font-semibold text-green-600">
                  {wishlistProduct.length} items
                </span>{" "}
                item saved
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-20">
          <div className="w-25 h-25 rounded-full bg-green-100/50 flex items-center justify-center mx-auto mb-5 text-5xl text-green-600">
            <FaBoxOpen />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-6">Start adding products Now</p>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            Browse Products
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* breadcrumb section */}
      <div>
        <div className="mt-4">
          <AppBreadcrumb
            items={[{ label: "Home", href: "/" }]}
            current="Shopping Cart"
            linkClassName="hover:text-black text-gray-500 text-sm"
            itemClassName=""
            currentClassName="text-black text-sm"
            separatorClassName="text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="bg-linear-to-r from-red-600 to-red-700 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                <FaHeart />
              </span>
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-2">
              You have{" "}
              <span className="font-semibold text-green-600">
                {wishlistProduct.length} items
              </span>{" "}
              item saved
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>
          <div className="divide-y divide-gray-100">
            {wishlistProduct.length > 0 && wishlistProduct
              ? wishlistProduct.map((product) => (
                  <div
                    key={product._id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="md:col-span-6 flex items-center gap-4">
                      <Link
                        className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                        href={`/product/${product._id}`}
                      >
                        <Image
                          alt={product.slug}
                          className="w-full h-full object-contain p-2"
                          src={product.imageCover}
                          width={200}
                          height={200}
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
                          href={`/product/${product._id}`}
                        >
                          {product.title}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">
                          {product.category.name}
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                      <span className="md:hidden text-sm text-gray-500">
                        Price:
                      </span>
                      <div className="text-right md:text-center">
                        <div className="font-semibold text-gray-900">
                          {product.price} EGP
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center">
                      <span className="md:hidden text-sm text-gray-500 mr-2">
                        Status:
                      </span>

                      <InStockComponent product={product} />
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                      <AddToCartProductDetails productId={product._id} />

                      <DeleteBtnWishlist productId={product._id} />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <Link
            className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors flex justify-center items-center gap-3"
            href="/products"
          >
            <FaLongArrowAltLeft />
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}
