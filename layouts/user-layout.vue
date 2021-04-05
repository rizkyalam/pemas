<template>
    <div class="bg-gray-50 h-screen">
        <Navbar />
        <main>
            <Sidebar />
            <Nuxt class="main-content"/>
        </main>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
    components: { 
        Navbar,
        Sidebar
    },
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
    width: 100%;
    margin-top: 3.7rem;
}

.container {
    padding: 2rem;
}
</style>