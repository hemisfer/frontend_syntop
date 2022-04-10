<template>
  <div id="Sukses">
     
      <Header2/> 
      <IsiSukses/> 
      <br>
       <br>
        <br>
         <br>
         <Footer/>
      
      </div>
</template>

<script>
import Header2 from '@/components/Header2.vue'
import IsiSukses from '@/components/IsiSukses.vue'
import Footer from '@/components/Footer.vue'




export default {
    name:'Sukses',
    components: {
        Header2, 
        IsiSukses,
        Footer,
    }
}
</script>

<style>

</style>