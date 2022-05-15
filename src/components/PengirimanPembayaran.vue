<template>
  <div id="PengirimanDanPembayaran">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-8">
          <h3>Pengiriman dan Pembayaran</h3>
          <h4>Lengkapi detail alamat</h4>
          <p>Nama</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
          />
          <p>Nomor HP</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
          />
          <p>Kota & Kecamatan</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
          />
          <p>Alamat Lengkap</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
          />
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-3">
          <p>Pilih Pembayaran</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Transfer Bank</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-lg-3">
          <p>Pilih Pengiriman</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Reguler</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-1">
          <img class="logomandiri" src="../assets/mandiri_icon.png" />
        </div>
        <div class="col-lg-3">
          <p>
            Mandiri Virtual Account <br />90089181873817<br />a.n Syntop
            Laptopindo
          </p>
        </div>
        <div class="col-lg-2">
          <p>Rp. 20.000</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3">
          <h3>Ringkasan Belanja</h3>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3">
          <p class="totalharga">Total Harga (1 Barang)<br />Total Ongkos Kirim</p>
        </div>
        <div class="col-lg-2">
          <p class="hargatotal">Rp. 21.000.000<br />Rp. 20.000</p>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-lg-3">
          <p>Total Tagihan</p>
        </div>
        <div class="col-lg-2">
          <p class="hargatotallagi">Rp. 21.020.000</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2">
         <a href="#/uploadbuktibayar"> <button type="button" class="btn btn-success">Bayar</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PengirimanPembayaran",
};
</script>

<style>
</style>