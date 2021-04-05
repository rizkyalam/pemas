<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="table w-full shadow">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <td>Tanggal</td>
                        <td>NIK</td>
                        <th>Status</th>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'

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
    }
}
</script>

<style lang="scss" scoped>

</style>