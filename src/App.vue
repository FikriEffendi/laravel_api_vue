<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";

const authStore = useAuthStore();

// onMounted(() => {
//   authStore.getUser();
// });
</script>

<template>
  <header>
    <nav>
      <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>

      <div v-if="authStore.user" class="flex items-center space-x-6">
        <p class="text-sm text-slate-300">
          Welcome back {{ authStore.user.name }}
        </p>
        <router-link :to="{ name: 'create' }" class="nav-link"
          >Buat Keluhan</router-link
        >
        <form action="" @submit.prevent="authStore.logout">
          <button class="nav-link">Logout</button>
        </form>
      </div>

      <div v-else class="space-x-6">
        <router-link :to="{ name: 'register' }" class="nav-link"
          >Register</router-link
        >
        <router-link :to="{ name: 'login' }" class="nav-link"
          >Login</router-link
        >
      </div>
    </nav>
  </header>

  <RouterView />
</template>
