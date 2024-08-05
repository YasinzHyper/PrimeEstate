import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    try {
      const res = await apiRequest("/users/notification");
      // console.log(res);
      set({ number: res.data });
    } catch (error) {
      if (error.request.status === 401 || error.request.status === 403 ) { // token not present or invalid
        localStorage.removeItem("user");
      } 
      console.log(error);
    }
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));
