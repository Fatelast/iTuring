import req from '../utils/request'
// 获取所有三级分类目录
export const reqGetAllCategory = () => {
  return req({
    url: '/Category/All',
    method: 'get'
  })
}
// 请求当前页码的书本列表
export const reqGetAdvancedBook = (dataObj) => {
  return req({
    url: '/Search/Advanced',
    method: 'post',
    data: dataObj
  })
}
