import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

//element-plus按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //element-plus配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    //实际的路径转化 @ -> src
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
