<template>
  <div class="container-auth">
    <div class="auth-login-form w-3/4 bg-white ronded-sm shadow-md">
      <!-- image -->
      <div class="login-img">
        <img src="image/undraw_people_search_wctu.svg" alt="logo">
      </div>
      
      <!-- Form Login -->
      <div class="login-form">
        <h1 class="text-3xl">Login</h1>
        <form @submit.prevent="login()">
          <div class="form-group">
            <fa :icon="fas.faUser" class="icon"/>
            <input type="text" placeholder="username" class="form-control" required>
          </div>
          <div class="form-group">
            <fa :icon="fas.faLock" class="icon"/>
            <input type="password" placeholder="password" class="form-control" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn-login">Masuk</button>
          </div>
        </form>
        <p class="text-sm mb-8">
          Belum Punya Akun ? 
          <nuxt-link to="/register" class="text-blue-600">Daftar Sekarang</nuxt-link>
        </p>
      </div>

   </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    fas () {
        return fas
    },
  },
  methods: {
    login() {
      this.$swal('Login Gagal');
    }
  },
  async asyncData({$axios}) {
    const data = await $axios.$get('http://127.0.0.1:8000/masyarakat/all');

    console.log(data);
  },
}
</script>

<style lang="scss" scoped>
  $primaryColor: #60a5fa;
  $border-input-color: #e5e7eb;

  .auth-login-form {
    display: flex;
    
    // image
    .login-img {
      width: 50%;
      padding: 4rem 0 2rem;
      display: flex;
      justify-content: center;

      img {
        object-fit: contain;
        object-position: center;
        width: 25rem;
        height: 25rem;                

      }
      @media screen and (max-width:992px) {
        display: none;
      }
    }

    // login form section
    .login-form {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem auto;
      box-sizing: border-box;

      @media screen and (max-width:992px) {
        width: 100%;
      }

      h1 {
        margin: 6rem auto 1rem;

        @media screen and (max-width:992px) {
        margin: 2rem auto 1rem;
      }
      }
    }

    // form
    .form-group {
      margin: 1.2rem 0;
      position: relative;

      // icon fontawesome
      .icon {
        position: absolute;
        z-index: 1;
        margin: 13px 0 0 10px;
        color: $primaryColor;        
      }

      // input
      .form-control {
        width: 100%;
        border-radius: 5px;
        position: relative;
        height: 2rem;     
        border: 2px solid $border-input-color;
        padding: 1.3rem 0 1.3rem 2rem; 

        &:focus {
          outline: none;
          border: 2px solid $primaryColor;
        }

        @media screen and (max-width: 576px) {
          width: 80%;
        }
      }

      // button login
      .btn-login {
        background: $primaryColor;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
        color: #fff;
        margin-bottom: 2rem;

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