<template>
  <div class="cart-menu">
    <!-- Cart Item -->
    <div class="media" v-for="(c, index) in carts" :key="index">
      <a class="pull-left" href="#">
        <img class="media-object" :src="`${c.img}`" alt="image" />
      </a>
      <div class="media-body">
        <h4 class="media-heading"><a href="#">{{ c.nome }}</a></h4>
        <div class="cart-price">
          <span>{{ c.qtd }} x</span>
          <span>{{ c.valor }}</span>
        </div>
        <h5><strong>R$ {{ c.valor }}</strong></h5>
      </div>
      <a href="#" class="remove" @click="removeItem(index)"><i class="tf-ion-close"></i></a>
    </div>
    <!-- Cart Item -->
    
    <!-- Cart Footer -->
    <div class="cart-summary">
      <span>Total</span>
      <span class="total-price">{{ totalCarrinhoFormatado }}</span>
    </div>

    <ul class="text-center cart-buttons">
      <li><router-link to="/cart" class="btn btn-small">Ver carrinho</router-link></li>
      <li><router-link to="/checkout" class="btn btn-small btn-solid-border">Finalizar compra</router-link></li>
    </ul>
    <!-- Cart Footer -->
  </div>
</template>
<script>
export default {
  name: "CartMenu",
  data: ()=> ({
    carts: []
  }),
  methods:{
    removeItem(index) {
      this.carts.splice(index, 1);
    }
  },  
  created() {
    this.carts = [
      {
        id: 1,
        nome: "Óculos",
        img: 'images/shop/cart/cart-1.jpg',
        qtd: 1,
        valor: 600
      },
      {
        id: 2,
        nome: "Vestido",
        img: 'images/shop/cart/cart-2.jpg',
        qtd: 1,
        valor: 429
      },
      {
        id: 3,
        nome: "Carteira",
        img: 'images/shop/cart/cart-3.jpg',
        qtd: 1,
        valor: 89
      },
    ];
  },
  computed: {
    totalCarrinho() {
      return this.carts.reduce((total, item) => total + item.valor * item.qtd, 0);
    },
    totalCarrinhoFormatado() {
      return this.totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
}
</script>
<style scoped>

</style>