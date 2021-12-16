import { createApp } from 'vue'
import App from './App.vue'
import ant from './utils/ant'
import "ant-design-vue/dist/antd.css"; 
const app = createApp(App)
app
  .use(ant)
  .mount('#app')
