<template>
  <template v-if="data">
    <h1>
      {{ data.title }}
    </h1>
    <img :src="data.eyecatch?.url" :width="data.eyecatch?.width" :height="data.eyecatch?.height" alt="" />
    <div>
      <div>
        {{ data.category?.name }}
      </div>
      <div>
        {{ data.publishedAt ?? data.createdAt }}
      </div>
    </div>
    <div v-html="data.content"></div>
  </template>
</template>

<script setup lang="ts">
import { Blog } from "~/types/microcms.js";

const { params } = useRoute(); // [id]データ

console.log("params: ", params);

// 他の例：
// const router = useRouter();

// 詳細データ
const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
// const { data } = await useMicroCMSGetListDetail<Blog>({
//   endpoint: "blogs",
//   contentId: Array.isArray(params.id) ? params.id[0] : params.id,
// });
</script>
