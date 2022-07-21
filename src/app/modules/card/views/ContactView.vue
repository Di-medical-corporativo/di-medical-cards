<template>
  <div class="card-contact">
    <SucursalProvider>
        <template #logo="{ sucursal }">
            <Logo :sucursal="sucursal"/>
        </template>
        <template #employee="{ sucursal }">
            <EmployeeName 
                :sucursal="sucursal" 
                :employee="{ 
                    name: 'Lic. Sandra Marcela Sánchez Marín', 
                    job: 'Gerente de Ventas'
                }"
            />
        </template>
        <template #hexagons-left="{ sucursal }">
            <Hexagon 
                :sucursal="sucursal" 
                v-for="(l, i) in leftHexagonsLogos"
                :key="i"
                :icon="l.logo"
                :link="l.link"
            />
        </template>
        <template #hexagons-right="{ sucursal }">
            <Hexagon 
                :sucursal="sucursal"
                v-for="(l, i)  in rightHexagonsLogos"
                :key="i" 
                :icon="l.logo"
                :link="l.link"     
            />
        </template>
        
        <template #copy>
            <CopyMessage/>
        </template>

    </SucursalProvider>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { leftHexagonsLogos, rightHexagonsLogos } from '../helpers/hexagonLogos'
export default {
    components: {
        Logo: defineAsyncComponent(() => import('../components/Logo.vue')),
        SucursalProvider: defineAsyncComponent(() => import('../components/BackgroundContact.vue')),
        EmployeeName: defineAsyncComponent(() => import('../components/EmployeeName.vue')),
        Hexagon: defineAsyncComponent(() => import('../components/HexagonLink.vue')),
        CopyMessage: defineAsyncComponent(() => import('../components/CopyMessage.vue'))
    },

    setup() {
        return { 
            leftHexagonsLogos,
            rightHexagonsLogos,
        }
    }
}
</script>