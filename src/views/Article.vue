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
        <ArticleItem
          v-for="item in articleListItems"
          :key="item.id"
          :itemData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import { getArticle } from "../utils/api";
export default {
  name: "Article",
  components: {
    ArticleItem,
  },
  data() {
    return {
      count: 0,
      articleListItems: [],
      articleObject: {
        url: "/Article",
        params: {
          sort: "new",
          page: 1,
          tab: "",
        },
      },
    };
  },
  methods: {
    async getArticleData({ url, params, method = "GET" }) {
      let { articleListItems } = await getArticle({ url, params, method });
      this.articleListItems.push(articleListItems);
    },
  },
  created() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 变量 windowHeight 是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 变量 scrollHeight 是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight >= scrollHeight - 20) {
        console.log(this.articleObject.params.page);
        this.articleObject.params.page += 1;
        console.log(this.articleObject.params.page);
        this.getArticleData(this.articleObject);
      }
    };
  },

  async mounted() {
    this.getArticleData(this.articleObject);
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
