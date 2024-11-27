<template>
  <div class="container">
    <div class="title">Keluhan Terbaru</div>

    <div v-if="posts.length > 0">
      <div
        v-for="post in posts"
        :key="post.id"
        class="pl-4 mb-12 border-l-4 border-blue-500"
      >
        <div class="text-3xl font-bold">{{ post.title }}</div>
        <div class="mb-4 text-xs text-slate-600">
          Posted by {{ post.user.name }}
        </div>
        <div>
          {{ post.body }}
          <router-link
            :to="{ name: 'show', params: { id: post.id } }"
            class="font-bold text-blue-500 underline"
            >Read more...</router-link
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
import { usePostsStore } from "@/stores/posts";
import { onMounted, ref } from "vue";

const postsStore = usePostsStore();
const posts = ref([]);

onMounted(async () => {
  posts.value = await postsStore.getAllPosts();
});
</script>

<style lang="scss" scoped></style>
