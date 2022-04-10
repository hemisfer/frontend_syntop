<template>
  <div id="KeranjangKosong">
      <Header2/> 
      <KosongKeranjang/>
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
import Header2 from '@/components/Header2.vue'
import KosongKeranjang from '@/components/KosongKeranjang.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'KeranjangKosong',
    components: {
        Header2, 
        KosongKeranjang,
        Footer,
    }
}
</script>

<style>

</style>