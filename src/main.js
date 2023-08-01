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

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidationPlugin)
    app.use(i18n)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
