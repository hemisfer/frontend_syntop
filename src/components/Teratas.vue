<template>
  <div id="Teratas">
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h3>
            <i class="fas fa-home"></i>
            <a href="#">Home</a>
            /
            <strong>List Product</strong>
          </h3>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="keyword"
              @keyup="getListProduct"
              type="text"
              class="form-control"
              placeholder="Cari laptop apa?"
              aria-label="Cari laptop apa?"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-lg-6">
          <h2>Kategori Pilihan</h2>
          <hr
            style="
              width: 37px;
              height: 2px;
              margin: auto;
              border: 1px solid red;
              border-radius: 5px;
            "
          />
        </div>
      </div>
      <div class="row text-center mt-4">
        <div class="col">
          <a href="#/listproduct">
            <img
              class="logo-kategori"
              src="../assets/lenovo.png"
              alt="lenovo brand logo"
            />
          </a>
        </div>
        <div class="col">
          <a href="#/listproduct">
            <img
              class="logo-kategori"
              src="../assets/asus.png"
              alt="asus brand logo"
            />
          </a>
        </div>
        <div class="col">
          <a href="#/listproduct">
            <img
              class="logo-kategori"
              src="../assets/apple.png"
              alt="apple brand logo"
            />
          </a>
        </div>
        <div class="col">
          <a href="#/listproduct">
            <img
              class="logo-kategori"
              src="../assets/acer.png"
              alt="acer brand logo"
            />
          </a>
        </div>
        <div class="col">
          <a href="#/listproduct">
            <img
              class="logo-kategori"
              src="../assets/dell.png"
              alt="dell brand logo"
            />
          </a>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <h3>Teratas</h3>
          <hr
            style="
              width: 37px;
              height: 2px;
              margin-right: 90%;
              border: 1px solid red;
              border-radius: 5px;
            "
          />
        </div>
        <div class="col-lg-3 text-end">
          <h3 class="lihatsemua">
            <i class="far fa-eye"></i>
            Lihat Semua
          </h3>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3 text-center" v-for="lp in listproduct.data"
          :key="lp.id">
          <div class="card shadow mb-3" style="width: 100%;">
            <a href="#/productdetail">
              <img :src="lp.gambar" class="card-img-top" height="190" width="100%" />
            </a>
            <div class="card-body">
              <h5 class="card-title">{{ lp.merk.merk_product }} {{ lp.nama_product }} </h5>
              <p class="card-text">Rp. {{ Number(lp.harga).toLocaleString() }}</p>
              <a :href="'#productdetail/'+lp.id" class="btn btn-primary">+ Keranjang</a>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-5" />
    </div>
  </div>
</template>

<script>
// panggil library axios utk bisa berkomunikasi dengan API yg telah dibuat
import axios from 'axios'

export default {
  name: 'Teratas',

  //siapkan variabel
  data() {
    return {
      keyword: '',
      listproduct: [], // tipe nya array
      response: {}, // tipe nya json
    }
  },

  methods: {
    setData(dataAPI) {
      this.listproduct = dataAPI
    },

    async getListProduct() {
      try {
        // cek apakah input keyword diisi atau tidak
        if (this.keyword == '') {
          this.response = await axios.get(
            'http://127.0.0.1:8000/api/product-list',
          )
        } else {
          this.response = await axios.get(
            'http://localhost:8000/api/product-search?keyword=' + this.keyword,
          )
        }
        console.log(this.response.data);
        this.setData(this.response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },

  mounted(){
    this.getListProduct()
  }

}
</script>

<style></style>
