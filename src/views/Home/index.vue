<template>
  <!-- <div class="container">
    <div class="leftPage">
      <LeftNav />
    </div>
    <div class="rightPage">
      <div class="header"><Header /></div>
      <div class="content">
        <router-view />
        <Footer class="margin" />
      </div>
    </div>
  </div> -->
  <div>
    <LeftHeader />
    <div class="showPage">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '../../components/Header/Header.vue'
// import LeftNav from '../../components/LeftNav/LeftNav.vue'
// import Footer from '../../components/Footer/Footer.vue'
import LeftHeader from '../../components/LeftHeader'
export default {
  name: 'Home',
  components: {
    // Header,
    // Footer,
    // LeftNav
    LeftHeader
  }
}
</script>
<style scoped>
.showPage {
  margin-left: 172px;
  margin-top: 56px;
}
/* .container {
  display: flex;
}
.container > .leftPage {
  position: fixed;
  z-index: 2;
}
.container > .rightPage {
  position: relative;
}
.container > .rightPage > .header {
  background-color: white;
  position: fixed;
  margin-left: 170px;
}
.container > .rightPage > .content {
  margin-top: 70px;
  margin-left: 170px;
}
.container > .rightPage > .content .margin {
  margin-top: 30px;
} */
</style>
