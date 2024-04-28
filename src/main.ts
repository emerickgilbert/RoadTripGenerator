import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import '@aws-amplify/ui-vue/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'
import config from './amplifyconfiguration.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
Amplify.configure(config)
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' }
})
app.use(router)
app.use(vuetify)
app.use(createPinia())

app.mount('#app')
