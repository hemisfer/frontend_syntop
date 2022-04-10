<template>
  <div id="UploadBuktiBayar">
      <Header2/>
      <Breadcrumb5/> 
      <br>
      <DetailUploadBuktiBayar/> 
      <br>
      <br>
      <br>
      <UploadFotoBayar/>
      <br>
      <br>
      <br>
      <Footer/>
      </div>
</template>

<script>
import Header2 from '@/components/Header2.vue'
import Breadcrumb5 from '@/components/Breadcrumb5.vue'
import DetailUploadBuktiBayar from '@/components/DetailUploadBuktiBayar.vue'
import UploadFotoBayar from '@/components/UploadFotoBayar.vue'
import Footer from '@/components/Footer.vue'




export default {
    name:'UploadBuktiBayar',
    components: {
        Header2,
        Breadcrumb5,  
        DetailUploadBuktiBayar, 
        UploadFotoBayar,
        Footer,
    }
}
</script>

<style>

</style>