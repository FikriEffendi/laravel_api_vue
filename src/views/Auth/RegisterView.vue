<template>
  <div>
    <div class="title">Register to new account</div>

    <!-- () => authStore.authenticate('register', formData) -->
    <form
      @submit.prevent="authStore.authenticate('register', formData)"
      action=""
      class="w-1/2 mx-auto space-y-6"
    >
      <div>
        <input type="text" placeholder="Name" v-model="formData.name" />
        <p class="error" v-if="authStore.errors.name">
          {{ authStore.errors.name[0] }}
        </p>
      </div>

      <div>
        <input type="text" placeholder="Email" v-model="formData.email" />
        <p class="error" v-if="authStore.errors.email">
          {{ authStore.errors.email[0] }}
        </p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
        <p class="error" v-if="authStore.errors.password">
          {{ authStore.errors.password[0] }}
        </p>
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
// const { authenticate } = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<style lang="scss" scoped></style>
