<template>
  <div>
    <div class="title">Register to new account {{ authStore.user }}</div>

    <form
      @submit.prevent="console.log(formData)"
      action=""
      class="w-1/2 mx-auto space-y-6"
    >
      <div>
        <input type="text" placeholder="Name" v-model="formData.name" />
      </div>

      <div>
        <input type="text" placeholder="Email" v-model="formData.email" />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="formData.password_confirmation"
        />
      </div>

      <button class="primary-btn">Register</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";

const authStore = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<style lang="scss" scoped></style>
