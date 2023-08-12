//引入初始化样式资源
import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//测试接口函数
// import { getCategory } from "@/apis/testApi";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
