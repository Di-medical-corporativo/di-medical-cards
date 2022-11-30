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

    <img
        class="xmas__lights"
        src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Fdecoration%2FxmasLights.png?alt=media&token=74fa0a46-debe-464d-9e2d-76664394cbf0"
        alt="xmas lights"
        srcset=""
    >
    <img
    class="xmas__lights"
    src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Fdecoration%2FxmasLights.png?alt=media&token=74fa0a46-debe-464d-9e2d-76664394cbf0"
    alt="xmas lights"
    srcset=""
>
    <Snow/>
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
    Snow: defineAsyncComponent(() => import('../components/decoration/xmas/Snow.vue'))
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
