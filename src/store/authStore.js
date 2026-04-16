import {create} from "zustand";


export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  role: null,
  login: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token, role: user.is_admin ? "admin" : "user" });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, role: null });
  },
  loadUserFromStorage: (user) => {
    const token = localStorage.getItem("token");
    if (token && user) {
      set({
        user,
        token,
        role: user.is_admin ? "admin" : "user",
        loading: false,
      });
    } else {
      set({ loading: false }); // mark finished even if no user
    }
  },

}));
