<template>
  <div class="bookInfoContainer">
    <!-- 详情页头部 -->
    <div class="book-infos-view">
      <!-- 封面及作者 -->
      <div class="book-infos">
        <div class="book-img-box">
          <img
            :src="
              `https://file.ituring.com.cn/LargeCover/${bookInfoList.coverKey}`
            "
            alt=""
          />
        </div>
        <div class="book-info-box">
          <div class="book-state">
            <span class="state">上市销售</span>
            <span>{{ bookInfoList.bookCollectionName }}</span>
          </div>
          <h1>{{ bookInfoList.name }}</h1>
          <div class="authors">
            <span>作者：</span>
            <span class="name">{{ bookInfoList.authorNameString }}</span>
          </div>
          <div class="translator">
            <span>译者：</span>
            <span class="name">{{ bookInfoList.translatorNameString }}</span>
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
            <div class="count-num">{{ bookInfoList.favCount }}</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/recommend-icon.f76f2546.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">推荐</span>
            <div class="count-num">{{ bookInfoList.voteCount }}</div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/read-online-icon.db682cf7.svg" alt="" />
          </div>
          <div class="count-box">
            <span class="count-title">在线阅读</span>
            <div class="count-num">{{ bookInfoList.viewCount }}</div>
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
              <span class="num-text">{{
                bookInfoList.resources ? bookInfoList.resources.length : 0
              }}</span>
            </div>
          </div>
        </div>

        <div class="count-item">
          <div class="count-img">
            <img src="./images/share-icon.01325570.svg" alt="" />
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
        <div
          class="buy-way-item"
          v-for="salesInfo in salesInfos"
          :key="salesInfo.edition"
          v-show="salesInfo.canBeSaled"
        >
          <div class="name">
            {{ salesInfosObj[salesInfo.edition].kind }}
          </div>
          <div class="price" v-if="salesInfo.edition !== 8">
            <span class="discount-price">¥{{ salesInfo.discountPrice }}</span>
            <span
              class="original-price"
              v-if="salesInfo.discountPrice !== salesInfo.price"
              >¥{{ salesInfo.price }}</span
            >
            <el-button icon="el-icon-plus" class="buy-btn" type="primary">{{
              salesInfosObj[salesInfo.edition].join
            }}</el-button>
          </div>
          <div v-else>
            <el-button class="buy-left" type="primary" size="mini">
              <img src="./images/buy-dangdang.96fdd8ae.svg" alt="" />
              当当
            </el-button>
            <el-button class="buy-right" type="primary" size="mini">
              <img src="./images/buy-jingdong.1d483f5f.svg" alt="" />
              京东
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <!--v-model="activeName" @tab-click="handleClick" -->
    <el-tabs class="main-content">
      <el-tab-pane label="图书介绍" class="tab">
        <div class="book-intro" v-if="bookInfoList.briefIntro">
          <!-- 特别说明 -->
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
          <!-- 简介 -->
          <h4 class="title">简介</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.abstract }}
            </p>
            <p><br /></p>
          </div>
          <!-- 本书特色 -->
          <h4 class="title">本书特色</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.highlight }}
            </p>
            <p><br /></p>
          </div>
          <!-- 作译者介绍 -->
          <h4 class="title">作译者介绍</h4>
          <div class="text">
            <p>
              {{ bookInfoList.briefIntro.authorInfo }}
            </p>
            <p><br /></p>
          </div>
          <!-- 出版信息 -->
          <h4 class="title">出版信息</h4>
          <div class="text">
            <ul class="pd-12">
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">{{ bookInfoList.name }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>系</span>
                  <span>列</span>
                  <span>书</span>
                  <span>名</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.bookCollectionName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>执</span>
                  <span>行</span>
                  <span>编</span>
                  <span>辑</span>
                </span>
                <span class="published-value"
                  >关于本书的问题，请联系
                  <a href="#">{{
                    bookInfoList.contributor.Editor[0].name
                  }}</a></span
                >
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>出</span>
                  <span>版</span>
                  <span>日</span>
                  <span>期</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.publishDate
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">{{ bookInfoList.isbn }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>定</span>
                  <span>价</span>
                </span>
                <span class="published-value">{{ salesInfos[0].price }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>页</span>
                  <span>数</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.pageNumber
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>印</span>
                  <span>刷</span>
                  <span>方</span>
                  <span>式</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.bookPrintName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>开</span>
                  <span>本</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.paperEditionInfo.pageSizeName
                }}</span>
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
                <span class="published-value">{{
                  bookInfoList.originalBookInfo.originalBookName
                }}</span>
              </li>
              <li class="published-item flex-view">
                <span class="published-label flex-view">
                  <span>原</span>
                  <span>书</span>
                  <span>号</span>
                </span>
                <span class="published-value">{{
                  bookInfoList.originalBookInfo.originalBookIsbn
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="在线阅读" class="tab">
        <div class="catalog" v-if="bookInfoList.ebook">
          <div
            class="catalog-item flex-view"
            v-for="chapter in bookInfoList.ebook.chapters"
            :key="chapter.id"
          >
            <span>{{ chapter.subject }}</span>
            <span v-if="chapter.isFree" class="title">阅读</span>
            <img v-else src="./images/lock.584dc0b5.svg" class="title" />
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
        </div>
        <div
          class="comments-list"
          v-for="discuss in discussList.comments"
          :key="discuss.id"
        >
          <div class="comment-item">
            <div class="flex-item flex-view">
              <div class="flex-view">
                <img :src="`https://file.ituring.com.cn/LargeCover/${discuss.userAvatarImageKey}`" alt="" />
                <div class="person">
                  <div class="name">{{ discuss.userNickName }}</div>
                  <div class="time">{{discuss.commentDate}}</div>
                </div>
              </div>
              <div class="float-right">
                <span>推荐 </span>
                <span>回复</span>
              </div>
            </div>
            <p class="comment-content">
              {{discuss.content}}
            </p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="勘误" class="tab">
        <template>
          <el-select value="是否确认" placeholder="请选择">
            <el-option value="未确认"> </el-option>
            <el-option value="已确认"> </el-option>
          </el-select>
        </template>
        <template>
          <el-select value="介质" placeholder="请选择">
            <el-option value="电子书"> </el-option>
            <el-option value="纸质版"> </el-option>
          </el-select>
        </template>
        <template>
          <el-select value="类型" placeholder="请选择">
            <el-option value="文字格式错误"> </el-option>
            <el-option value="技术错误"> </el-option>
            <el-option value="建议"> </el-option>
          </el-select>
        </template>
      </el-tab-pane>
      <el-tab-pane label="相关文章" class="tab">相关文章</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getBookInfo, getdiscuss } from "../../api/bookInfo";
export default {
  name: "BookInfo",
  data() {
    return {
      bookInfoList: {}, //详情页总数据
      salesInfos: [], //购买方式的种类
      salesInfosObj: {
        1: { kind: "纸质书", join: "购书袋" },
        4: { kind: "电子书", join: "购书袋" },
        5: { kind: "样书", join: "样书袋" },
        8: { kind: "其他渠道" },
      },
      discussList: {}, //评论数据
    };
  },
  async mounted() {
    const bookInfoList = await getBookInfo("2811");
    const discussList = await getdiscuss("2811");
    this.bookInfoList = bookInfoList;
    this.salesInfos = bookInfoList.salesInfos;
    this.discussList = discussList;
  },
};
</script>

<style lang="less" scoped>
.bookInfoContainer {
  width: 100%;
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

.count-item .count-box .count-num,
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
  justify-content: flex-start;
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
      color: #fff;
      margin-top: 12px;
    }
    .buy-left {
      background: #ec4737;
      color: #fff;
    }
    .buy-right {
      background: #d1382c;
      color: #fff;
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
    justify-content: flex-start;
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
