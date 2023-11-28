import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/vews/Home.vue')
const Cart = () => import('@/vews/Cart.vue')
const Checkout = () => import('@/vews/Checkout.vue')

const routes =[
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/checkout',
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savePosition) {
    if(savePosition) {
      return savePosition;
    }
    if(to.hash) {
      return { el: to.hash }
    }
    return { left: 0, top: 0 }
  },
  routes: routes
});

export default router