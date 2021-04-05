<template>
    <div class="sidebar shadow-md">
        <div class="profile">
            <img src="/image/profile.svg" alt="Photo Profile">
            <h4>{{ nama }}</h4>
        </div>
        
        <fa :icon="fas.faTimesCircle" class="close-sidebar" @click.prevent="closeSidebar()"/>

        <hr class="sidebar-divider">

        <ul class="menu">
            <li>
                <nuxt-link to="/user/dashboard">
                    <fa :icon="fas.faHome"/>
                    <span>Dashboard</span>                    
                </nuxt-link>
            </li>
            <hr class="sidebar-divider">
            <h6>Admin</h6>
            <li>
                <nuxt-link to="verify">
                    <fa :icon="fas.faCheck"/>
                    <span>Verifikasi Laporan</span>                    
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="masyarakat">
                    <fa :icon="fas.faUser"/>
                    <span>Data Masyarakat</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="petugas">
                    <fa :icon="fas.faUserTie"/>
                    <span>Data Petugas</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="laporan">
                    <fa :icon="fas.faFileAlt"/>
                    <span>Data Laporan</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="tanggapan">
                    <fa :icon="fas.faClipboardList"/>
                    <span>Data Tanggapan</span>
                </nuxt-link>
            </li>
            <hr class="sidebar-divider">
            <h6>Masyarakat</h6>
            <li>
                <nuxt-link to="/user/pengaduan">
                    <fa :icon="fas.faEnvelope"/>
                    <span>Data Pengaduan</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            nama: ''
        }
    },
    computed: {
        fas () {
            return fas
        },
        namaProfile() {            
            const {nama} = this.$store.state.auth.loginForm.profile
            const firstName = nama.split(' ');
            this.nama = firstName[0]
        }
    },
    methods: {
        closeSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.width = '0%';
            sidebar.style.transform = 'translateX(-100px)'

            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 500)

            console.log('ok')
        }
    },
    created() {
        this.namaProfile;
    }
}
</script>

<style lang="scss" scoped>
$text-color: #6b7280;
$primary-color: #60a5fa;

.sidebar {
    height: 100vh;
    width: 25%;
    background: white;
    overflow: auto;
    position: sticky;
    z-index: 1;
    top: 3.7rem;
    left: 0;
    bottom: 2rem;
    padding: 1.7rem 1.8rem;
    display: inline-block;
    transition: 0.4s;

    @media screen and (max-width: 992px) {
        width: 45%;        
    }

    @media screen and (max-width: 768px) {
        // display: none;
        height: 100vh;
        width: 70%;
        position: fixed;
        z-index: 3;
        top: 0;
    }

    .profile {
        display: flex;
        margin-bottom: 1.5rem;

        img {
            object-fit: contain;
            object-position: center;
            width: 40px;
            height: 40px;
        }

        h4 {
            display: flex;
            align-items: center;
            margin-left: 1.8rem;
            font-size: 1.2rem;
            color: $text-color;
        }

    }

    .close-sidebar {
        color: $primary-color;
        width: 25px;
        height: 25px;
        position: absolute;
        top: 35px;
        right: 30px;
        cursor: pointer;
        display: none;

        &:hover {
            color: darken($primary-color, 10%);
        }

        @media screen and (max-width: 768px) {
            display: inline-block;
        }
    }

    .sidebar-divider {
        width: 95%;
        margin: auto;
    }

    .menu {
        li {
            color: $text-color;
            margin: 1.2rem 0;

            &:hover {
                color: $primary-color;
            }

            span {
                margin-left: 1rem;
            }

            .nuxt-link-active {
                color: white;
                background: #60a5fa;
                padding: 0.5rem;
                border-radius: 4px;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
                            0 1px 2px 0 rgba(0, 0, 0, 0.06);
            }
        }        

        h6 {
            margin-top: 0.6rem;
        }
    }
}
</style>