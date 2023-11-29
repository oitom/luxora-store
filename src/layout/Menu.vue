<template>
  <!-- Main Menu Section -->
  <section class="menu">
    <nav class="navbar navigation">
      <div class="container">
        <div class="navbar-header">
          <h2 class="menu-title">Menu</h2>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
            aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div><!-- / .navbar-header -->
        <!-- Navbar Links -->
        <div id="navbar" class="navbar-collapse collapse text-center">
          <ul class="nav navbar-nav">
            <!-- Home -->
            <li class="dropdown ">
              <router-link to="/">Home</router-link>
            </li>
            <!-- Lançamentos -->
            <li class="dropdown dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                role="button" aria-haspopup="true" aria-expanded="false">Lançamentos <span
                  class="tf-ion-ios-arrow-down"></span></a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col">
                    <ul>
                      <li class="dropdown-header">DESTAQUES</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Feminino</router-link></li>
                      <li><router-link to="/">Masculino</router-link></li>
                      <li><router-link to="/">Infantil</router-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <!-- Feminino -->
            <li class="dropdown full-width dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                role="button" aria-haspopup="true" aria-expanded="false">Feminino <span class="tf-ion-ios-arrow-down"></span></a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">ROUPAS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Blusas e Camisetas</router-link></li>
                      <li><router-link to="/">Calças Jeans</router-link></li>
                      <li><router-link to="/">Camisas</router-link></li>
                      <li><router-link to="/">Casacos e Jaquetas</router-link></li>
                      <li><router-link to="/">Moda Praia</router-link></li>
                      <li><router-link to="/">Moletom</router-link></li>
                      <li><router-link to="/">Lingerie</router-link></li>
                      <li><router-link to="/">Shorts e Bermudas</router-link></li>
                      <li><router-link to="/">Vestidos</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">CALÇADOS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Botas</router-link></li>
                      <li><router-link to="/">Chinelos</router-link></li>
                      <li><router-link to="/">Mocassim</router-link></li>
                      <li><router-link to="/">Rasteirinhas</router-link></li>
                      <li><router-link to="/">Sandálias</router-link></li>
                      <li><router-link to="/">Sapatilhas</router-link></li>
                      <li><router-link to="/">Tênis</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">ACESSÓRIOS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Bijuterias</router-link></li>
                      <li><router-link to="/">Bolsas</router-link></li>
                      <li><router-link to="/">Cintos</router-link></li>
                      <li><router-link to="/">Óculos</router-link></li>
                      <li><router-link to="/">Relógios</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <router-link to="/">
                      <img class="img-responsive img-fem" src="images/shop/header-img.jpg" alt="menu image" />
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
            <!-- Masculino -->
            <li class="dropdown full-width dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                role="button" aria-haspopup="true" aria-expanded="false">Masculino <span class="tf-ion-ios-arrow-down"></span></a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">ROUPAS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Bermudas e Shorts</router-link></li>
                      <li><router-link to="/">Calças</router-link></li>
                      <li><router-link to="/">Calças Jeans</router-link></li>
                      <li><router-link to="/">Camisas</router-link></li>
                      <li><router-link to="/">Camisetas</router-link></li>
                      <li><router-link to="/">Casacos e Jaquetas</router-link></li>
                      <li><router-link to="/">Cuecas</router-link></li>
                      <li><router-link to="/">Moda Praia</router-link></li>
                      <li><router-link to="/">Moletom</router-link></li>
                      <li><router-link to="/">Polos</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">CALÇADOS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Botas</router-link></li>
                      <li><router-link to="/">Chinelos</router-link></li>
                      <li><router-link to="/">Mocassim</router-link></li>
                      <li><router-link to="/">Sapatênis</router-link></li>
                      <li><router-link to="/">Sapato Casual</router-link></li>
                      <li><router-link to="/">Sapato Social</router-link></li>
                      <li><router-link to="/">Tênis</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <ul>
                      <li class="dropdown-header">ACESSÓRIOS</li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Bonés e Chapéus</router-link></li>
                      <li><router-link to="/">Carteiras</router-link></li>
                      <li><router-link to="/">Cintos</router-link></li>
                      <li><router-link to="/">Mochilas e Malas</router-link></li>
                      <li><router-link to="/">Óculos</router-link></li>
                      <li><router-link to="/">Relógios</router-link></li>
                      <li role="separator" class="divider"></li>
                      <li><router-link to="/">Ver tudo</router-link></li>
                    </ul>
                  </div>
                  <div class="col-sm-3 col-xs-12">
                    <router-link to="/">
                      <img class="img-responsive img-mas" src="images/shop/header-img-men.png" alt="menu image" />
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
            <!-- Premium -->
            <li class="dropdown dropdown-slide">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                role="button" aria-haspopup="true" aria-expanded="false">Premium <span
                  class="tf-ion-ios-arrow-down"></span></a>
              <ul class="dropdown-menu">
                <li><router-link to="/">Luxora</router-link></li>
                <li><router-link to="/">Veluxe</router-link></li>
                <li><router-link to="/">Elysian</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  <!-- Main Menu Section -->
</template>

<script>
export default {
  name: "Menu",
}
</script>
<style scoped>
.img-fem, .img-mas {
  margin-top: 32px;
}
</style>