import { createApp } from 'vue'
import router from "../router/index.ts"
import Chakra from '@chakra-ui/vue-next'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// use
app.use(router)
// @ts-ignore TODO: エラーの原因を特定、解消
app.use(Chakra)

// component

// mount
app.mount('#app')
