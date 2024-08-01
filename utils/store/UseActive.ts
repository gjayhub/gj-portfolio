// store.js

import { create } from "zustand";

interface StoreState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const useActive = create<StoreState>((set) => ({
  activeTab: "home",
  setActiveTab: (activeTab) => set({ activeTab }),
}));

export default useActive;
