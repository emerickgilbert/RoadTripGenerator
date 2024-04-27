import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'
import config from './amplifyconfiguration.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
Amplify.configure(config)

app.use(createPinia())
app.use(router)

app.mount('#app')
