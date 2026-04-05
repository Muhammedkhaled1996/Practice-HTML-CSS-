import { create } from "zustand";

type profileEditStore = {
  profileEdit: string | null;
  setProfileEdit: (value : string) => void;
};

export const useProfileEditStore = create<profileEditStore>((set, get) => ({
  profileEdit: "address",
  setProfileEdit: (value) => {
    set({
      profileEdit: value,
    });
  },
}));
