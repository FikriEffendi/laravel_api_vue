<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
});
</script>

<template>
  <header>
    <nav>
      <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>

      <p v-if="authStore.user" class="text-white">{{ authStore.user.name }}</p>

      <div>
        <router-link :to="{ name: 'register' }" class="nav-link"
          >Register</router-link
        >
      </div>
    </nav>
  </header>

  <RouterView />
</template>
