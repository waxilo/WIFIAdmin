
import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import '~/styles/index.scss'

import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/overlay.scss' // the modal class for message box

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// if you do not need ssg:
import { createApp } from "vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createRouter({
  history: createWebHistory(),
  routes,
}))
app.use(ElementPlus);
app.mount("#app");
