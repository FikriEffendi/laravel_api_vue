import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const usePostsStore = defineStore("postsStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  getters: {},
  actions: {
    //**************Get all posts */
    async getAllPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();

      console.log(data);
      return data;
    },

    //**************Get a post */
    async getPost(post) {
      const res = await fetch(`/api/posts/${post}`);
      const data = await res.json();

      console.log(data);
      return data.post;
    },

    //**************Create a post */
    async createPost(formData) {
      const res = await fetch("/api/posts", {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.router.push({ name: "home" });
        console.log(data);
      }
    },

    //**************Delete a post */
    async deletePost(post) {
      const authStore = useAuthStore();

      if (authStore.user.id === post.user_id) {
        const res = await fetch(`/api/posts/${post.id}`, {
          method: "delete",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          this.router.push({ name: "home" });
        }
        console.log(data);
      } else {
        console.log("You do not own this post");
      }
    },

    //**************Update post */
    async updatePost(post, formData) {
      const authStore = useAuthStore();

      if (authStore.user.id === post.user_id) {
        const res = await fetch(`/api/posts/${post.id}`, {
          method: "put",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.errors) {
          this.errors = data.errors;
        } else {
          this.router.push({ name: "home" });
          this.errors = {};
        }
      } else {
        console.log("You do not own this post");
      }
    },
  },
});
