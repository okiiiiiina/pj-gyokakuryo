import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

const app = Vue.createApp({})

// use
app.use(router)

// mount
app.mount('#app')
