import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidationPlugin from './includes/validation.js'
import { auth } from './includes/firebase'
import Icon from './directives/icons.js'
import i18n from './includes/i18n.js'
import { registerSW } from 'virtual:pwa-register'
import GlobalComponents from '@/includes/_global.js'
import progressBar from './includes/progress-bar.js'
import 'nprogress/nprogress.css'
registerSW({ immediate: true })

progressBar(router)

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidationPlugin)
    app.use(i18n)
    app.use(GlobalComponents)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
