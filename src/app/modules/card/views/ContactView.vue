<template>
  <div class="card-contact">
    <SucursalProvider>
      <template #sharer="{ sucursal }">
        <Sharer :sucursal="sucursal" :employeeName="`${employeeData.firstName} ${employeeData.lastName}`"/>
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
          v-for="(l, i) in rightHexagonsWithEmployeeData"
          :key="i"
          :icon="l.logo"
          :link="l.link"
        />
      </template>

      <template #copy>
        <CopyMessage />
      </template>
    </SucursalProvider>
    <Spider/>
    <img class="hallowen__decoration__web" src="../assets/decorations/hallowen/web.png" alt="Spider web image">
    <img class="hallowen__decoration__candle" src="../assets/decorations/hallowen/vela.png" alt="Candle image">
    <img class="hallowen__decoration__candle_2" src="../assets/decorations/hallowen/vela.png" alt="Candle image">
</div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useEmployee from '../composables/useEmployee'
import { leftHexagonsLogos, rightHexagonsLogos } from '../helpers/hexagonLogos'
import meta from '../../../services/metatags'
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
    Spider: defineAsyncComponent(() => import('../components/decorations/hallowen/Spider.vue'))
  },

  setup () {
    const { getEmployee } = useEmployee()
    const router = useRouter()
    const route = useRoute()
    const employeeData = ref({})
    const leftHexagonsWithEmployeeData = ref([])
    const rightHexagonsWithEmployeeData = ref([])

    const getEmployeeFromDataBaseOrSavedInLocalStorage = async () => {
      try {
        const employee = await getEmployee(route.params.id)
        setHexagonsFromEmployeeData(employee)
        employeeData.value = employee
        meta.update('title', employee.firstName + ' ' + employee.lastName)
        meta.update('url', `https://card.dimedicalcorporativo.mx${route.path}`)
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    const setHexagonsFromEmployeeData = (employee) => {
      leftHexagonsWithEmployeeData.value = leftHexagonsLogos.map((hexagon) => {
        if (hexagon.logo === 'envelope') {
          hexagon.link = `mailto:${employee.email}`
        }

        if (hexagon.logo === 'whatsapp') {
          hexagon.link = `https://api.whatsapp.com/send?phone=${employee.phone}&text=Hola,+busco+informes+&utm_source=web+page`
        }
        return hexagon
      })

      rightHexagonsWithEmployeeData.value = rightHexagonsLogos.map((hexagon) => {
        if (hexagon.logo === 'phone') {
          hexagon.link = `tel:+52${employee.phone}`
        }
        return hexagon
      })
    }

    getEmployeeFromDataBaseOrSavedInLocalStorage()
    return {
      leftHexagonsLogos,
      rightHexagonsLogos,
      employeeData,
      leftHexagonsWithEmployeeData,
      rightHexagonsWithEmployeeData
    }
  }
}
</script>
