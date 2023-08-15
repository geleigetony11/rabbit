//封装分类数据业务相关代码
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";

export const useCategory = () => {
  const route = useRoute();
  const categoryData = ref({});
  //设置了一个默认参数,如果调用的时候传参,就用传的参,不传就用默认参数
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });

  //目标:路由参数变化时,可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    //存在问题:使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id);
  });

  return { categoryData };
};
