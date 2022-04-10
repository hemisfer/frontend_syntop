<template>
  <div id="ProductDetail">
<!--3 use component-->
        <Header/> 
        <Breadcrumb-2/>
        <DetailProduct/> 
        <RekomendasiProdDetail/>
        <Footer/> 


      </div>
</template>

<script>
//1 import
import Header from '@/components/Header.vue'
import Breadcrumb2 from '@/components/Breadcrumb2.vue'
import DetailProduct from '@/components/DetailProduct.vue'
import RekomendasiProdDetail from '@/components/RekomendasiProdDetail.vue'
import Footer from '@/components/Footer.vue'





//2 regist componen
export default {
    name:'ProductDetail',
    components: {
        Header,
        Breadcrumb2, 
        DetailProduct, 
        RekomendasiProdDetail,
        Footer,
          
    }
}
</script>

<style>

</style>