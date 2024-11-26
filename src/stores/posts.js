import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  getters: {},
  actions: {},
});
