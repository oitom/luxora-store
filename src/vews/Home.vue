<template>
  <Header></Header>
  <Menu></Menu>
  <Slider></Slider>
</template>
<script>
import Header from '@/layout/Header.vue'
import Menu from '@/layout/Menu.vue'
import Slider from '@/layout/Slider.vue'

export default {
  name: "Home",
  components: { 
    Header,
    Menu,
    Slider,
  },
}
</script>
<style scoped>

</style>