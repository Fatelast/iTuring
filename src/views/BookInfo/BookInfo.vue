<template>
  <div class="bookInfoContainer">
    <!-- 详情页头部 -->
    <div class="book-infos-view">
      <!-- 封面及作者 -->
      <div class="book-infos">
        <div class="book-img-box">
          <img src="./images/封面.jpg" alt="" />
        </div>
        <div class="book-info-box">
          <div class="book-state">
            <span class="state">上市销售</span>
            <span>图灵程序设计丛书</span>
          </div>
          <h1>你真的会写代码吗</h1>
          <div class="authors">
            <span>作者：</span>
            <span class="name">[意]马尔科·法埃拉（Marco Faella）</span>
          </div>
          <div class="translator">
            <span>译者：</span>
            <span class="name">雷威，李强</span>
          </div>
        </div>
      </div>
      <!-- 用户操作 -->
      <div class="book-counts">
        <div class="count-item">
          <div class="count-img">
            <img src="./images/want-read-icon.030fb9dc.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">加入心愿单</span>
            <div class="count-num">129</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/recommend-icon.f76f2546.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">推荐</span>
            <div class="count-num">11</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/read-online-icon.db682cf7.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">在线阅读</span>
            <div class="count-num">1.2K</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/ebook-download-icon.8efa1dbf.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">随书下载</span>
            <div>
              <span class="text">文件</span>
              <span class="num-text">2</span>
            </div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/want-read-icon.030fb9dc.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">分享</span>
            <img src="./images/wb-share.de904f1b.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 购买方式 -->
    <div class="buy-way">
      <div class="title">购买方式</div>
      <div class="flex-view">
        <div class="buy-way-item">
          <div class="name">纸质书</div>
          <div class="price">
            <span class="discount-price">¥ 73.64</span>
            <span class="original-price">¥89.8</span>
            <button class="buy-btn">+购书袋</button>
          </div>
        </div>
        <div class="buy-way-item">
          <div class="name">纸质书</div>
          <div class="price">
            <span class="discount-price">¥ 73.64</span>
            <span class="original-price">¥89.8</span>
          </div>
          <button class="buy-btn">+购书袋</button>
        </div>
        <div class="buy-way-item">
          <div class="name">纸质书</div>
          <div class="price">
            <span class="discount-price">¥ 73.64</span>
            <span class="original-price">¥89.8</span>
          </div>
          <button class="buy-btn">+购书袋</button>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="main-content">
      <el-tab-pane label="图书介绍" class="tab">
        <div class="book-intro">
          <h4 class="title">特别说明</h4>
          <div class="text">
            <p>再简单的代码，也有更好的实现方式</p>
            <p><br /></p>
          </div>
          <ul>
            <li><p>Java Champion凯·霍斯特曼作序</p></li>
            <li><p>1个示例，7次重构，18种实现，助你明辨优劣代码</p></li>
            <li><p>每章都配有小测验及习题答案，学以致用</p></li>
          </ul>
          <h4 class="title">简介</h4>
          <div class="text">
            <p>
              本书的核心思想是通过对各方面的代码质量进行比较，使读者了解经验丰富的开发者拥有的思维模式。为了展示软件开发最佳实践，作者对一个水容器示例进行多次重构，讨论了18种实现，分别从7个方面改进代码质量：时间效率、空间效率、监控与可靠性、测试与可靠性、可读性、线程安全、可复用性。在此过程中，作者还探讨了与计算机科学、Java编程以及软件工程相关的专业话题，这些知识都有助于读者写出更好的代码。
            </p>
            <p><br /></p>
          </div>
          <h4 class="title">本书特色</h4>
          <div class="text">
            <p>
              再复杂的开发任务，也有巧妙的解决方案。再简单的代码，也有更好的实现方式。本书为追求软件质量的你而作，书中通过一个简单的水容器示例，从7个维度展示了如何写好代码。本书以Java为例，所演示的技巧适用于任何面向对象语言。在面对多样化的开发需求时，这些技巧将帮助你掌握权衡之术。
              好代码：1个示例，7次重构（时间效率、空间效率、可靠性、稳健性、可读性、可复用性、线程安全）
              “构建高质量的软件向来不是简单的事情，重新审视优秀的设计原则和技巧总是没错的。在这本书中，你会发现一个全新的视角。希望你能像我一样喜欢这本书。”
              ——凯·霍斯特曼，《Java核心技术》《写给大忙人看的Java核心技术》等书作者
            </p>
            <p><br /></p>
          </div>
          <h4 class="title">作译者介绍</h4>
          <div class="text">
            <p>
              【作者简介】 马尔科·法埃拉（Marco Faella）
              意大利那不勒斯费德里克二世大学副教授，面向本科生和研究生讲授高级编程、软件工程、面向对象设计、编译器与程序分析、游戏设计等课程，同时为信息技术从业者开发和讲授Java编程课。另外，他也是爱思唯尔、施普林格等旗下期刊的审稿人。
              【译者简介】 雷威
              信公科技首席架构师，曾在阿里巴巴中间件团队任职。沉浸软件行业十余年，热衷于软件架构、研发效能、分布式、云原生等领域，相信技术能改变世界。
              李强
              信公科技CTO，浙江中金黄金集团前副总裁兼CTO，曾就职于美国道富银行。技术涉猎广泛，在产品设计开发、架构设计、技术团队管理等方面有丰富经验。另译有《监控的艺术》《扩展jQuery》等。
            </p>
            <p><br /></p>
          </div>
          <h4 class="title">出版信息</h4>
          <div class="text">
            <ul class="pd-12">
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">你真的会写代码吗</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>系</span>
                  <span>列</span>
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">图灵程序设计丛书</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>执</span>
                  <span>行</span>
                  <span>编</span>
                  <span>辑</span>
                </span>
                <span class="published-value"
                  >关于本书的问题，请联系 <a href="#">杨琳</a></span
                >
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>出</span>
                  <span>版</span>
                  <span>日</span>
                  <span>期</span>
                </span>
                <span class="published-value">2021-07-15</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">978-7-115-56634-8</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>定</span>
                  <span>价</span>
                </span>
                <span class="published-value">251</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>印</span>
                  <span>刷</span>
                  <span>方</span>
                  <span>式</span>
                </span>
                <span class="published-value">单色</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>开</span>
                  <span>本</span>
                </span>
                <span class="published-value">16开</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>出</span>
                  <span>版</span>
                  <span>状</span>
                  <span>态</span>
                </span>
                <span class="published-value">上市销售</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>原</span>
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value"
                  >Seriously Good Software: Code That Works, Survives, and
                  Wins</span
                >
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>原</span>
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">9781617296291</span>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="在线阅读" class="tab">
        <div class="catalog">
          <div class="catalog-item flex-view">
            <span>版权声明</span>
            <span class="title">阅读</span>
          </div>
          <div class="catalog-item flex-view">
            <span>程序员之旅</span>
            <span class="title">阅读</span>
          </div>
          <div class="catalog-item flex-view">
            <span>序</span>
            <span class="title">阅读</span>
          </div>
          <div class="catalog-item flex-view">
            <span>前言</span>
            <span class="title">阅读</span>
          </div>
          <div class="catalog-item flex-view">
            <span>致谢</span>
            <span class="title">阅读</span>
          </div>
          <div class="catalog-item flex-view">
            <span>第 1 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
          <div class="catalog-item flex-view">
            <span>第 2 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
          <div class="catalog-item flex-view">
            <span>第 3 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
          <div class="catalog-item flex-view">
            <span>第 4 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
          <div class="catalog-item flex-view">
            <span>第 5 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
          <div class="catalog-item flex-view">
            <span>第 6 章 软件质量和待解决问题</span>
            <img src="./images/lock.584dc0b5.svg" class="title" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" class="tab">
        <div class="book-comment">
          <div class="title">发表新的评论</div>
          <div class="publish flex-view">
            <img src="./images/avatar.jpg" alt="" class="mine-img" />
            <input
              type="text"
              placeholder="说点什么..."
              class="content-input"
            />
            <button class="send-btn">发送</button>
          </div>
        </div>
        <div class="tab-view flex-view">
          <div class="count-text">
            共有4条评论
          </div>
          <div class="tab-box flex-view">
            <span class="tab-select">热门</span>
            <div class="line"></div>
            <span class="tab-select">最新</span>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment-item">
            <div class="flex-item flex-view">
              <div class="flex-view">
                <img src="./images/27387.png" alt="" />
                <div class="person">
                  <div class="name">金山YIN霸</div>
                  <div class="time">2020-05-15 04:53:09</div>
                </div>
              </div>
              <div class="float-right">
                <span>推荐 </span>
                <span>回复</span>
              </div>
            </div>
            <p class="comment-content">
              动作真快！20年3月的书已经开始翻译了，当然manning 有MEAP
            </p>
          </div>
          <div class="comment-item">
            <div class="flex-item flex-view">
              <div class="flex-view">
                <img src="./images/27387.png" alt="" />
                <div class="person">
                  <div class="name">金山YIN霸</div>
                  <div class="time">2020-05-15 04:53:09</div>
                </div>
              </div>
              <div class="float-right">
                <span>推荐 </span>
                <span>回复</span>
              </div>
            </div>
            <p class="comment-content">
              动作真快！20年3月的书已经开始翻译了，当然manning 有MEAP
            </p>
          </div>
          <div class="comment-item">
            <div class="flex-item flex-view">
              <div class="flex-view">
                <img src="./images/27387.png" alt="" />
                <div class="person">
                  <div class="name">金山YIN霸</div>
                  <div class="time">2020-05-15 04:53:09</div>
                </div>
              </div>
              <div class="float-right">
                <span>推荐 </span>
                <span>回复</span>
              </div>
            </div>
            <p class="comment-content">
              动作真快！20年3月的书已经开始翻译了，当然manning 有MEAP
            </p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="勘误" class="tab">
        <template>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-tab-pane>
      <el-tab-pane label="相关文章" class="tab">相关文章</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "BookInfo",
};
</script>

