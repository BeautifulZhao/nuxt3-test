// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 4098,
  },
  modules: ['@element-plus/nuxt', 'nuxt-swiper','@nuxt/content'],
  plugins: [
    {
      src:'@/plugins/useBootstrap.client.js',
    }
  ],
  css: [
    'element-plus/dist/index.css',
    'bootstrap/dist/css/bootstrap.min.css',
    './assets/styles/main.scss'
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My Nuxt3 App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.css'} 
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://reqres.in/'
    }
  },
})