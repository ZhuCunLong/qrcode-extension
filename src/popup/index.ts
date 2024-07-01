import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@common/styles/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)

app.mount('#root')