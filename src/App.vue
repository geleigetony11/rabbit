<script setup>
import { RouterLink, RouterView } from "vue-router";
//这个配置项仅作提示,不会时实际转化路径,vite.config.js中才是实际转化
</script>

<template>
  <!-- 一级路由组件出口 -->
  <!-- 也可以写<router-view  /> -->
  <RouterView />
</template>
