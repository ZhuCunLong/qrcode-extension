import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@common/styles/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#root')
