import axios from 'axios';

// 获取图书的详细信息
export const getBookInfo = () => {
  return axios.get('https://api.ituring.com.cn/api/Book/2811')
    .then(res => {
      console.log(res);
    })
}
