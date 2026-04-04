import { create } from "zustand";

type ShowOrderDetailsStore = {
  openedOrderId: string | null;
  toggleOrder: (id: string) => void;
};

export const useShowOrderDetailsStore = create<ShowOrderDetailsStore>(
  (set, get) => ({
    openedOrderId: null,
    toggleOrder: (id) => {
      const current = get().openedOrderId;

      set({
        openedOrderId: current === id ? null : id,
      });
    },
  })
);