<template>
  <div>
    <h1 class="title">Ubah Keluhan</h1>

    <form
      action=""
      class="w-1/2 mx-auto space-y-6"
      @submit.prevent="postsStore.updatePost(post, formData)"
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

      <button class="primary-btn">Update</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const postsStore = usePostsStore();
const authStore = useAuthStore();

const post = ref(null);

const formData = reactive({
  title: "",
  body: "",
});

onMounted(async () => {
  post.value = await postsStore.getPost(route.params.id);

  if (authStore.user.id !== post.value.user_id) {
    router.push({ name: "home" });
  } else {
    formData.title = post.value.title;
    formData.body = post.value.body;
  }
});
</script>

<style lang="scss" scoped></style>
