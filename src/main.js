//引入初始化样式资源
import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//检查图片进入视口的函数
import { useIntersectionObserver } from "@vueuse/core";

//测试接口函数
// import { getCategory } from "@/apis/testApi";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");

//定义全局指令,使用时用 v-img-lazy=""指令
app.directive("img-lazy", {
  mounted(el, binding) {
    //el:指令绑定的那个元素 img
    //binding:binding.value 指令等于号后面绑定的表达式的值 图片url
    // console.log(el, binding.value);
    //isIntersecting布尔值,绑定的图片进入视口就打印true,否则就是false
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      // console.log(isIntersecting);
      if (isIntersecting) {
        //图片进入视口区域
        el.src = binding.value;
      }
    });
  },
});
