// https://nuxt.com/docs/api/configuration/nuxt-config
// cssなどの設定を書く（型安全・自動補完目的）
export default defineNuxtConfig({
  css: ["~/styles/global.scss", "~/styles/mixin.scss"],
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: "server",
  },
  // ssr: true,
});
