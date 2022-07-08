<template>
  <div class="card-contact">
    <SucursalProvider>
        <template #logo="{ sucursal }">
            <Logo :sucursal="sucursal"/>
        </template>
        <template #employee="{ sucursal }">
            <EmployeeName :sucursal="sucursal" :employee="{ name: 'Kevin', job: 'Software developer'}"/>
        </template>
        <template #hexagons-left="{ sucursal }">
            <Hexagon 
                :sucursal="sucursal" 
                icon="facebook"
                v-for="i in 4"
                :key="i"    
            />
        </template>
        <template #hexagons-right="{ sucursal }">
            <Hexagon 
                :sucursal="sucursal" 
                icon="instagram" 
                v-for="i in 4"
                :key="i"    
            />
        </template>
    </SucursalProvider>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Logo: defineAsyncComponent(() => import('../components/Logo.vue')),
        SucursalProvider: defineAsyncComponent(() => import('../components/BackgroundCard.vue')),
        EmployeeName: defineAsyncComponent(() => import('../components/EmployeeName.vue')),
        Hexagon: defineAsyncComponent(() => import('../components/HexagonLink.vue')),
    }
}
</script>