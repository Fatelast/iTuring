<template>
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >

    <div class="pre-icon">预售</div>
    <div class="pre-dian">···</div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          class="book-img"
          src="../../assets/lunbo/l21.jpg"
          alt="123"
        />

        <h3 class="book-name">现代统计图形</h3>
        <p class="book-authors">赵鹏,谢益辉,黄湘云（作者）</p>
        <p class="book-translators">赵鹏,谢益辉,黄湘云（作者）</p>
      </div>
      <div class="swiper-slide">
        <img
          src="../../assets/lunbo/l22.png"
          alt="123"
        />
        <h3 class="book-name">现代统计图形</h3>
        <p class="book-authors">赵鹏,谢益辉,黄湘云（作者）</p>
        <p class="book-translators">赵鹏,谢益辉,黄湘云（作者）</p>
      </div>
      <div class="swiper-slide">
        <img
          src="../../assets/lunbo/l23.jpg"
          alt="123"
        />
        <h3 class="book-name">现代统计图形</h3>
        <p class="book-authors">赵鹏,谢益辉,黄湘云（作者）</p>
        <p class="book-translators">赵鹏,谢益辉,黄湘云（作者）</p>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  mounted() {
    // 将元素选择器改成dom元素
    this.swiper = new Swiper(this.$refs.swiper, {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true, //自动轮播

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
    console.log(this.swiper);
  },
};
</script>

<style scoped>
.swiper-container {
  text-align: center;
  cursor: pointer;
  margin: 0 20px;
}
.swiper-wrapper {
  height: 290px;
  width: 280px;
  font-size: 0;
  text-align: center;
  padding-top: 16px;
  cursor: pointer;
}
.swiper-slide img {
  height: 168px;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
}

.book-name {
  color: #1c355a;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 12px 0 8px;
}
.book-authors {
  color: #6f6f6f;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pre-icon, .pre-dian {
  position: absolute;
  top: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  z-index: 10;
}
.pre-icon {
  left: 0;
  color: #fff;
  background: url("../../assets/tuijian/huahua.svg") 50% no-repeat;
}
.pre-dian {
  right: 0;
  color: #333;
  font-size: 14px;
}
</style>