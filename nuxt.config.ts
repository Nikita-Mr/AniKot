// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  routeRules: {
    '/AniKot': { prerender: true },
    '/': { redirect: { to: '/AniKot' } },
    '/api/**': { cors: true },
    '/anilibria.top/**': { cors: true },
    '/AniKot': { swr: true },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    experimental:{
      websocket: true
    }
  }
});
