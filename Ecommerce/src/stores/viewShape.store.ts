import { create } from "zustand";

type ToggleStore = {
  value: string | boolean | "grid";
  setValue: (value: boolean | string) => void;
};

export const useToggleStore = create<ToggleStore>((set, get) => ({
  value: "grid",
  setValue: (value) => {
    set(() => ({
      value: value,
    }));
  },
}));
