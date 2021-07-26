<template>
  <div class="articleItem">
    <h3 class="title">2021年Java软件开发有前途吗?</h3>
    <div class="info">
      <div class="left-info">
        <img class="left-info-avatar" src="../assets/logo.png" alt="" />
        <span>易牛小朗</span>
        <span>2021-07-24</span>
      </div>
      <div class="right-num">
        <span>0推荐</span>
        <span>98阅读</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
};
</script>

<style lang="less">
.articleItem {
  border-bottom: 1px dashed #cedce4;
  padding: 16px 0;
  .title {
    font-size: 18px;
    height: 28px;
    line-height: 28px;
    margin: 12px 0;
    cursor: pointer;
  }
}
.info {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  .left-info {
    .left-info-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
/* .info:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
} */
</style>
