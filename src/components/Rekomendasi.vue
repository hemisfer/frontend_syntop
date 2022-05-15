<template>
  <div id="Rekomendasi">
    <div class="container">
      <div class="row justify-content-between mt-5">
        <div class="col-lg-9">
          <h3>Rekomendasi</h3>
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
          <a href="#/listproduct">
            <h3 class="lihatsemua">
              <i class="far fa-eye"></i>
              Lihat Semua
            </h3>
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div
          class="col-lg-3 text-center"
          v-for="lp in listproduct.data"
          :key="lp.id"
        >
          <div class="card shadow" style="width: 100%;">
            <img :src="lp.gambar" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                {{ lp.merk.merk_product }} {{ lp.nama_product }}
              </h5>
              <p class="card-text">
                Rp {{ Number(lp.harga).toLocaleString() }}
              </p>
              <!-- <a href="#/productdetail" class="btn btn-primary">+ Keranjang</a> -->
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
  name: 'Rekomendasi',

  //siapkan variabel
  data() {
    return {
      listproduct: [], // tipe nya array
      response: {}, // tipe nya json
    }
  },

  // siapkan fungsi
  methods: {
    // fungsi untuk mensetting data yg didapatkan dari API
    setData(dataAPI) {
      this.listproduct = dataAPI
    },

    // fungsi untuk merequest data API
    async getListProduct() {
      try {
        this.response = await axios.get(
          'http://127.0.0.1:8000/api/product-rekomendasi',
        )
        console.log(this.response)

        // jika datanya telah berhasil didapatkan
        // maka masukkan hasilnya ke dalam fungsi setData(dataAPI)
        this.setData(this.response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },

  // memanggil apa-apa saat component pertm=ama kali diakses
  mounted() {
    this.getListProduct()
  },
}
</script>

<style></style>
