<template>
    <main class="card__content">
        <router-view></router-view>
    </main>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const { sucursal } = route.params;
        return { 
            sucursal
        }
    }
}
</script>

<style>

</style>