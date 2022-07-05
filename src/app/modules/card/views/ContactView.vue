<template>
  <div class="card-contact">
        <div class="card-contact__logo"> 
            <Logo :sucursal="$route.params.sucursal"/>
        </div>
        <BackgroundCard>
            <h1>Contenido</h1>
        </BackgroundCard>

  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Logo: defineAsyncComponent(() => import('../components/Logo.vue')),
        BackgroundCard: defineAsyncComponent(() => import('../components/BackgroundCard.vue'))
    }
}
</script>

<style>

</style>