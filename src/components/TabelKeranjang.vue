<template>
  <div id="TabelKeranjang">
    <div class="container">
      <div class="row mt-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Produk</th>
              <th scope="col">Nama</th>
              <th scope="col">Harga Satuan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(kr, index) in keranjang.data" :key="kr.id">
              <td>{{ index + 1 }}</td>
              <th scope="row"><img :src=" 'http://localhost:8000/storage/' + kr.gambar " /></th>
              <td>
                {{kr.merk_product}}
                <br />
                {{kr.nama_product}}
              </td>
              <td>Rp. {{ Number(kr.harga_satuan).toLocaleString() }}</td>
              <td>{{ kr.jumlah }}</td>
              <td>Rp. {{ Number(kr.totalharga).toLocaleString() }}</td>
              <td>
                <!-- Button trigger modal -->
                <!-- <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fas fa-trash"></i>
                  Hapus
                </button> -->

                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deleteKeranjang(kr.id)"
                >
                  <i class="fas fa-trash"></i>
                  Hapus
                </button>
              </td>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
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
          <h3 class="totalharga">Total Harga</h3>
        </div>
        <div class="col">
          <h3 class="harganya">Rp.{{Number(keranjang.grandtotal).toLocaleString()}}</h3>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <a class="nav-linkcheckout" href="#/checkout">
            <div class="btn btn-green">
              <i class="fas fa-arrow-circle-right"></i>
              Checkout
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  // variabel2 yg dibutuhkan
  data() {
    return {
      response : {},
      keranjang : "", // data dari inspect
    }
  },

  methods:{
    // merequest data dari API untuk diambil oleh Vue JS
    async getKeranjang(){
      try {
        this.response = await axios.get(
          "http://127.0.0.1:8000/api/keranjang-list"
        );
        console.log(this.response);
        this.keranjang = this.response.data // data yg ini adalah object data dari inspect element console (hasil request ke API)
      } catch (error) {
        console.log(error);
      }
    },

    async deleteKeranjang(id) {
      try {
        this.response = await axios.post(
          "http://127.0.0.1:8000/api/keranjang-delete",
          {
            id : id
          }
        );

        if(this.response.data.success == true) {
          // panggil fungsi getKeranjang agar datanya direload kembali
          this.getKeranjang()
        } else {
          console.log(this.response.data.message);
        }

      } catch (error) {
        console.log(error);
      }
    }

  },

  mounted(){
    this.getKeranjang()
  }


}
</script>

<style></style>
