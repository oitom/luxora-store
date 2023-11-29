<template>
  <Header></Header>
  <Menu></Menu>
  <Slider></Slider>
  <MainCategories></MainCategories>
  <MainProducts></MainProducts>
  <Subscribe></Subscribe>
  <Footer></Footer>
</template>
<script>

import Header from '@/layout/Header.vue'
import Menu from '@/layout/Menu.vue'
import Slider from '@/layout/Slider.vue'
import MainCategories from '@/layout/MainCategories.vue'
import MainProducts from '@/layout/MainProducts.vue'
import Subscribe from '@/layout/Subscribe.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: "Home",
  components: { 
    Header,
    Menu,
    Slider,
    MainCategories,
    MainProducts,
    Subscribe,
    Footer,
  },
}
</script>
<style scoped>

</style>