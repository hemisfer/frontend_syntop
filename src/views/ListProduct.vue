<template>
  <div id="ListProduct">
            <!-- 3 use component -->

        <Header />
        <Breadcrumb />
        <Kategori />
        <Teratas/> 
        <Aksesoris2/>
        <Footer/> 
      </div>
</template>

<script>
//1 import

import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Kategori from '@/components/KategoriPilihan.vue'
import Teratas from '@/components/Teratas.vue'
import Aksesoris2 from '@/components/Aksesoris2.vue'
import Footer from '@/components/Footer.vue'






export default {
        //2 regist componen

    name:'ListProduct',
    components: {
        Header, 
        Breadcrumb, 
        Kategori,
        Teratas,  
        Aksesoris2, 
        Footer,

    }
}
</script>

<style>
</style>