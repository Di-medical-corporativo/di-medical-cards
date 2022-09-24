<template>
  <div class="card-contact">
    <SucursalProvider>
      <template #sharer="{ sucursal }">
        <Sharer :sucursal="sucursal" />
      </template>

      <template #products="{ sucursal }">
        <ProductsButton :sucursal="sucursal"></ProductsButton>
      </template>

      <template #logo="{ sucursal }">
        <Logo :sucursal="sucursal" />
      </template>
      <template #employee="{ sucursal }">
        <EmployeeName
          :sucursal="sucursal"
          :employee="employeeData"
        />
      </template>
      <template #hexagons-left="{ sucursal }">
        <Hexagon
          :sucursal="sucursal"
          v-for="(l, i) in leftHexagonsWithEmployeeData"
          :key="i"
          :icon="l.logo"
          :link="l.link"
        />
      </template>
      <template #hexagons-right="{ sucursal }">
        <Hexagon
          :sucursal="sucursal"
          v-for="(l, i) in rightHexagonsLogos"
          :key="i"
          :icon="l.logo"
          :link="l.link"
        />
      </template>

      <template #copy>
        <CopyMessage />
      </template>
    </SucursalProvider>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
import useEmployee from '../composables/useEmployee'
import { leftHexagonsLogos, rightHexagonsLogos } from '../helpers/hexagonLogos'
import { useRoute, useRouter } from 'vue-router'
export default {
  components: {
    Logo: defineAsyncComponent(() => import('../components/Logo.vue')),
    SucursalProvider: defineAsyncComponent(() =>
      import('../components/BackgroundContact.vue')
    ),
    EmployeeName: defineAsyncComponent(() =>
      import('../components/EmployeeName.vue')
    ),
    Hexagon: defineAsyncComponent(() =>
      import('../components/HexagonLink.vue')
    ),
    CopyMessage: defineAsyncComponent(() =>
      import('../components/CopyMessage.vue')
    ),
    Sharer: defineAsyncComponent(() => import('../components/Sharer.vue')),
    ProductsButton: defineAsyncComponent(() =>
      import('../components/ProductsButton.vue')
    )
  },

  setup () {
    const { getEmployee } = useEmployee()
    const router = useRouter()
    const route = useRoute()
    const employeeData = ref({})
    const leftHexagonsWithEmployeeData = ref([])

    const getEmployeeFromDataBase = async () => {
      try {
        const employee = await getEmployee(route.params.id)
        setHexagonsFromEmployeeData(employee)
        employeeData.value = employee
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    const setHexagonsFromEmployeeData = (employee) => {
      console.log(employee)
      leftHexagonsWithEmployeeData.value = leftHexagonsLogos.map((hexagon) => {
        if (hexagon.logo === 'envelope') {
          hexagon.link = `mailto:${employee.email}`
          console.log(hexagon)
        }
        return hexagon
      })

      console.log(leftHexagonsWithEmployeeData.value)
    }

    getEmployeeFromDataBase()
    return {
      leftHexagonsLogos,
      rightHexagonsLogos,
      employeeData,
      leftHexagonsWithEmployeeData
    }
  }
}
</script>
