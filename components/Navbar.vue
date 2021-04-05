<template>
    <nav class="w-full shadow bg-white">
        <div class="sidebar-menu" @click="openSidebarMenu()">
            <fa :icon="fas.faAlignLeft"/>
        </div>
        <div class="logo">
            <nuxt-link to="/user">
                Pemas
            </nuxt-link>
        </div>
        <ul>
            <li>
                <a href="#" @click.prevent="submitLogout()">
                    <fa :icon="fas.faSignOutAlt"/>
                    <span>logout</span>                    
                </a>
            </li>            
        </ul>
    </nav>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
    computed: {
        fas () {
            return fas
        },
    },
    methods: {
        submitLogout() {
            this.$swal({
                title: 'Anda yakin ingin logout ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Logout'
            }).then((result) => {
                if(result.isConfirmed) {
                    this.$router.push('/')
                }
            })
        },
        openSidebarMenu() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'inline-block'
            sidebar.style.transform = 'translateX(0)'
            sidebar.style.width = '70%';
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #60a5fa;
$menu-color: #6b7280;
$font: 1.875rem;

nav {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 2rem 0.7rem;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    .sidebar-menu {
        display: none;
        cursor: pointer;
        color: $menu-color;
        
        &:hover {
            color: $primary-color;
            transition: .3s;
        }        

        @media screen and (max-width: 768px) {
            padding: 1rem 1rem 0;
            display: inline-block;
        }
    }

    .logo {
        color: $primary-color;
        font-size: 1.875rem;
        letter-spacing: 0.2rem;
        margin-top: 0.3rem;        
    }
    ul {
        display: flex;

        li {
            padding: 1rem 1rem 0;
            color: $menu-color;

            &:hover {
                color: $primary-color;
                transition: .3s;
            }

            span {
                @media screen and (max-width: 768px) {
                    display: none;
                }
            }
        }
    }

}
</style>