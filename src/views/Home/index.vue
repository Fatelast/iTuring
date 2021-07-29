<template>
  <div>
    <LeftHeader />
    <div class="showPage">
      <router-view />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftHeader from '@/components/LeftHeader'
// import Footer from '@/components/Footer/Footer'
export default {
  name: 'Home',
  components: {
    LeftHeader,
    // Footer
  }
}
</script>
<style scoped>
.showPage {
  margin-left: 172px;
  margin-top: 56px;
}
</style>
