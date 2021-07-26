<template>
  <div class="content-margin">
    <!-- 左侧菜单 -->
    <div class="content-menu">
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>所有文章</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>7日热门</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>30日热门</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>我的关注</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>我的搜藏</span>
        <div class="traingle"></div>
      </div>
      <!-- 单个项目 -->
      <div class="menu-item">
        <span class>我的文章</span>
        <div class="traingle"></div>
      </div>
    </div>
    <!-- 右侧列表 -->
    <div class="content-list-view"></div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style>
.content-margin {
  display: flex;
}
.content-menu {
  box-sizing: border-box;
  min-width: 235px;
  padding: 4px 16px;
  border: 1px solid #cedce4;
}
.menu-item {
  position: relative;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #152844;
  border-bottom: 1px dashed #cedce4;
  cursor: pointer;
}
.menu-item:last-of-type {
  border-bottom: 0px;
}
.menu-item-select {
  color: #4684e2;
}
.traingle {
  position: absolute;
  right: 0;
  top: 16px;
  border-left: 6px solid #4684e2;
  border-right: none;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
</style>
