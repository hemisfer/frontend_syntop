<template>
  <div id="TabelKeranjang">
      <div class="container">
      <div class="row mt-4">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Produk</th>
      <th scope="col">Nama</th>
      <th scope="col">Jumlah</th>
      <th scope="col">Harga</th>
      <th scope="col">Aksi</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="../assets/t490s.png"></th>
      <td>Lenovo Thinkpad <br>T490s</td>
      <td>1</td>
      <td>Rp. 21.000.000</td>
      <td><!-- Button trigger modal -->
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <i class="fas fa-trash"></i> Hapus
</button></td>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </tr>
   
  </tbody>
</table>
      </div>
      <div class="row mt-4">
          <div class="col">
              <h3 class="totalharga">Total Harga </h3>
               </div>
          <div class="col">
              <h3 class="harganya">Rp.21.000.000</h3>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col">
      <a class="nav-linkcheckout" href="#"><div class="btn btn-green"><i class="fas fa-arrow-circle-right"></i> Checkout</div></a>
              
              </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>