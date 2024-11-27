<template>
  <div>
    <div class="title">Login</div>

    <!-- () => authStore.authenticate('register', formData) -->
    <form
      @submit.prevent="authStore.authenticate('login', formData)"
      action=""
      class="w-1/2 mx-auto space-y-6"
    >
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

      <button class="primary-btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, reactive } from "vue";

const authStore = useAuthStore();
// const { authenticate } = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
});

onMounted(() => {
  authStore.errors = {};
});
</script>

<style lang="scss" scoped></style>
