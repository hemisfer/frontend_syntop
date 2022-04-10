<template>
  <div id="UploadFotoBayar">
      <div class="container">
          <div class="row text-center bg-light ">
              <div class="col">
                  <i class="fas fa-image"></i>
                  <br>
                  <p>Format gambar : JPG,  JPEG, PNG. max 10 MB</p>
                  <br>
                  <br>
                  <p>bukti_transfer.JPG</p>
                  <input type="file" id="upload" hidden/>
                    <label for="upload">Pilih Gambar</label>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'UploadFotoBayar'

}
</script>

<style>

</style>