import { create } from "zustand";
import apiRequest from "./apiRequest";

const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    // const res = await apiRequest
  }
}));
