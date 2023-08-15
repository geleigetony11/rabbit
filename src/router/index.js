import { createRouter, createWebHistory } from "vue-router";
//createRouter创建路由实例
//createWebHistory创建history模式的路由
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "", //这个是默认页
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
      ],
    },
    {
      path: "/Login",
      component: Login,
    },
  ],
});

export default router;
