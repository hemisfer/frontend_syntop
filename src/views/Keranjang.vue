<template>
  <div id="Keranjang">
      <Header2/> 
      <Breadcrumb3/>
      <TabelKeranjang/> 
      <br>
      <br>
      <br>
            <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <Footer/>
      
      </div>
</template>

<script>
//import
import Header2 from '@/components/Header2.vue'
import Breadcrumb3 from '@/components/Breadcrumb3.vue'
import TabelKeranjang from '@/components/TabelKeranjang.vue'
import Footer from '@/components/Footer.vue'




export default {
    name:'Keranjang',
    components: {
        Header2,
        Breadcrumb3,
        TabelKeranjang,
        Footer,
    }
}
</script>

<style>

</style>