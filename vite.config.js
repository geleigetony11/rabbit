import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

//element-plus按需引入
//自动导入
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
      //自动引入插件的配置
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        //1.配置elementPlus采用sass样式配色系统
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
  ],
  resolve: {
    //实际的路径转化 @ -> src
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //2.自动导入定制化样式文件进行样式重叠
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `,
        //配置自动导入var.scss
      },
    },
  },
});
