<template>
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >

    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="../../assets/lunbo/1.jpg"
          alt="123"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="../../assets/lunbo/2.jpg"
          alt="123"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="../../assets/lunbo/3.jpg"
          alt="123"
        />
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
    console.log();
  },
};
</script>

<style scoped>
.swiper-container {
  cursor: pointer;
  border-radius: 8px;
}

.swiper-slide {
  width: 100%;
  height: 309px;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}
</style>