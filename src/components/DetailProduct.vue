<template>
  <div id="DetailProduct">
    <div class="container">
      <div class="row mt-4">
        <div class="col-lg-5 text-center">
          <div class="bg-detail-product">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active p-1">
                  <img
                    src="../assets/t490s.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item p-1">
                  <img
                    src="../assets/t490s.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i class="fas fa-arrow-circle-left"></i>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i class="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mx-3">
          <h2>{{ merk.merk_product }} {{ product.nama_product }}</h2>
          <h3>
            <span>Harga:</span>
            Rp. {{ Number(product.harga).toLocaleString() }}
          </h3>
          <h4>Spesifikasi :</h4>
          <h4 class="Specs">
            <div v-html="product.spesifikasi"></div>
          </h4>
          <div class="row">
            <form v-on:submit.prevent>
              <div class="col">
                <input v-model="jumlah" type="number" min="1" max="" placeholder="1" />
              </div>
              <div class="col">
                <!-- <router-link to="/keranjang">
                  <div class="btn btn-danger1">+ Keranjang</div>
                </router-link> -->
                <button class="btn btn-danger1" type="submit" @click="postKeranjang()">
                  + Keranjang
                </button>
                <router-link to="/checkout">
                  <div class="btn btn-danger">Pesan Sekarang</div>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// library untuk mengkoneksikan ke api
import axios from 'axios'

export default {
  name: 'DetailProduct',

  // siapkan data yg dibuthkan untuk memanggil data dari API
  data() {
    return {
      response: '',
      product: '',
      merk: '',
      jumlah: 1,
    }
  },

  // membuat fungsi yg diperlukan untuk menampilkan atau mengirim data ke API
  methods: {
    // fungsi utk menset data product
    setDataProduct(dataAPI) {
      // isinya iyalah mengubah data product yg tadinya "" menjadi data yg didapatkan dari API
      this.product = dataAPI
    },

    // fungsi utk menset data merk
    setDataMerk(dataAPI) {
      // isinya iyalah mengubah data merk yg tadinya "" menjadi data yg didapatkan dari API
      this.merk = dataAPI
    },

    // panggil/hubungkan ke API yg fungsinya utk menampilkan data detail product
    async detailProduct() {
      try {
        this.response = await axios.get(
          'http://127.0.0.1:8000/api/product-detail/' + this.$route.params.id,
        )

        // masukkan data yg di dapat dari response yg dihubungkan ke url API ke dalam setDataProduct & setDataMerk
        // setDataProduct(dataAPI)
        this.setDataProduct(this.response.data.data)

        this.setDataMerk(this.response.data.data.merk)

        // mengecek hasil dari this.response
        console.log(this.response)
      } catch (error) {
        console.log(error)
      }
    },

    // fungsi input keranjang
    async postKeranjang(){
      try {
        if(this.jumlah > 0) {
          this.response = await axios.post(
            "http://127.0.0.1:8000/api/keranjang-post", 
            {
              product_id : this.$route.params.id,
              jumlah : this.jumlah
            }
          );

          // jika success = true
          if(this.response.data.success == true) {
            this.$router.push({path:"/keranjang"})
          } else {
            console.log(this.response.data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    hello() {
      console.log('Hello')
    },
  },

  // berfungsi untuk memanggil fungsi-fungsi apa saja yg akan dieksekusi pertama kali saat halaman dibuka
  mounted() {
    this.hello()
    this.detailProduct()
  },
}
</script>

<style></style>
