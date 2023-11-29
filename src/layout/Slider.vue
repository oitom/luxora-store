<template>
  <div id="slider" class="hero-slider">
    
    <div class="slider-item th-fullpage hero-area" :style="`background-image: url(${slider.img});`" v-for="(slider,idx) in sliders" :key="idx">
      <div class="container">
        <div class="row">
          <div class="col-lg-8" :class="slider.class">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">{{ slider.title }}</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5" v-html="slider.desc"></h1>
            <router-link data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" :to="slider.link">Ver mais</router-link>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import '@/slick.min';
import $ from 'jquery';
export default {
  name: "Slider",
  data: () => ({
    sliders: [
      {
        id: 1,
        img: 'images/slider/slider-1.jpg',
        title: 'PRODUCTS',
        desc: 'The beauty of nature <br> is hidden in details.',
        class: 'text-left',
        link: '/'
      },
      {
        id: 2,
        img: 'images/slider/slider-2.jpg',
        title: 'PRODUCTS',
        desc: 'The beauty of nature <br> is hidden in details.',
        class: 'text-right',
        link: '/'
      },
      {
        id: 3,
        img: 'images/slider/slider-3.jpg',
        title: 'PRODUCTS',
        desc: 'The beauty of nature <br> is hidden in details.',
        class: 'text-left',
        link: '/'
      },
    ]
  }),
  mounted() {
    $(document).ready(() => {
      $('.hero-slider').slick({
          autoplay: true,
          infinite: true,
          arrows: true,
          prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
          nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
          dots: true,
          autoplaySpeed: 7000,
          pauseOnFocus: false,
          pauseOnHover: false
        });
    });    
  }
}
</script>
<style scoped>

</style>