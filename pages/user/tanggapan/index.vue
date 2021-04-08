<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full mt-5 px-5 pb-5 shadow" style="overflow-x: auto;">
            <table class="table-data">
                <thead>
                    <tr>
                        <th>No</th>  
                        <th>Nama Pelapor</th>                      
                        <th>Tanggal</th>                      
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody v-for="(row, index) in rowsData" :key="index">
                    <tr>
                        <td>{{ ++index }}</td>
                        <td>{{ row.nama_pelapor }}</td>
                        <td>{{ row.tgl_pengaduan }}</td>
                        <td>
                            <span 
                            class="text-gray-800 bg-yellow-400 rounded px-2" 
                            v-if="row.status === 'proses'"
                            >
                            {{ row.status }}
                            </span>
                            <span 
                            class="text-white bg-green-400 rounded px-2" 
                            v-else-if="row.status === 'selesai'"
                            >
                            {{ row.status }}
                            </span>
                        </td>
                        <td class="p-3">
                            <nuxt-link :to="`/user/tanggapan/detail?id=${row.id_pengaduan}`" class="text-sm bg-blue-500 shadow rounded text-white p-2">Detail</nuxt-link>
                            <button @click="reply(row.id_pengaduan, row.status)" class="text-sm bg-green-400 shadow rounded text-white p-2">Tanggapi</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            page: 'Tanggapan',
            url: this.$store.state.auth.base_url,
            rows: {}
        }
    },
    components: {
        Breadcrumb
    },
    computed: {
        fas () {
            return fas
        },
        rowsData() {
            return this.rows
        }
    },    
    async asyncData({$axios}) {
        try {
            const rows = await $axios.$get(`tanggapan/all`);
            return { rows }
        } catch (e) {
            return { rows: [] }
        }
    },   
    methods: {
        reply(id_pengaduan, status) {
            if (status === 'selesai') {
                this.$swal({
                    icon: 'error',
                    text: 'Data telah selesai di tanggapi !'
                })
            } else {
                this.$router.push(`/user/tanggapan/reply?id=${id_pengaduan}`);
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>