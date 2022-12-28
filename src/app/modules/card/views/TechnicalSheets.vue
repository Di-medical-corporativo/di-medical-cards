<template>
  <div class="card-technicals">
    <div class="card-technicals__list">
        <TechnicalSheet
            v-for="i in TechnicalSheetPaginated"
            :key="i"
            :image="i.image"
            @openModal="openModal"
        />
    </div>
    <ModalTechnicalVue
        v-show="isModalOpen"
        :imageToOpen="imageToOpen"
        @closeModal="closeModal"
    />
    <Pagination elementToPaginate="technicals"/>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    TechnicalSheet: defineAsyncComponent(() => import('../components/products/TechnicalSheet.vue')),
    Pagination: defineAsyncComponent(() => import('../components/products/Paginate.vue')),
    ModalTechnicalVue: defineAsyncComponent(() => import('../components/technicalSheets/ModalTechnical.vue'))
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const imageToOpen = ref('')
    const isModalOpen = ref(false)

    const getTechnicalSheets = async () => {
      try {
        await store.dispatch('card/getTechnicalSheets')
      } catch (e) {
        console.log(e)
        router.push({ name: 'not-found' })
      }
    }

    const openModal = (imageToOpenFromTechnicalSheet) => {
      isModalOpen.value = !isModalOpen.value
      imageToOpen.value = imageToOpenFromTechnicalSheet
    }

    const closeModal = () => {
      isModalOpen.value = false
      imageToOpen.value = ''
    }

    getTechnicalSheets()

    return {
      TechnicalSheetPaginated: computed(() => store.getters['card/getTechnicalSheets']),
      openModal,
      closeModal,
      isModalOpen,
      imageToOpen
    }
  }
}
</script>

<style>

</style>
