<template>
    <div id="Header">
     <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container">
    <a class="navbar-brand" href="#"> <img class="logo-syntop" src="../assets/logo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active m-auto" aria-current="page" href="#">Homes</a>
        <a class="nav-link m-auto" href="#/listproduct">Laptop & Accesories </a>
        <a class="nav-link" href="#/keranjang"><div class="btn btn-danger"><i class="fas fa-cart-plus"></i> Keranjang</div></a>

      </div>
    </div>
  </div>
     </nav>
   
    </div>

</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

</style>