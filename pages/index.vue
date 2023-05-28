<template>
  <h1>Nuxt3 Jamstack Blogs</h1>
  <ul class="container">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink :to="`/posts/${blog.id}`">
        <img :src="blog.eyecatch?.url" :width="blog.eyecatch?.width" :height="blog.eyecatch?.height" alt="" />
        <div>
          <div>
            {{ blog.category?.name }}
          </div>
          <h1 v-if="blog && blog.title">
            {{ blog.title }}
          </h1>
          <div>
            {{ blog.publishedAt ?? blog.createdAt }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Blog } from "~/types/microcms";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    limit: 10,
    // filters: "title[contains]サンプル",
  },
});
</script>

<style lang="scss">
.container {
  background-color: bisque;
}
</style>
