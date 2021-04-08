<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full mt-5 p-5 shadow" style="overflow-x: auto;">
            <button @click="printData()" class="text-white bg-blue-500 px-3 py-2 shadow rounded">
                <fa :icon="fas.faPrint" class="icon"/>
                Cetak data
            </button>
            <table class="table-data">
                <thead>
                    <tr>
                        <th>No</th>  
                        <th>Nama Pelapor</th>                      
                        <th>Tanggal</th>                      
                        <th>Status</th>
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
    middleware: ['auth', 'level-admin'],
    data() {
        return {
            page: 'Laporan data masyarakat',
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
            const rows = await $axios.$get(`laporan/pengaduan`);
            return { rows }
        } catch (e) {
            return { rows: [] }
        }
    },   
    methods: {
        printData() {
            window.print()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>