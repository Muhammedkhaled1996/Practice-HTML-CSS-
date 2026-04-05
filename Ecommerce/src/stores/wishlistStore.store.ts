import { create } from "zustand";

import {
  addAndRemoveFromWishlistResponce,
  wishlistResponce,
} from "../types/wishlst.interface";
import {
  addToWishlist,
  getAllWishlist,
  removeFromWishlist,
} from "../apiDataFetching/wishlist/wishlist.actions";

type WishlistStore = {
  wishlist: wishlistResponce | null;
  numOfWishlistItems: number | null;
  getUserWishlist: () => Promise<wishlistResponce>;
  addToWishlist: (
    productId: string,
  ) => Promise<addAndRemoveFromWishlistResponce>;
  deleteItemFromWishlist: (
    productId: string,
  ) => Promise<addAndRemoveFromWishlistResponce>;
  increaseNumOfWishlist: () => void;
  decreaseNumOfWishlist: () => void;
};

export const useWishlistStore = create<WishlistStore>((set) => ({
  // initial state
  wishlist: null,
  numOfWishlistItems: null,

  // get user cart
  getUserWishlist: async () => {
    const data = await getAllWishlist();
    set({
      wishlist: data,
      numOfWishlistItems: data.count,
    });

    return data;
  },
  // add to cart
  addToWishlist: async (productId: string) => {
    const data = await addToWishlist(productId);

    if (data.status === "success") {
      const updated = await getAllWishlist();

      set({
        wishlist: updated,
      });
    }

    return data;
  },

  // delete item from cart
  deleteItemFromWishlist: async (productId: string) => {
    const res = await removeFromWishlist(productId);

    if (res.status === "success") {
      const updated = await getAllWishlist();

      set({
        wishlist: updated,
      });
    }

    return res;
  },

  // set number of cart items
  increaseNumOfWishlist: () => {
    set((state) => ({
      numOfWishlistItems: state.numOfWishlistItems! + 1,
    }));
  },

  // set number of cart items
  decreaseNumOfWishlist: () => {
    set((state) => ({
      numOfWishlistItems: state.numOfWishlistItems! - 1,
    }));
  },
}));
