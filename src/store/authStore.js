import {create} from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  role: null,
  login: (user, token) => {
    set({ user, token, role: user.is_admin ? "admin" : "user" });
    localStorage.setItem("token", token);
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, role: null });
  },
}));