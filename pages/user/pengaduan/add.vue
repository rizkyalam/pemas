<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow">
            <form @submit.prevent="submitForm()" class="form-user">
                <div class="form-group">
                    <label for="foto">Foto bukti</label>
                    <input type="file" placeholder="Masukan Password Konfirmasi" class="form-control" id="foto" required>
                </div>
                <div class="form-group">
                    <label for="isi-laporan">Isi Laporan</label>
                    <textarea placeholder="Masukan Password Konfirmasi" class="form-control" id="isi-laporan" v-model="isi_laporan" required></textarea>
                </div>
                <div class="form-button">
                    <nuxt-link class="btn--back mr-3" :to="'/user/pengaduan'">Kembali</nuxt-link>
                    <button type="submit" class="btn--add">Publish Laporan</button>
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
    middleware: ['auth', 'level-masyarakat'],
    data() {
        return {
            page: 'Tambah Data Pengaduan',
            isi_laporan: null,
            foto: null
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
            const { id_masyarakat } = this.$store.state.auth.loginForm.profile
            const foto = document.querySelector('#foto');
            
            data.append('id_masyarakat', id_masyarakat);
            data.append('isi_laporan', this.isi_laporan);
            data.append('foto', foto.files[0]);

            return data;
        },
        async submitForm() {
            try {
                await this.$axios({
                    url: `pengaduan/store`,
                    method: 'post',
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: this.form()
                })

                this.$swal({
                    icon: 'success',
                    text: 'Laporan berhasil di publikasikan',
                })
                .then( () => {
                    this.$router.push('/user/pengaduan')
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