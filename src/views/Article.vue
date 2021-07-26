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
    <div class="content-list-view">
      <div class="content-nav">
        <span>排序方式:</span>
        <span class="tab-item">最新</span>
        <span class="tab-item">最热</span>
        <span class="tab-item">推荐</span>
      </div>
      <!-- 列表 -->
      <div class="articleList">
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
export default {
  name: "Article",
  components: {
    ArticleItem,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style lang="less">
/* 菜单开始 */
.content-margin {
  display: flex;
  margin: 88px 0;
}
.content-menu {
  height: fit-content;
  margin-right: 20px;
  box-sizing: border-box;
  min-width: 235px;
  padding: 4px 16px;
  border: 1px solid #cedce4;
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
}

.menu-item-select {
  color: #4684e2;
}
/* 菜单三角 */
.traingle {
  position: absolute;
  right: 0;
  top: 16px;
  border-left: 6px solid #4684e2;
  border-right: none;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
/* 菜单结束 */

/* 列表开始 */
.content-list-view {
  flex: 1;
}
.content-nav {
  position: relative;
  height: 42px;
  line-height: 42px;
  color: #6c6c6c;
  display: flex;
}
.tab-item {
  width: 44px;
  text-align: center;
  color: #999;
  cursor: pointer;
  margin-right: 16px;
}
.articleList {
  width: 745px;
}
</style>
