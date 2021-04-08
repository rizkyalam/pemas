<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow">
            <form @submit.prevent="submitForm()" class="form-user">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" placeholder="Masukan Nama Lengkap" class="form-control" id="nama" v-model="nama_petugas" required>
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
                    <label for="level">Level</label>
                    <select class="form-control" id="level" v-model="level" required>
                        <option value="admin">Admin</option>
                        <option value="petugas">Petugas</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" placeholder="Masukan Password" class="form-control" id="password" v-model="password1" required>
                </div>
                <div class="form-group">
                    <label for="password-confirm">Password Konfirmasi</label>
                    <input type="password" placeholder="Masukan Password Konfirmasi" class="form-control" id="password-confirm" v-model="password2" required>
                </div>
                <div class="form-button">
                    <nuxt-link class="btn--back mr-3" :to="'/user/petugas'">Kembali</nuxt-link>
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
    middleware: ['auth', 'level-admin'],
    data() {
        return {
            page: 'Tambah Data petugas',
            nama_petugas: null,
            telp: null,
            username: null,
            level: null,
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

            data.append('nama_petugas', this.nama_petugas);
            data.append('telp', this.telp);
            data.append('username', this.username);
            data.append('level', this.level);
            data.append('password1', this.password1);
            data.append('password2', this.password2);

            return data;
        },
        async submitForm() {
            try {
                await this.$axios({
                    url: `petugas/store`,
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
                    this.$router.push('/user/petugas')
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