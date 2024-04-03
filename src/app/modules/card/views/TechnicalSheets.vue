<template>
  <div class="card-technicals">
    <BrandList @brand-to-search="searchByBrand"/>

    <div class="card-technicals__bar">
        <SearchBar @code-to-search="searchByCode"/>
    </div>
    <template v-if="!isLoading && TechnicalSheetPaginated.length > 0">
        <div class="card-technicals__list">
            <TransitionGroup name="slide-fade" :duration="500">
                <TechnicalSheet
                    v-for="i in TechnicalSheetPaginated"
                    :key="i"
                    :image="i.image"
                    @open-modal="openModal"
                />
            </TransitionGroup>
        </div>
        <Transition
            name="nested"
            :duration="{
                enter: 700,
                leave: 750
            }
        ">
            <ModalTechnicalVue
                v-if="isModalOpen"
                :imageToOpen="imageToOpen"
                @close-modal="closeModal"
            />
        </Transition>
        <Pagination
            elementToPaginate="technicals"
            v-if="!showPagination"
        />
    </template>
    <p v-else-if="isLoading">Cargando fichas...</p>
    <p v-else>No se encontraron Fichas técnicas</p>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    TechnicalSheet: defineAsyncComponent(() => import('../components/technicalSheets/TechnicalSheet.vue')),
    Pagination: defineAsyncComponent(() => import('../components/products/Paginate.vue')),
    ModalTechnicalVue: defineAsyncComponent(() => import('../components/technicalSheets/ModalTechnical.vue')),
    BrandList: defineAsyncComponent(() => import('../components/brands/BrandList.vue')),
    SearchBar: defineAsyncComponent(() => import('../components/SearchBar.vue'))
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const imageToOpen = ref('')
    const isModalOpen = ref(false)
    const showPagination = ref(false)

    const getTechnicalSheets = async () => {
      try {
        await store.dispatch('card/getTechnicalSheets')
      } catch (e) {
        console.log(e)
        router.push({ name: 'not-found' })
      }
    }

    const searchByBrand = async (brand) => {
      showPagination.value = true
      try {
        if (store.getters['card/getBrandToSearch'] === brand) {
          return
        }
        await store.dispatch('card/getTechnicalSheetsByBrand', brand)
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    const searchByCode = async (code) => {
      showPagination.value = true
      try {
        await store.dispatch('card/getTechnicalSheetByCode', code)
      } catch (error) {
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
      isSearchingByBrand: computed(() => store.getters['card/getBrandToSearch']),
      isLoading: computed(() => store.getters['card/isLoadingTechnicalSheets']),
      openModal,
      closeModal,
      isModalOpen,
      imageToOpen,
      searchByBrand,
      searchByCode,
      showPagination
    }
  }
}
</script>

<style>
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
.nested-enter-active .inner {
    transition-delay: 0.25s;
  }
</style>
