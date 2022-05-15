import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import halaman
import LandingPage from '../views/LandingPage.vue'
import ListProduct from '../views/ListProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import KeranjangKosong from '../views/KeranjangKosong.vue'
import Checkout from '../views/Checkout.vue'
import UploadBuktiBayar from '../views/UploadBuktiBayar.vue'
import Sukses from '../views/Sukses.vue'
import Latihan from '../views/Latihan.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/listproduct',
    name: 'ListProduct',
    component: ListProduct
  },
  // {
  //   path: '/productdetail',
  //   name: 'ProductDetail',
  //   component: ProductDetail
  // },

  {
    path: '/productdetail/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/keranjangkosong',
    name: 'KeranjangKosong',
    component: KeranjangKosong
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/uploadbuktibayar',
    name: 'UploadBuktiBayar',
    component: UploadBuktiBayar
  },
  {
    path: '/sukses',
    name: 'Sukses',
    component: Sukses
  },
  {
    path: '/latihan',
    name: 'Latihan',
    component: Latihan
  },
  
   {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
