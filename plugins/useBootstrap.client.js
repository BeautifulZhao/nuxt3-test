//useBootstrap.client.js
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap)
})
