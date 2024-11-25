import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  getters: {},
  actions: {
    /*****************************************************************Get authenticated************************************************ */
    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json(res);
        if (res.ok) {
          this.user = data;
        }
        console.log(data);
      }
    },

    /*****************************************************************Login and Register************************************************ */
    async authenticate(apiRoute, formData) {
      const res = await fetch(`/api/${apiRoute}`, {
        method: "post",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.errors) {
        this.errors = data.errors; //this digunakan untuk mengakses store atau objek itu sendiri
        console.log(data);
      } else {
        localStorage.setItem("token", data.token);
        this.user = data.user;
        this.router.push({ name: "home" });
      }
    },
  },
});
