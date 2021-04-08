<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow">
            <form @submit.prevent="submitForm()" class="form-user">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" placeholder="Masukan Nama Lengkap" class="form-control" id="nama" v-model="profile.nama_petugas" required>
                </div>
                <div class="form-group">
                    <label for="telp">Nomor Telepon</label>
                    <input type="number" placeholder="Masukan Nomor Telepon" class="form-control" id="telp" v-model="profile.telp" required>
                </div>
                <div class="form-group">
                    <label for="level">Level</label>
                    <select class="form-control" id="level" v-model="profile.level" required>
                        <option value="admin">Admin</option>
                        <option value="petugas">Petugas</option>
                    </select>
                </div>
                <div class="form-button">
                    <nuxt-link class="btn--back mr-3" :to="'/user/petugas'">Kembali</nuxt-link>
                    <button type="submit" class="btn--edit">Edit Data</button>
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
            page: 'Edit Data petugas',
            profile: {
                id_petugas: null,
                nama_petugas: null,
                telp: null,
                level: null
            }
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
    async asyncData({query, $axios}) {
        const id = query.id;
        const profile = await $axios.$get(`petugas/search/${id}`);

        return { profile };
    },
    methods: {
        form() {
            const data = new FormData();

            data.append('id_petugas', this.profile.id_petugas)
            data.append('nama_petugas', this.profile.nama_petugas);
            data.append('telp', this.profile.telp);
            data.append('level', this.profile.level);

            return data;
        },
        async submitForm() {
            try {
                await this.$axios({
                    url: `petugas/update/profile`,
                    method: 'post',
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: this.form()
                })

                this.$swal({
                    icon: 'success',
                    text: 'Edit akun berhasil',
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
        },
    },
}
</script>

<style lang="scss" scoped>

</style>