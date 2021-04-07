<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow" style="overflow-x: auto;">
            <nuxt-link :to="'/user/pengaduan/add'" class="text-white bg-blue-500 px-3 py-2 shadow rounded">
                <fa :icon="fas.faPlus" class="icon"/>
                Tambah Data
            </nuxt-link>
            <table class="table-data">
                <thead>
                    <tr>
                        <th>No</th>  
                        <th>Tanggal</th>                      
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody v-for="(row, index) in rowsData" :key="index">
                    <tr>
                        <td>{{ ++index }}</td>
                        <td>{{ row.tgl_pengaduan }}</td>
                        <td>{{ row.status }}</td>
                        <td class="p-3">
                            <nuxt-link :to="`/user/pengaduan/detail?id=${row.id_pengaduan}`" class="text-sm bg-blue-500 shadow rounded text-white p-2">Detail</nuxt-link>
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
            page: 'Pengaduan',
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
    async asyncData({$axios, store}) {
        try {
            const { id_masyarakat } = store.state.auth.loginForm.profile
            const rows = await $axios.$get(`pengaduan/all/${id_masyarakat}`);
            return { rows }
        } catch (e) {
            return { rows: [] }
        }
    },   
    methods: {
        async deleteData(id_pengaduan, id_users) {

            this.$swal({
                title: 'Apakah anda yakin ingin menghapus data ini ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Batalkan'
            }).then(async (result) => {
                if(result.isConfirmed) {

                    await this.$axios({
                        url: `pengaduan/delete`,
                        method: 'post',
                        data: { 
                            id_pengaduan,
                            id_users,                            
                        }
                    })

                    this.rows = await this.$axios.$get(`pengaduan/all`);

                    this.$swal({
                        icon: 'success',
                        title: 'Data telah terhapus !'
                    })
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>