<style lang="less" scoped>
.bookInfoContainer {
  width: 100%;
  /* background-color: pink; */
}

/* 详情页头部 */
.book-infos-view {
  min-width: 1080px;
  width: 70%;
  display: flex;
  margin: 0px auto;
  padding: 40px 0;
  justify-content: space-between;
}

/* 封面及作者 */
.book-infos {
  display: flex;
}

.book-img-box {
  width: 235px;
  height: 320px;
  margin: 0 40px 0 0;
  img {
    width: 235px;
    height: 302px;
  }
}

.book-state .state {
  font-weight: 500;
  color: #4684e2;
  background: rgba(70, 132, 226, 0.1);
  border-radius: 2px;
  padding: 5px 8px;
  margin-right: 16px;
}

.book-info-box {
  width: 550px;
  height: 320px;
  h1 {
    font-size: 24px;
    line-height: 32px;
    margin: 16px 0;
  }
}

.authors {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
  color: #787878;
  .name {
    color: #315c9e;
    white-space: normal;
  }
}

.translator {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
  color: #787878;
  .name {
    color: #315c9e;
    white-space: normal;
  }
}

/* 用户操作 */
.book-counts {
  width: 235px;
  height: 320px;
  flex: 0 0 235px;
  margin-left: 20px;
}

