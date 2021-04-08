<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="detail w-full p-5 mt-5 shadow" style="overflow-x: auto;">
            <div class="detail-header my-8">
                <div>
                    <h3 class="mr-3">Status :</h3>
                    <span class="status-button--proses" v-if="data.status === 'proses'">
                        proses
                    </span>
                    <span v-if="data.status === 'selesai'">
                        <span class="status-button--done">
                            selesai
                        </span>                        
                    </span>
                </div>
                <div>
                    <h3 class="mr-3">Tanggal Pengaduan :</h3>
                    <span>{{ data.tgl_pengaduan }}</span>
                </div>
            </div>
            <div class="detail-body">
                <div class="image">
                    <h3 class="mb-2">Foto Bukti</h3>
                    <img :src="`${url}img/reports/${data.foto}`" alt="">
                </div>
                <div class="report">
                    <h3>Isi Laporan :</h3>
                    <p class="text-gray-800">{{ data.isi_laporan }}</p>
                </div>
            </div>
            <div class="reply mt-4">
                <hr>
                <h1 class="my-2">Tanggapan</h1>
                <form @submit.prevent="submitForm()" class="form-user">
                    <div class="form-group">
                        <label for="validasi">Validasi Laporan</label>
                        <select id="validasi" class="form-control" v-model="status">
                            <option value="hoax">Hoax</option>
                            <option value="valid">Valid</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="isi-laporan">Isi Tanggapan</label>
                        <textarea id="isi-laporan" class="form-control" v-model="tanggapan"></textarea>
                    </div>
                    <div class="form-button">
                        <nuxt-link class="btn--back mr-3" :to="'/user/tanggapan'">Kembali</nuxt-link>
                        <button type="submit" class="btn--add">Tanggapi Laporan</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
    layout: 'user-layout',
    middleware: ['auth', 'level-tanggapan'],
    data() {
        return {
            page: 'Detail Pengaduan',
            url: this.$store.state.auth.base_url,
            data: {},
            status: null,
            tanggapan: null
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
    async asyncData({$axios, query}) {
        try {
            const id = query.id;
            const data = await $axios.$get(`pengaduan/search/${id}`);
            return { data }
        } catch (e) {
            return { data: {} }
        }
    },   
    methods: {
        form() {
            const data = new FormData();
            const id_pengaduan = this.$route.query.id            
            const { id_petugas } = this.$store.state.auth.loginForm.profile

            data.append('id_petugas', id_petugas)
            data.append('id_pengaduan', id_pengaduan)
            data.append('tanggapan', this.tanggapan);
            data.append('status_laporan', this.status);

            return data;
        },
        async submitForm() {
            try {
                await this.$axios({
                    url: `tanggapan/store`,
                    method: 'post',
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: this.form()
                })

                this.$swal({
                    icon: 'success',
                    text: 'Data berhasil di tanggapi',
                })
                .then( () => {
                    this.$router.push('/user/tanggapan')
                });

            } catch (e) {
                this.$swal({
                    icon: 'error',
                    text: e
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    align-items: center;
}
</style>