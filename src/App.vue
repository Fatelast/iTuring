<template>
  <div id="app">
    <LeftNav></LeftNav>
    <Header></Header>
    <CartPage></CartPage>
    <Footer></Footer>
  </div>
</template>

<script>
// import LeftNav from '@/components/LeftNav/LeftNav'
// import Header from '@/components/Header/Header'
import CartPage from '@/views/product/CartPage/index.vue'
// import Footer from '@/components/Footer/Footer'

// import RegisterPage from '@/views/product/RegisterPage/index.vue'
// import Login from '@/views/product/Login/index.vue'
export default {
  name: 'App',
  components: {
    CartPage,
    // Footer,
    // Header,
    // LeftNav
  }
}
</script>

<style>
body,html,ul,li,h1,h2,h3 {
  padding:0;
  margin: 0;
}
ul,li {
  list-style: none;
}
</style>
