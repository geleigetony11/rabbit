import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";
import { ref } from "vue";

//命名一般用use+实例名+Store
export const useCategoryStore = defineStore("category", () => {
  //导航列表数据管理
  //导航列表数据 state
  const categoryList = ref([]);

  //获取导航数据的方法 action
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  return { categoryList, getCategory };
});
