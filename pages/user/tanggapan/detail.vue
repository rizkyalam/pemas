<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="detail w-full p-5 mt-5 shadow" style="overflow-x: auto;">
            <nuxt-link :to="'/user/tanggapan'" class="shadow text-gray-600 rounded bg-gray-300 px-3 py-2 mb-2">Kembali</nuxt-link>
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
            <div class="reply mt-4" v-if="data.status === 'selesai'">
                <hr>
                <h1 class="my-2">Tanggapan</h1>
                <h3 class="my-2">Ditanggapi oleh: {{ data.nama_petugas }} </h3>
                <h3 class="my-2">Tanggal tanggapan : {{ data.tgl_tanggapan }} </h3>
                <h3 class="my-2 d-flex">Validasi laporan : 
                    <span class="status-button--hoax ml-5" v-if="data.validasi === 'hoax'">
                        hoax
                    </span>
                    <span class="status-button--valid ml-5" v-if="data.validasi === 'valid'">
                        Valid
                    </span>
                </h3>
                <h3 class="my-2">Isi Tanggapan :</h3>
                <p class="text-gray-800">{{ data.tanggapan }}</p>
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
            data: {}
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

    },
}
</script>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    align-items: center;
}
</style>