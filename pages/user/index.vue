<template>
    <div class="container">
        <Breadcrumb :title="page"/>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
    layout: 'user-layout',
    data() {
        return {
            page: 'Dashboard'
        }
    },
    components: {
        Breadcrumb
    }
}
</script>

<style lang="scss" scoped>

</style>