import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sepesificProductResponce } from "@/src/types/allProduct.interface";
import { FaCheck, FaShieldAlt, FaStar, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import RatingBars from "../../publicComponents/RatingBars/RatingBars";
import Rating from "../../publicComponents/Rating/Rating";

interface Props {
  product: sepesificProductResponce;
}

export function TabsDemo({ product }: Props) {
  return (
    <Tabs defaultValue="ProductDetails">
      <TabsList
        variant="line"
        className="border-b border-gray-200 w-full text-2xl"
      >
        <TabsTrigger
          value="ProductDetails"
          className="text-gray-500 hover:text-gray-700 font-bold data-[state=active]:text-green-600   data-[state=active]:after:absolute data-[state=active]:after:-bottom-1 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-green-600 data-[state=active]:after:rounded  cursor-pointer"
        >
          Product Details
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="text-gray-500 hover:text-gray-700 font-bold data-[state=active]:text-green-600   data-[state=active]:after:absolute data-[state=active]:after:-bottom-1 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-green-600 data-[state=active]:after:rounded  cursor-pointer bg-green-400"
        >
          Reviews
        </TabsTrigger>
        <TabsTrigger
          value="shipping&returns"
          className="text-gray-500 hover:text-gray-700 font-bold data-[state=active]:text-green-600   data-[state=active]:after:absolute data-[state=active]:after:-bottom-1 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-green-600 data-[state=active]:after:rounded  cursor-pointer"
        >
          Shipping & Returns
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ProductDetails">
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About this Product
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.data.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">
                  Product Information
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Category</span>
                    <span className="text-gray-900 font-medium">
                      {product.data.category.name}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Subcategory</span>
                    <span className="text-gray-900 font-medium">
                      {product.data.subcategory[0].name}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Brand</span>
                    <span className="text-gray-900 font-medium">
                      {product.data.brand.name}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Items Sold</span>
                    <span className="text-gray-900 font-medium">
                      {product.data.sold}+ sold
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="me-2" />
                    Premium Quality Product
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="me-2" />
                    100% Authentic Guarantee
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="me-2" />
                    Fast &amp; Secure Packaging
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="me-2" />
                    Quality Tested
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-yellow-400">
                  <Rating rating={product?.data?.ratingsAverage} />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Based on {product?.data?.reviews?.length} reviews
                </p>
              </div>

              <RatingBars reviews={product?.data?.reviews} />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-center py-8 flex flex-col justify-center items-center gap-3">
                <FaStar className="text-gray-500 text-3xl " />
                <p className="text-gray-500">
                  Customer reviews will be displayed here.
                </p>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="shipping&returns">
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <FaTruck />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Shipping Information
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Standard delivery: 3-5 business days</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Express delivery available (1-2 business days)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Track your order in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <FaArrowRotateLeft />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Returns &amp; Refunds
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>30-day hassle-free returns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Full refund or exchange available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Free return shipping on defective items</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-green-700">
                    <FaCheck />

                    <span>Easy online return process</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Buyer Protection Guarantee
                </h4>
                <p className="text-sm text-gray-600">
                  Get a full refund if your order doesn't arrive or isn't as
                  described. We ensure your shopping experience is safe and
                  secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
