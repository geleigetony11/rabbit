//引入初始化样式资源
import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//main.js中不要写逻辑函数,在外面封装好,引入使用

//引入懒加载插件并注册,use注册
import { lazyPlugin } from "./directives/index.js";
//引入全局组件插件
import { componentPlugin } from "@/components/index.js";

import App from "./App.vue";
import router from "./router";

//测试接口函数
// import { getCategory } from "@/apis/testApi";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);
const pinia = createPinia();
//注册持久化插件
pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router).use(lazyPlugin).use(componentPlugin).mount("#app");
