<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow">
            <form @submit.prevent="submitForm()" class="form-user">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" placeholder="Masukan Nama Lengkap" class="form-control" id="nama" v-model="nama" required>
                </div>
                <div class="form-group">
                    <label for="nik">NIK</label>
                    <input type="number" placeholder="Masukan NIK" class="form-control" id="nik" v-model="nik" required>
                </div>
                <div class="form-group">
                    <label for="telp">Nomor Telepon</label>
                    <input type="number" placeholder="Masukan Nomor Telepon" class="form-control" id="telp" v-model="telp" required>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" placeholder="Masukan username" class="form-control" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" placeholder="Masukan Password" class="form-control" id="password" v-model="password1" required>
                </div>
                <div class="form-group">
                    <label for="password-confirm">Password Konfirmasi</label>
                    <input type="password" placeholder="Masukan Password Konfirmasi" class="form-control" id="password-confirm" v-model="password2" required>
                </div>
                <div class="form-group">
                    <label for="ktp">Foto KTP</label>
                    <input type="file" placeholder="Masukan Foto KTP" class="form-control" id="ktp" required>
                </div>
                <div class="form-button">
                    <nuxt-link class="btn--back mr-3" :to="'/user/masyarakat'">Kembali</nuxt-link>
                    <button type="submit" class="btn--add">Tambah Data</button>
                </div>
        </form>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
    layout: 'user-layout',
    middleware: 'auth',
    data() {
        return {
            page: 'Tambah Data Masyarakat',
            nama: null,
            nik: null,
            telp: null,
            username: null,
            password1: null,
            password2: null,
        }        
    },
    components: {
        Breadcrumb
    },
    computed: {
        fas () {
            return fas
        },
    },
    methods: {
        form() {
            const data = new FormData();
            const foto = document.querySelector('#ktp');

            data.append('nama', this.nama);
            data.append('nik', this.nik);
            data.append('telp', this.telp);
            data.append('username', this.username);
            data.append('password1', this.password1);
            data.append('password2', this.password2);
            data.append('foto', foto.files[0]);

            return data;
        },
        async submitForm() {
            try {
                await this.$axios({
                    url: `masyarakat/store`,
                    method: 'post',
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: this.form()
                })

                this.$swal({
                    icon: 'success',
                    text: 'Registrasi akun berhasil',
                })
                .then( () => {
                    this.$router.push('/user/masyarakat')
                });

            } catch (e) {
                this.$swal({
                    icon: 'error',
                    text: e
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>