.count-item {
  width: 100%;
  height: 64px;
  align-items: center;
  display: flex;
  .count-img {
    margin: 0 24px 0 0;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .count-box {
    display: flex;
    width: 100%;
    height: 100%;
    line-height: 24px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dae1e7;
    .text {
      color: #787878;
      font-size: 12px;
      margin-right: 4px;
      font-weight: 400;
      vertical-align: middle;
    }
    img {
      width: 30px;
      height: 30px;
      margin-left: 16px;
    }
    .count-title {
      color: #152844;
      font-weight: 600;
      font-size: 16px;
      display: block;
      height: 18px;
    }
  }
}

.count-item .count-item .count-box .count-num,
.count-item .count-box div .num-text {
  font-weight: 600;
  font-size: 20px;
  color: #152844;
}

/* 购买方式 */
.buy-way {
  min-width: 1080px;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}

.buy-way .title {
  font-weight: 600;
  font-size: 18px;
  height: 26px;
  line-height: 26px;
  color: #152844;
  margin-bottom: 12px;
}

.buy-way .flex-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .buy-way-item {
    width: 235px;
    height: 127px;
    border: 1px solid #cedce4;
    border-radius: 4px;
    background-color: #fbfeff;
    margin-right: 20px;
    padding: 10px;
    .name {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #152844;
      height: 24px;
      margin-bottom: 22px;
    }
    .price {
      line-height: 24px;
    }
    .discount-price {
      color: #ff7b31;
      font-size: 18px;
      font-weight: 700;
    }
    .original-price {
      text-decoration: line-through;
      margin-left: 8px;
      color: #787878;
      font-weight: 400;
    }
    .buy-btn {
      display: block;
      background: #4684e2;
      border-radius: 4px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      height: 32px;
      line-height: 32px;
      width: 76px;
      outline: none;
      border: none;
      margin-top: 12px;
    }
  }
}

