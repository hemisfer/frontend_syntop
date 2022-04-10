<template>
  <div id="Checkout">
    <Header2/>
    <Breadcrumb4/>
    <IsiCheckout/> 
    <br>
    <br>
    <PengirimanPembayaran/> 
    <br>
    <br>
    <Footer/>
    

      </div>
</template>

<script>
import Header2 from '@/components/Header2.vue'
import Breadcrumb4 from '@/components/Breadcrumb4.vue'
import IsiCheckout from '@/components/IsiCheckout.vue'
import PengirimanPembayaran from '@/components/PengirimanPembayaran.vue'
import Footer from '@/components/Footer.vue'




export default {
    name:'Checkout',
    components: {
        Header2, 
        Breadcrumb4,
        IsiCheckout,
        PengirimanPembayaran,
        Footer,
    }
}
</script>

<style>

</style>