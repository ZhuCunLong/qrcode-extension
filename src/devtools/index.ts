import { createApp } from 'vue'
import App from './App.vue'
import '@common/styles/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

chrome.devtools.panels.create('my devtool',
  '',
  'devtools.html',
  function (panel) {
    console.log('创建完成：', panel)
  })

chrome.devtools.panels.elements.createSidebarPane(
  'My Sidebar',
  function (sidebar) {
    // sidebar initialization code here
    sidebar.setObject({ some_data: 'Some data to show' })
  },
)

chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    console.log('Request finished:', request)
  },
)


const port = chrome.runtime.connect()
port.postMessage({ type: 'enable' })

const app = createApp(App)
app.use(ElementPlus)

app.mount('#root')
