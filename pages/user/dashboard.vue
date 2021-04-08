<template>
    <div class="container">
        <Breadcrumb :title="page"/>

        <div class="profile p-5 mt-5 shadow">
            <h2>Profile saya</h2>
            <table style="text-align: left; width: 100%;">
                <tr>
                    <th class="mr-5">Username</th>
                    :
                    <td>{{ profile.username }}</td>
                </tr>
                <tr>
                    <th class="mr-5">Nama</th>
                    :
                    <td>{{ profile.nama }}</td>
                </tr>
                <tr v-if="profile.level === 'masyarakat'">
                    <th class="mr-5">NIK</th>
                    :
                    <td>{{ profile.nik }}</td>
                </tr>
                <tr>
                    <th class="mr-5">Telepon</th>
                    :
                    <td>{{ profile.telp }}</td>
                </tr>
                <tr>
                    <th class="mr-5">Level</th>
                    :
                    <td>{{ profile.level }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
    layout: 'user-layout',
    middleware: ['auth'],
    data() {
        return {
            page: 'Dashboard',
            profile: {}
        }
    },
    components: {
        Breadcrumb
    },
    computed: {
        dataProfile() {
            this.profile = this.$store.state.auth.loginForm.profile
        }
    },
    created() {
        this.dataProfile
    }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 40%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
}
</style>