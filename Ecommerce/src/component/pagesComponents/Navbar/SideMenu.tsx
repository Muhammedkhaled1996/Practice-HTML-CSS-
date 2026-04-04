import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import cartLogo from "@/src/assets/images/cart.png";
import { IoIosClose } from "react-icons/io";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IoCart, IoSearchSharp } from "react-icons/io5";
import { FaBoxOpen, FaHeadset, FaRegHeart } from "react-icons/fa";
import { FileUser } from "lucide-react";
import { FaRightFromBracket } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { signOut } from "next-auth/react";

interface Props {
  user: userObject;
  status: string | null;
  numOfWishlistItems: number | null;
  numOfCartItems: number | null;
}

interface userObject {
  name: string;
  email: string;
}

export function SideMenu({
  user,
  status,
  numOfWishlistItems,
  numOfCartItems,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <p>
            <RxHamburgerMenu />
          </p>
        </DrawerTrigger>

        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
          <DrawerHeader className="mb-3">
            <DrawerTitle className="px-3 bg-gray-200/30 border-b border-gray-300/50">
              <div className="flex items-center justify-between py-4  ">
                <div className=" flex justify-center items-center gap-1 me-2">
                  <Image src={cartLogo} alt="cartLogo" width={35} />
                  <h1 className="font-bold text-3xl">FreshCart</h1>
                </div>

                <DrawerClose asChild>
                  <div className="flex font-bold justify-center items-center size-10 bg-gray-200  rounded-full text-4xl text-gray-700 cursor-pointer hover:bg-gray-300 duration-200 transition-colors">
                    <IoIosClose />
                  </div>
                </DrawerClose>
              </div>
            </DrawerTitle>
          </DrawerHeader>

          <Field className="px-5 mb-3">
            <InputGroup className="focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
              <InputGroupInput
                placeholder="Search for product, brands and more..."
                className="py-2!"
              />

              <InputGroupAddon align="inline-end" className="cursor-pointer ">
                <div className="flex items-center justify-center rounded-md bg-green-600 text-white size-6 hover:bg-green-700 duration-300 transition-colors">
                  <IoSearchSharp />
                </div>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <div className="w-full bg-gray-300/50 h-px"></div>

          <ul className="p-4">
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/"}>
                <li className="py-2 rounded-lg mb-1 px-2 text-lg text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20">
                  Home
                </li>
              </Link>
            </DrawerClose>
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/shop"}>
                <li className="py-2 rounded-lg mb-1 px-2 text-lg text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20">
                  Shop
                </li>
              </Link>
            </DrawerClose>
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/categories"}>
                <li className="py-2 rounded-lg mb-1 px-2 text-lg text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20">
                  Categories
                </li>
              </Link>
            </DrawerClose>
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/brands"}>
                <li className="py-2 rounded-lg mb-1 px-2 text-lg text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20">
                  Brands
                </li>
              </Link>
            </DrawerClose>
          </ul>

          <div className="w-full bg-gray-300/50 h-px"></div>

          <ul className="p-4">
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/wishlist"}>
                <li className="text-start py-4 rounded-lg mb-1 px-2 text-xl text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center size-8 bg-red-300/20 text-red-600 rounded-full text-xl">
                      <FaRegHeart />
                    </div>
                    <span className="text-lg">Wishlist</span>
                  </div>

                  {numOfWishlistItems && numOfWishlistItems > 0 && (
                    <span className="size-6 bg-red-600 text-white rounded-full flex justify-center items-center text-sm font-semibold">
                      {numOfWishlistItems > 9 ? "9+" : numOfWishlistItems}
                    </span>
                  )}
                </li>
              </Link>
            </DrawerClose>
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/cart"}>
                <li className="text-start py-4 rounded-lg mb-1 px-2 text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center size-8 bg-green-300/20 text-green-600 rounded-full text-xl">
                      <IoCart />
                    </div>
                    <span className="text-lg">Cart</span>
                  </div>
                  {numOfCartItems && numOfCartItems > 0 && (
                    <span className="size-6 bg-red-600 text-white rounded-full flex justify-center items-center text-sm font-semibold">
                      {numOfCartItems > 9 ? "9+" : numOfCartItems}
                    </span>
                  )}
                </li>
              </Link>
            </DrawerClose>
            <DrawerClose asChild className="w-full text-start">
              <Link href={"/allorders"}>
                <li className="text-start py-4 rounded-lg mb-1 px-2 text-gray-600 cursor-pointer hover:text-green-600 duration-200 transition-colors hover:bg-green-300/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center size-8 bg-blue-300/20 text-blue-600 rounded-full text-xl">
                      <FaBoxOpen />
                    </div>
                    <span className="text-lg">My Orders</span>
                  </div>
                </li>
              </Link>
            </DrawerClose>
          </ul>

          <div className="w-full bg-gray-300/50 h-px"></div>

          {status === "authenticated" ? (
            <div className="p-4 space-y-1">
              <DrawerClose asChild>
                <Link
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                  href="/profile/settings"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaBoxOpen />
                  </div>
                  <span className="font-medium text-gray-700 text-lg">
                    {user?.name}
                  </span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <button
                  onClick={() => signOut()}
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left"
                >
                  <div className=" w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                    <FaRightFromBracket className="text-red-600" />
                  </div>
                  <span className="font-medium text-red-600 text-lg">
                    Sign Out
                  </span>
                </button>
              </DrawerClose>
            </div>
          ) : (
            <div className="flex items-center gap-3 w-full p-4">
              <DrawerClose asChild className="w-full">
                <Link href={"/login"}>
                  <Button className="w-full py-7 text-xl text-white hover:bg-green-600 bg-green-500 duration-200 transition-colors cursor-pointer ">
                    Sign In
                  </Button>
                </Link>
              </DrawerClose>
              <DrawerClose asChild className="w-full">
                <Link href={"/register"}>
                  <Button
                    className="w-full py-7 text-xl border-green-600 text-green-600 hover:bg-green-300/20 duration-200 transition-colors hover:text-green-600 cursor-pointer "
                    variant="outline"
                  >
                    Sign Up
                  </Button>
                </Link>
              </DrawerClose>
            </div>
          )}

          <DrawerClose asChild>
            <Link
              href="/contact"
              className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
            >
              <div className="gap-3 rounded-full bg-primary-100 flex items-center justify-center w-full">
                <div className="size-12 shrink-0 rounded-full bg-green-300/20 flex justify-center items-center">
                  <FaHeadset className="text-2xl text-green-600" />
                </div>
                <div className="w-full text-xl">
                  <div className="text-sm font-semibold text-gray-700">
                    Need Help?
                  </div>
                  <div className="text-sm text-green-600">Contact Support</div>
                </div>
              </div>
            </Link>
          </DrawerClose>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
