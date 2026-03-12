// Change this:
// import create from "zustand";

// To this:
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));