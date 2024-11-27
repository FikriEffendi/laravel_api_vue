<template>
  <div class="container">
    <div class="title">Keluhan Terbaru</div>
    <div v-if="post">
      <div class="pl-4 mt-12 border-l-4 border-blue-500">
        <div class="text-3xl font-bold">{{ post.title }}</div>
        <div class="mb-4 text-xs text-slate-600">
          Posted by {{ post.user.name }}
        </div>
        <div>
          {{ post.body }}
        </div>

        <div
          v-if="authStore.user && authStore.user.id === post.user_id"
          class="flex items-center gap-6"
        >
          <form action="" @submit.prevent="postsStore.deletePost(post)">
            <button
              class="px-2 py-1 font-bold text-red-500 border border-red-300"
            >
              Delete
            </button>
          </form>
          <router-link
            class="px-2 py-1 font-bold text-green-500 border border-green-300"
            :to="{ name: 'update', params: { id: post.id } }"
            >Update</router-link
          >
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="title">Tidak terdapat keluhan</h3>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const postsStore = usePostsStore();
const authStore = useAuthStore();

const post = ref(null);

const route = useRoute();

onMounted(async () => {
  post.value = await postsStore.getPost(route.params.id); //id adalah parameter yang ada di index.js(router)
});
</script>

<style lang="scss" scoped></style>
