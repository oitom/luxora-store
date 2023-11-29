<template>
  <!-- Start Top Header Bar -->
  <section class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-4">
          <div class="contact-number">
            <i class="tf-ion-ios-telephone"></i>
            <span>+55 11 -3312-1123</span>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-4">
          <div class="logo text-center">
            <router-link to="/">
              <h1>Luxora</h1>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-4">
          <ul class="top-menu text-right list-inline">
            <!-- Cart -->
            <li class="dropdown cart-nav dropdown-slide">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i class="tf-ion-android-cart"></i></a>
              <div class="dropdown-menu cart-dropdown">
                <cart-menu></cart-menu>
              </div>
            </li>
            <!-- Cart -->

            <!-- Search -->
            <li class="dropdown search dropdown-slide">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                  class="tf-ion-ios-search-strong"></i> </a>
              <ul class="dropdown-menu search-dropdown">
                <li>
                  <form action="/resultados"><input type="search" class="form-control" placeholder="Pesquisar..."></form>
                </li>
              </ul>
            </li>
            <!-- / Search -->
            
            <li class="">
              <a href="#" class=""  data-toggle="dropdown" data-hover="dropdown">
                <i class="tf-ion-person"></i>
              </a>
            </li>

          </ul><!-- / .nav .navbar-nav .navbar-right -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Top Header Bar -->
</template>
<script>
import CartMenu from '@/components/CartMenu.vue'

export default {
  name: "Header",
  components: { CartMenu },
}
</script>
<style scoped>
h1 {
  font-family: 'AustinBold', Austin;
  font-size: xxx-large;
}
</style>