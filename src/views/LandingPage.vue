<template>
  <div id="LandingPage">
      <!-- 3 use component -->
      <Header />
      <Banner />
      <Kategori />
      <Slider />
      <Rekomendasi />
      <Aksesoris />
      <Footer />
      </div>
</template>

<script>
//1 import
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Kategori from '@/components/KategoriPilihan.vue'
import Slider from '@/components/Slider.vue'
import Rekomendasi from '@/components/Rekomendasi.vue'
import Aksesoris from '@/components/Aksesoris.vue'
import Footer from '@/components/Footer.vue'




export default {
    name:'LandingPage',
    //2 regist componen
    components: {
        Header,
        Banner,
        Kategori,
        Slider,
        Rekomendasi,
        Aksesoris,
        Footer,
        
    }
}
</script>

<style>

</style>