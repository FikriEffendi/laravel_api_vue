<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <nav>
      <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>

      <div>
        <router-link :to="{ name: 'register' }" class="nav-link"
          >Register</router-link
        >
      </div>
    </nav>
  </header>

  <RouterView />
</template>
