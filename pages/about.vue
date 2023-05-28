<template>
  <div class="hoge">Aboutページ！</div>
</template>

<style lang="scss">
@import "~/styles/mixin";

.hoge {
  @include teal;
}
</style>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom2", // default or customNameで指定も可能
  // layout: false, // レイアウトを特定のページだけ使用しないも可能
});
</script>
