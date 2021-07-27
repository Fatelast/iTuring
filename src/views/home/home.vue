<template>
  <div class="content-view">
    <!-- 轮播图 -->
    <div class="banner-view">
      <div class="swiper-one">
        <Carousel />
      </div>
      <div class="banner-two">
        <!-- <div class="book-swiper-view"></div> -->
        <Carousel2 />
      </div>
    </div>

    <!-- 内容区 -->
    <div class="book-list hidden-sm">
      <!-- 第一栏 -->
      <div class="new-view">
        <!-- 标题 -->
        <div class="title">
          <span class="title-one">新书上市</span>
          <button class="right-btns">
            >
          </button>
        </div>
        <!-- 新书上市 内容区大盒子 -->
        <div class="new-books">
          <img
            class="new-img"
            src="../../assets/tuijian/tulingxinshu.png"
          >
          <!-- 内容区中盒子 -->
          <div class="new-items ">
            <!-- 小盒子 -->
            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>

            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>

            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>

            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>

            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>

            <div class="book-item">
              <div class="img-view">
                <img src="../../assets/tuijian/01nihuima.jpg">
              </div>
              <div class="info-view">
                <h3 class="book-name">你真的会写代码吗</h3>
                <p class="authors">Marco Faella（作者）</p>
                <p class="translators">雷威，李强（译者）</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- 第二栏 -->
      <div class="special-view">
        <!-- 标题 -->
        <div class="title">
          <span class="title-one">每周特价</span>
        </div>

        <div class="special-books">
          <img
            class="special-img"
            src="../../assets/tuijian/tejia.png"
          >
          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>
          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>
          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

        </div>
      </div>

      <!-- 第三栏 -->
      <div class="hot-view">

        <!-- 标题 -->
        <div class="title">
          <span class="title-one">热门图书</span>
        </div>

        <div class="hot-books">
          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

          <div class="book-item">
            <div class="img-view">
              <img src="../../assets/tuijian/01nihuima.jpg">
            </div>
            <div class="info-view">
              <h3 class="book-name">你真的会写代码吗</h3>
              <p class="authors">Marco Faella（作者）</p>
              <p class="translators">雷威，李强（译者）</p>
            </div>
          </div>

        </div>

        <a
          class="more-hot-books"
          href=""
        >查看全部热门书籍</a>
      </div>
    </div>
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import Carousel from "../../components/Carousel/index";
import Carousel2 from "../../components/Carousel-2/index";

export default {
  name: "home",
  components: {
    Carousel,
    Carousel2,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content-view {
  width: 1080px;
  margin: 0 auto;
}

/* 轮播图 */
.banner-view {
  display: flex;
  width: 1080px;
  height: 309px;
  margin: 16px 0 3px 0;
}
.swiper-one {
  width: 740px;
  height: 309px;
}
/* 第二个轮播 */
.banner-two {
  width: 320px;
  height: 309px;
  background: #f8fafb;
}

/* 内容展示 */
.book-list {
  width: 1080px;
  height: 2000px;
  overflow: hidden;
}
.new-view {
  display: block;
  width: 100%;
  height: 586px;
  background: #fff;
  margin: 24px 0;
}
.title {
  position: relative;
  width: 100%;
  height: 26px;
  line-height: 26px;
  font-weight: 600px;
  color: #333;
}
.title-one {
  font-weight: 600;
  font-size: 18px;
}
.right-btns {
  position: absolute;
  right: 0;
  top: 0;
  width: 26px;
  height: 26px;
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;
  background: #f6f9fb;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
}
.new-books {
  display: flex;
  flex-wrap: nowrap;
  box-sizing: inherit;
  width: 100%;
  height: 560px;
  /* border: 1px solid red; */
}
.new-img {
  width: 255px;
  height: 544px;
  margin: 16px 20px 0 0;
}
.new-items {
  display: flex;
  /* justify-content: space-between; */
  flex: 1;
  flex-wrap: wrap;
  height: 560px;
  /* border: 1px solid green; */
}
.book-item {
  position: relative;
  flex: 1;
  width: 255px;
  height: 264px;
  background: greenyellow;
  margin-top: 16px;
  min-width: 248px;
  max-width: 250px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: inherit;
  margin-right: 20px;
}
.img-view {
  width: 255px;
  height: 140px;
  padding: 8px 0;
  background: #eaf1f5;
}
.img-view:hover{
  transform: scale(1.05, 1.05);
}
.img-view img {
  display: block;
  height: 100%;
  margin: 0 auto;
}
.img-view img:hover {
  /* transform: scale(1.05, 1.05); */
}
.info-view {
  width: 223px;
  height: 108px;
  padding: 0 16px 0 16px;
  background: #f6f9fb;
  text-align: center;
  overflow: hidden;
}
.book-name {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  margin: 12px 0 8px;
}
.authors {
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.translators {
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.special-view {
  width: 100%;
  height: 306px;
}
.special-img {
  width: 255px;
  height: 263px;
  margin: 16px 20px 0 0;
}
.special-books {
  display: flex;
  width: 100%;
  /* margin-right: 16px; */
  /* justify-content: space-between; */
}

/* 第三栏 */
.hot-view {
  width: 100%;
  height: 352px;
  margin: 24px 0;
}
.hot-books {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.more-hot-books {
  display: block;
  width: 100%;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  margin: 24px auto 0;
  color: #4684e2;
  text-decoration: none;
}
</style>