<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow" style="overflow-x: auto;">
            <button class="text-white bg-blue-500 px-3 py-2 shadow rounded">
                <fa :icon="fas.faPlus" class="icon"/>
                Tambah Data
            </button>
            <table class="table-data">
                <thead>
                    <tr>
                        <th>No</th>                        
                        <th>Nama</th>
                        <th>NIK</th>
                        <th>Telepon</th>
                        <th>Foto KTP</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>123</td>
                        <td>08723786</td>
                        <td><img src="" alt=""></td>
                        <td>
                            <button class="text-sm bg-red-500 shadow rounded text-white p-2">Hapus</button>
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
    middleware: 'auth',
    data() {
        return {
            page: 'Laporan Pengaduan'
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
}
</script>

<style lang="scss" scoped>

</style>