import request from "../utils/request";

export default {
	//获取轮播图大图列表
	reqGetCarouselBigImg() {
		return request({
			method: "GET",
			url: "/banner",
		});
	},
	//获取轮播图小图列表
	reqGetCarouselPreSale() {
		return request({
			method: "GET",
			url: "/",
		});
	},

	// 获取请求热门图书、每周特价数据
	reqGetRecommendPageText() {
		return request({
			method: "GET",
			url: "/Page/Home",
		});
	},
};
