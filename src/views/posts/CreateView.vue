<template>
  <div>
    <h1 class="title">Buat Keluhan</h1>

    <form
      action=""
      @submit.prevent="postsStore.createPost(formData)"
      class="w-1/2 mx-auto space-y-6"
    >
      <div>
        <input type="text" placeholder="Post Title" v-model="formData.title" />
        <p class="error" v-if="postsStore.errors.title">
          {{ postsStore.errors.title[0] }}
        </p>
      </div>

      <div>
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Post Content"
          v-model="formData.body"
        ></textarea>
        <p class="error" v-if="postsStore.errors.body">
          {{ postsStore.errors.body[0] }}
        </p>
      </div>

      <button class="primary-btn">Create</button>
    </form>
  </div>
</template>

<script setup>
import { usePostsStore } from "@/stores/posts";
import { reactive } from "vue";

const postsStore = usePostsStore();

const formData = reactive({
  title: "",
  body: "",
});
</script>

<style lang="scss" scoped></style>
