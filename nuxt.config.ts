// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/seo', '@nuxtjs/i18n'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'uk',
        name: 'Ukraine',
      },
      {
        code: 'ru',
        name: 'Russian',
      },
    ],
    defaultLocale: 'en',
  },
})
