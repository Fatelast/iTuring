<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
    <CartPage></CartPage>
  </div>
</template>

<script>
import CartPage from '@/views/product/CartPage/index.vue'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
// import RegisterPage from '@/views/product/RegisterPage/index.vue'
// import Login from '@/views/product/Login/index.vue'
export default {
  name: 'App',
  components: {
    CartPage,
    Footer,
    Header
  }
}
</script>

<style></style>
