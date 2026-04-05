import { create } from "zustand";
import {
  getUserCart,
  addToCartAction,
  clearUserCart,
  deleteItemCount,
  updateItemCount,
} from "../apiDataFetching/cart/cart.actions";
import { CrudCartResponce } from "../types/cart.interface";

type CounterStore = {
  cart: CrudCartResponce | null;
  numOfCartItems: number | null;
  getUserCart: () => Promise<CrudCartResponce>;
  updateItemCount: (
    productId: string,
    count: number,
  ) => Promise<CrudCartResponce>;
  addToCart: (productId: string) => Promise<CrudCartResponce>;
  clearCart: () => Promise<CrudCartResponce>;
  deleteItemFromCart: (productId: string) => Promise<CrudCartResponce>;
  setNumOfCartItems: (count: number) => void;
  quantity: number;
  setQuantity: (number: number) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  cart: null,
  numOfCartItems: null,
  quantity: 1,

  setQuantity: (number) => {
    set({
      quantity: number,
    });
  },

  // get user cart
  getUserCart: async () => {
    const data = await getUserCart();
    set({
      cart: data,
      numOfCartItems: data?.numOfCartItems,
    });
    return data;
  },
  // add to cart
  addToCart: async (productId: string) => {
    const data = await addToCartAction(productId);
    set({
      cart: data,
      numOfCartItems: data?.numOfCartItems,
    });
    return data;
  },
  // update cart
  updateItemCount: async (productId: string, count: number) => {
    const data = await updateItemCount(productId, count);
    set(() => ({
      cart: data,
      numOfCartItems: data?.numOfCartItems,
    }));
    return data;
  },
  // delete item from cart
  deleteItemFromCart: async (productId: string) => {
    const data = await deleteItemCount(productId);
    set({
      cart: data,
      numOfCartItems: data?.numOfCartItems,
    });
    return data;
  },
  // clear all cart items
  clearCart: async () => {
    const data = await clearUserCart();
    set({
      numOfCartItems: null,
      cart: null,
    });
    return data;
  },
  // set number of cart items
  setNumOfCartItems: (count: number) => {
    set({
      numOfCartItems: count,
    });
  },
}));
