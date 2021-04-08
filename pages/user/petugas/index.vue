<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="w-full p-5 mt-5 shadow" style="overflow-x: auto;">
            <nuxt-link :to="'/user/petugas/add'" class="text-white bg-blue-500 px-3 py-2 shadow rounded">
                <fa :icon="fas.faPlus" class="icon"/>
                Tambah Data
            </nuxt-link>
            <table class="table-data">
                <thead>
                    <tr>
                        <th>No</th>  
                        <th>Username</th>                      
                        <th>Nama</th>
                        <th>Telepon</th>
                        <th>Level</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody v-for="(row, index) in rows" :key="index">
                    <tr>
                        <td>{{ ++index }}</td>
                        <td>{{ row.username }}</td>
                        <td>{{ row.nama_petugas }}</td>
                        <td>{{ row.telp }}</td>
                        <td>{{ row.level }}</td>
                        <td>
                            <button @click="deleteData(row.id_petugas, row.id_users)" class="text-sm bg-red-500 shadow rounded text-white p-2">Hapus</button>
                            <nuxt-link :to="`/user/petugas/edit?id=${row.id_petugas}`" class="text-sm bg-green-400 shadow rounded text-white p-2">Edit</nuxt-link>
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
            page: 'Petugas',
            url: this.$store.state.auth.base_url,
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
    async asyncData({$axios}) {
        const rows = await $axios.$get(`petugas/all`);
        return { rows }
    },   
    methods: {
        async deleteData(id_petugas, id_users) {

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
                        url: `petugas/delete`,
                        method: 'post',
                        data: { 
                            id_petugas,
                            id_users,                            
                        }
                    })

                    this.rows = await this.$axios.$get(`petugas/all`);

                    this.$swal({
                        icon: 'success',
                        title: 'Data telah terhapus !'
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>