import http from "@/utils/http";
//默认导出引入可改名

//面包屑
/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return http({
    url: "/category",
    //get请求
    params: {
      id,
    },
  });
};
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return http({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
