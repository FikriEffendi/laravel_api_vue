import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: "jon",
    };
  },
  getters: {},
  actions: {
    async authenticate() {
      const res = await fetch("/api/register");
    },
  },
});
