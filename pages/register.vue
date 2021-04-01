<template>
  <div class="container-auth">
    <div class="auth-registrasi-form bg-white ronded-sm shadow-md my-10">

      <!-- Form Login -->
      <div class="registrasi-form">
        <h1 class="text-3xl">Registrasi Akun</h1>
        <form action="">
          <div class="form-group">
            <label for="nama">Nama Lengkap</label>
            <input type="text" placeholder="Masukan Nama Lengkap" class="form-control" id="nama" required>
          </div>
          <div class="form-group">
            <label for="nik">NIK</label>
            <input type="number" placeholder="Masukan NIK" class="form-control" id="nik" required>
          </div>
          <div class="form-group">
            <label for="telp">Nomor Telepon</label>
            <input type="number" placeholder="Masukan Nomor Telepon" class="form-control" id="telp" required>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" placeholder="Masukan username" class="form-control" id="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" placeholder="Masukan Password" class="form-control" id="password" required>
          </div>
          <div class="form-group">
            <label for="password">Password Konfirmasi</label>
            <input type="password" placeholder="Masukan Password" class="form-control" id="password" required>
          </div>
          <div class="form-group">
            <label for="ktp">Foto KTP</label>
            <input type="file" placeholder="Masukan Foto KTP" class="form-control" id="ktp" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn-register">Daftar Sekarang</button>
          </div>
        </form>
        <p class="text-sm mb-8">
            Sudah punya akun ?  
            <nuxt-link to="/" class="text-blue-600">Login Sekarang</nuxt-link>
        </p>
      </div>

   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $primaryColor: #60a5fa;
  $border-input-color: #e5e7eb;

  .auth-registrasi-form {
      width: 40%;

    @media screen and (max-width:992px) {
        width: 60%;
    }

    @media screen and (max-width:768px) {
        width: 80%;
    }
    
    // login form section
    .registrasi-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem auto;
      box-sizing: border-box;

      @media screen and (max-width:992px) {
        width: 100%;
      }

      h1 {
        margin: 2.5rem auto 1rem;      
      }
    }

    // form
    .form-group {
      margin: 1.2rem 0;

      label {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.3rem;

        @media screen and (max-width: 576px) {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      // input
      .form-control {
        width: 100%;
        border-radius: 5px;
        position: relative;
        height: 2rem;     
        border: 2px solid $border-input-color;
        padding: 1.3rem 0.7rem; 

        &:focus {
          outline: none;
          border: 2px solid $primaryColor;
        }

        &[type="file"] {
            padding: 0;
        }

        @media screen and (max-width: 576px) {
          width: 80%;
        }        
      }

      // button login
      .btn-register {
        background: $primaryColor;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
        color: #fff;
        margin-bottom: 0.5rem;

        &:hover {
          background: darken($primaryColor, 10%);
          color: darken($color: #fff, $amount: 10%)
        }
        
        @media screen and (max-width: 576px) {
          width: 80%;
        }
      }
    }
  }
</style>