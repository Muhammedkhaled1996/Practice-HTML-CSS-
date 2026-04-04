"use client";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGear, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  FaBoxOpen,
  FaRegAddressBook,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { useProfileEditStore } from "@/src/stores/profileSetting.store";

interface ProfileDropMenuProps {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export function ProfileDropMenu({ user }: { user: ProfileDropMenuProps }) {
  const { setProfileEdit, profileEdit } = useProfileEditStore();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <FaRegCircleUser className="cursor-pointer text-2xl text-gray-500 -mt-1.5 ms-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <div className="flex items-center gap-3 p-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <FaRegUserCircle className="text-green-600" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />

        <Link onClick={()=>setProfileEdit("setting")} href={"/profile/settings"}>
          <DropdownMenuItem className="my-2 text-gray-600 cursor-pointer">
            <UserIcon />
            My Profile
          </DropdownMenuItem>
        </Link>
        <Link href={"/allorders"}>
          <DropdownMenuItem className="my-2 text-gray-600 cursor-pointer">
            <FaBoxOpen />
            My Orders
          </DropdownMenuItem>
        </Link>
        <Link href={"/wishlist"}>
          <DropdownMenuItem className="my-2 text-gray-600 cursor-pointer">
            <FaRegHeart />
            My Wishlist
          </DropdownMenuItem>
        </Link>
        <Link onClick={()=>setProfileEdit("address")} href={"/profile/addresses"}>
          <DropdownMenuItem className="my-2 text-gray-600 cursor-pointer">
            <FaRegAddressBook />
            Addresses
          </DropdownMenuItem>
        </Link>
        <Link onClick={()=>setProfileEdit("setting")} href={"/profile/settings"}>
          <DropdownMenuItem className="my-2 text-gray-600 cursor-pointer">
            <FaGear />
            Setting
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        <button onClick={() => signOut()} className="w-full ">
          <DropdownMenuItem variant="destructive" className="cursor-pointer">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
