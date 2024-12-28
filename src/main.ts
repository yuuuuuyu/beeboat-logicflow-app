import { createApp } from "vue"
import "./styles/index.scss"
import App from "./App.vue"

import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)
app.use(ElementPlus).mount("#app")

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