/* 主要内容 */
.main-content {
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
}

/* 图书介绍 */
/deep/.is-active {
  font-weight: 600;
  color: #152844 !important;
}

.main-content .book-intro {
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #152844;
    height: 16px;
    border-left: 4px solid #4684e2;
    margin: 27px 0 11px;
    padding-left: 8px;
  }
  .text {
    color: #484848;
    font-size: 16px;
    line-height: 26px;
    padding-left: 12px;
    margin: 11px 0;
  }
}

.book-intro .text .pd-12 {
  .published-item {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    color: #484848;
  }
  .flex-view {
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-end;
  }
  .published-item .published-label {
    justify-content: space-between;
    flex: 0 0 56px;
    margin-right: 24px;
    text-align: justify;
  }
}

/* 在线阅读 */
.flex-view {
  display: flex;
  justify-content: space-between;
}

.catalog-item {
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
  font-size: 14px;
  height: 46px;
}

/* 评论 */
.book-comment {
  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    color: #152844;
    margin: 24px 0 12px;
  }
  .flex-view {
    display: flex;
    justify-content: space-between;
  }
}

.book-comment .publish {
  align-items: center;
  .mine-img {
    flex: 0 0 40px;
    margin-right: 12px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .content-input {
    border-width: 0;
    border-color: #dae1e7;
    flex: 1;
    background: #f6f9fb;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    color: #484848;
    padding: 5px 12px;
    white-space: nowrap;
  }
  .send-btn {
    border-width: 0;
    border-color: #dae1e7;
    margin-left: 10px;
    background: #4684e2;
    border-radius: 4px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
}

.book-comment .tab-view {
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
  margin: 24px 0;
  .tab-box {
    display: flex;
    color: #5f77a6;
    align-items: center;
    .line {
      width: 1px;
      height: 12px;
      margin: 0 12px;
      background: #cedce4;
    }
  }
}

.comments-list {
  margin: 30px 0;
  .flex-item img {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 50%;
    cursor: pointer;
  }
  .name {
    color: #152844;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    cursor: pointer;
  }
  .comment-content {
    margin-top: 8px;
    color: #484848;
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 16px;
    border-bottom: 1px dashed #cedce4;
    margin-left: 52px;
    overflow: hidden;
  }
}

.comments-list .flex-item .float-right {
  color: #4684e2;
  font-size: 14px;
}
</style>
