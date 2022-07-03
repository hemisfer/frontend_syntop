<template>
  <div id="Checkout">
    <Header2 />
    <Breadcrumb4 />
    <!-- <IsiCheckout/>  -->
    <div class="container">
      <div class="row mt-5">
        <h2>Barang yang Dibeli</h2>
      </div>
      <div class="row mt-3" v-for="kr in keranjang.data" :key="kr.id">
        <div class="col-lg-4 text center">
          <div class="card shadow" style="width: 100%">
            <img
              :src="'http://localhost:8000/storage/' + kr.gambar"
              width="200"
              height="280"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div class="col-lg-8">
          <h3>{{ kr.merk_product }} <br />{{ kr.nama_product }}</h3>
          <p>Rp. {{ Number(kr.harga_satuan).toLocaleString() }}</p>
          <p>Jumlah : {{ kr.jumlah }}</p>
          <!-- <input
            class="form-number"
            type="number"
            readonly
            value="{{ kr.jumlah }}"
          /> -->
        </div>
      </div>

      <!-- form catatan -->
      <div class="row mt-3">
        <textarea
          class="form-control"
          rows="5"
          placeholder="Tulis catatan untuk barang ini"
          aria-label="default input example"
          v-model="catatan"
        ></textarea>
      </div>
    </div>
    <br />
    <!-- <PengirimanPembayaran /> -->
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
            v-model="nama"
          />
          <p>Nomor HP</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
            v-model="nohp"
          />
          <p>Kota & Kecamatan</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
            v-model="kota_kecamatan"
          />
          <p>Alamat Lengkap</p>
          <input
            class="form-control"
            type="text"
            aria-label="default input example"
            v-model="alamat"
          />
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-lg-3">
          <p>Pilih Pembayaran</p>
          <select
            class="form-select"
            v-model="jenis_pembayaran"
            aria-label="Default select example"
            required
          >
            <option>--Pilih--</option>
            <option value="COD">COD</option>
            <option value="TF">TF</option>
          </select>
        </div>
        <div class="col-lg-3">
          <p>Pilih Pengiriman</p>
          <select
            class="form-select"
            v-model="jenis_pengiriman"
            aria-label="Default select example"
            required
          >
            <option>--Pilih--</option>
            <option value="J&T">J&T</option>
            <option value="JNE">JNE</option>
            <option value="Sicepat">Sicepat</option>
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
          <p>Rp. 25.000</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3">
          <h3>Ringkasan Belanja</h3>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-3">
          <p class="totalharga">
            Total Harga ({{ keranjang.jumlahBarang }} Barang)<br />Total Ongkos
            Kirim
          </p>
        </div>
        <div class="col-lg-2">
          <p class="hargatotal">
            Rp. {{ Number(keranjang.grandtotal).toLocaleString() }}<br />Rp.
            25.000
          </p>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-lg-3">
          <p>Total Tagihan</p>
        </div>
        <div class="col-lg-2">
          <p class="hargatotallagi">
            Rp. {{ Number(keranjang.grandtotal + 25000).toLocaleString() }}
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2">
          <button type="submit" @click="checkoutPost()" class="btn btn-success">
            Bayar
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Header2 from "@/components/Header2.vue";
import Breadcrumb4 from "@/components/Breadcrumb4.vue";
// import IsiCheckout from '@/components/IsiCheckout.vue'
// import PengirimanPembayaran from "@/components/PengirimanPembayaran.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Checkout",
  components: {
    Header2,
    Breadcrumb4,
    // IsiCheckout,
    // PengirimanPembayaran,
    Footer,
  },

  data() {
    return {
      response: {},
      keranjang: [],
      catatan: "",
      nama: "",
      nohp: "",
      alamat: "",
      kota_kecamatan: "",
      jenis_pembayaran: "",
      jenis_pengiriman: "",
    };
  },

  methods: {
    // merequest data dari API untuk diambil oleh Vue JS
    async getKeranjang() {
      try {
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/keranjang-list"
        );
        console.log(this.response);
        this.keranjang = this.response.data; // data yg ini adalah object data dari inspect element console (hasil request ke API)
      } catch (error) {
        console.log(error);
      }
    },

    async checkoutPost() {
      try {
        if (
          this.nama != "" ||
          this.nohp != "" ||
          this.kota_kecamatan != "" ||
          this.alamat != "" ||
          this.jenis_pembayaran != "" ||
          this.jenis_pengiriman != "" ||
          this.catatan != ""
        ) {
          // proses kirim data ke API
          this.response = await axios.post(
            "http://127.0.0.1:8000/api/checkout-post",
            {
              nama: this.nama,
              nohp: this.nohp,
              alamat: this.alamat,
              kota_kecamatan: this.kota_kecamatan,
              catatan: this.catatan,
              jenis_pembayaran: this.jenis_pembayaran,
              jenis_pengiriman: this.jenis_pengiriman,
            }
          );

          console.log(this.response.data);
          // jika success = true
          if (this.response.data.success == true) {
            // success dapat dari hasi response ke API
            this.$router.push({ path: "/uploadbuktibayar" });
          } else {
            window.alert(this.response.data.message); // message dapat dari hasi response ke API
          }
        } else {
          window.alert("Semua data harus diisi!");
        }
      } catch (error) {
        window.alert(error);
      }
    },
  },

  mounted() {
    this.getKeranjang();
  },
};
</script>

<style>
</style>