//定义懒加载插件

//检查图片进入视口的函数
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    //懒加载指令逻辑
    //定义全局指令,使用时用 v-img-lazy=""指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        //el:指令绑定的那个元素 img
        //binding:binding.value 指令等于号后面绑定的表达式的值 图片url
        //isIntersecting布尔值,绑定的图片进入视口就打印true,否则就是false
        //useIntersectionObserver对于元素的监听是一致存在的,不手动停止监听,浪费内存.该函数有一个stop方法
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            //图片进入视口区域
            // console.log(isIntersecting);
            el.src = binding.value;
            //停止监听
            stop();
          }
        });
      },
    });
  },
};
