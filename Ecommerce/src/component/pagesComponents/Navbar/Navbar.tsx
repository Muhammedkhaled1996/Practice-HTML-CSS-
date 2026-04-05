"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGift,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegHeart,
  FaRegUser,
  FaTruck,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoCart, IoPersonAdd, IoSearchSharp } from "react-icons/io5";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import cartLogo from "@/src/assets/images/cart.png";
import Image from "next/image";
import { SideMenu } from "./SideMenu";
import { Badge } from "@/components/ui/badge";
import { useCounterStore } from "@/src/stores/cartStore.store";
import { useEffect } from "react";
import { useWishlistStore } from "@/src/stores/wishlistStore.store";
import { signOut, useSession } from "next-auth/react";
import { FaRightFromBracket } from "react-icons/fa6";
import { ProfileDropMenu } from "../ProfileDropMenu/ProfileDropMenu";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  const pathName = usePathname();

  const { getUserCart, numOfCartItems } = useCounterStore();
  const { getUserWishlist, numOfWishlistItems } = useWishlistStore();

  const { data, status } = useSession();
  // console.log(data, "data session from navbar");
  // console.log(status, "status session from navbar");

  useEffect(() => {
    getUserCart();
    getUserWishlist();
  }, []);

  return (
    <>
      <div className="bg-white text-sm px-3">
        <div className="container justify-between items-center h-10 hidden lg:flex  ">
          <div className="flex items-center gap-6 text-gray-500 ">
            <span className="flex items-center gap-2">
              <FaTruck className="text-green-600" />
              <span>Free Shipping on Orders 500 EGP</span>
            </span>
            <span className="flex items-center gap-2">
              <FaGift className="text-green-600" />
              <span>New Arrivals Daily</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              <FaPhoneAlt />
              <a
                href="tel:+18001234567"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <span>+1 (800) 123-4567</span>
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <FaRegEnvelope />

                <span>support@freshcart.com</span>
              </a>
            </div>
            <span className="w-px h-4 bg-gray-200" />
            {status === "authenticated" ? (
              <>
                <div>
                  <div className="flex items-center gap-4">
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                      href="/profile/addresses"
                    >
                      <FaRegUser />
                      <span>{data?.user?.name}</span>
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="cursor-pointer flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <FaRightFromBracket />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  href="/login"
                >
                  <GoPerson />

                  <span>Sign In</span>
                </Link>
                <Link
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  href="/register"
                >
                  <IoPersonAdd />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-400/20 h-px px-3"></div>

      <div className="bg-white sticky top-0 z-50 ">
        <div className="container ">
          <div className="flex justify-between gap-5 w-full py-3 items-center px-3">
            <Link
              href={"/"}
              className=" flex justify-center items-center gap-1 mx-2"
            >
              <Image src={cartLogo} alt="cartLogo" width={35} />
              <h1 className="font-bold text-3xl">FreshCart</h1>
            </Link>
            <SearchBar />

            <ul className="flex gap-5 max-lg:hidden">
              <Link
                href={"/"}
                className="hover:text-green-600 duration-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/products"}
                className="hover:text-green-600 duration-200 transition-colors"
              >
                Shop
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-green-600 duration-200 transition-colors cursor-pointer">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-40 flex flex-col">
                        <Link
                          href="/categories"
                          className="hover:text-green-700 font-medium duration-200 transition-colors hover:bg-green-200/20 py-2"
                        >
                          All Categories
                        </Link>
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: "6439d2d167d9aa4ca970649f" },
                          }}
                          className="hover:text-green-700 font-medium duration-200 transition-colors hover:bg-green-200/20 py-2"
                        >
                          Electronices
                        </Link>
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: "6439d58a0049ad0b52b9003f" },
                          }}
                          className="hover:text-green-700 font-medium duration-200 transition-colors hover:bg-green-200/20 py-2"
                        >
                          Women's Fashion
                        </Link>
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: "6439d5b90049ad0b52b90048" },
                          }}
                          className="hover:text-green-700 font-medium duration-200 transition-colors hover:bg-green-200/20 py-2"
                        >
                          Men's Fashion
                        </Link>
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: "6439d30b67d9aa4ca97064b1" },
                          }}
                          className="hover:text-green-700 font-medium duration-200 transition-colors hover:bg-green-200/20 py-2"
                        >
                          Beauty & Health
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href={"/brands"}
                className="hover:text-green-600 duration-200 transition-colors"
              >
                Brands
              </Link>
            </ul>

            <div className="flex justify-center items-center gap-2">
              <Link
                href={"/contact"}
                className="hidden md:flex justify-center items-center gap-2 me-3 cursor-pointer"
              >
                <div className="bg-green-300/20 text-green-600 rounded-full size-8 flex justify-center items-center text-lg">
                  <TfiHeadphoneAlt />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium text-gray-500 text-[12px]">
                    Support
                  </p>
                  <span className="text-[12px] text-nowrap font-semibold text-gray-700">
                    24/7 Help
                  </span>
                </div>
              </Link>

              <Separator orientation="vertical" className="hidden md:block" />

              <div className="flex justify-center items-center gap-2">
                <Link
                  href={"/wishlist"}
                  className="text-xl cursor-pointer rounded-full hover:bg-gray-200/40 hover:text-green-700 duration-200 transition-all size-8 flex justify-center items-center"
                >
                  <div className="relative">
                    {numOfWishlistItems && numOfWishlistItems > 0 ? (
                      <Badge
                        variant="default"
                        color="red"
                        className="absolute -top-2 -right-2 bg-red-600 font-semibold text-[10px] size-4"
                      >
                        {numOfWishlistItems > 9 ? "9+" : numOfWishlistItems}
                      </Badge>
                    ) : null}
                    <FaRegHeart className="text-gray-500" />
                  </div>
                </Link>

                <Link
                  href={"/cart"}
                  className="text-xl cursor-pointer rounded-full hover:bg-gray-200/40 hover:text-green-700 duration-200 transition-all size-8 flex justify-center items-center"
                >
                  <div className="relative">
                    {numOfCartItems && numOfCartItems > 0 ? (
                      <Badge
                        variant="default"
                        color="red"
                        className="absolute -top-2 -right-2 bg-red-600 font-semibold text-[10px] size-4"
                      >
                        {numOfCartItems}
                      </Badge>
                    ) : null}

                    <IoCart className="text-gray-500" />
                  </div>
                </Link>
                {status === "authenticated" ? (
                  <div className="hidden md:block">
                    <ProfileDropMenu user={data?.user as any} />
                  </div>
                ) : (
                  <Link href={"/login"}>
                    <Button className="bg-green-600 cursor-pointer rounded-full font-medium hover:bg-green-700 duration-200 transition-colors hidden md:flex">
                      <GoPerson /> Sign In
                    </Button>
                  </Link>
                )}
              </div>

              <div className="size-8 rounded-full bg-green-600 text-white flex justify-center items-center md:hidden cursor-pointer hover:bg-green-700 duration-200 transition-colors">
                <SideMenu
                  user={data?.user as any}
                  status={status}
                  numOfCartItems={numOfCartItems}
                  numOfWishlistItems={numOfWishlistItems}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-400/20 h-px"></div>
      </div>
    </>
  );
}
