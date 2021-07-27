<template>
  <div class="footer">
    <div class="footer-title">
      <div class="left">
        <ul class="context">
          <li>
            <h5>诚征译者</h5>
            <p>成为图灵图书的优秀译者</p>
          </li>
          <li>
            <h5>注册刮刮卡</h5>
            <p>获得银子与电子版优惠码</p>
          </li>
          <li>
            <h5>纸质书开通预售</h5>
            <p>第一时间寄给你！</p>
          </li>
        </ul>
        <div class="friend-link">
          <h4>媒体平台</h4>
          <div class="friend-logo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhihu"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-toutiao"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-douyin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Bzhan1beifen"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="code">
        <h4>关注我们</h4>
        <div class="box">
          <div class="code-box">
            <img src="./group-qrcode.a2be38de.png" />
            <p>关注服务号</p>
            <p>加入读者群</p>
          </div>
          <div class="code-box">
            <img src="./group-qrcode.a2be38de.png" />
            <p>关注图灵教育</p>
            <p>分享技术知识</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-address">
      <div class="footer-link">
        <span>加入我们 </span>
        <div class="link-border"></div>
        <span>联系我们</span>
      </div>
      <p>
        京ICP备11039595号 京公网安备11010502011375 新出发京零字第东110150号
        统一社会信用代码 91110101777086608F
      </p>
      <p>2005-2020 © 北京图灵文化发展有限公司 · All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
  
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.footer {
  max-width: 1108px;
  margin: 0 auto;
}
.footer-title {
  /* padding: 24px 0 20px 54px; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: flex-start;
}
.context {
  width: 760px;
  display: flex;
  justify-content: space-between;
}
h5 {
  color: #1c355a;
  font-weight: 500;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
}
.context li p {
  font-size: 12px;
  color: #6f6f6f;
  height: 16px;
  line-height: 16px;
  margin-top: 6px;
}
.icon {
  font-size: 30px;
  margin: 10px;
}
.left .friend-link {
  margin-top: 20px;
}
h4 {
  color: #1c355a;
  font-size: 16px;
  font-weight: 500;
  height: 16px;
  line-height: 16px;
  margin: 0 0 8px;
}
.code .code-box img {
  display: block;
  width: 80px;
  margin-bottom: 4px;
}
.code-box p {
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  color: #000;
}
.box {
  display: flex;
}
.footer-link {
  display: flex;
  justify-content: center;
}
.footer-link span {
  font-size: 16px;
  font-weight: bold;
}
.link-border {
  width: 1px;
  height: 10px;
  margin: 6px 20px 0px 20px;
  background: #dbdbdb;
}
.footer-address p {
  margin: 10px 0 10px 0;
  text-align: center;
}
</style>