<script setup>
import { RouterLink, RouterView } from "vue-router";
//这个配置项仅作提示,不会时实际转化路径,vite.config.js中才是实际转化
import HelloWorld from "@/views/HomeView.vue";
</script>

<template>
  <RouterView />
</template>

