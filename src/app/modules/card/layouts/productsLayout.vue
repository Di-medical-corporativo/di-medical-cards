<template>
  <div class="card-products">
    <Header @open-modal="toggleModal"/>
    <Transition
        name="fade"
        appear
    >
        <CatalogueModal
        v-if="isActiveModalCatalogues"
        @close-modal="toggleModal"
    />
        </Transition>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
export default {
  components: {
    Header: defineAsyncComponent(() =>
      import('../components/products/Header.vue')
    ),
    CatalogueModal: defineAsyncComponent(() => import('../components/catalogues/CataloguesList.vue'))
  },

  setup () {
    const isActiveModalCatalogues = ref(false)
    const toggleModal = () => {
      isActiveModalCatalogues.value = !isActiveModalCatalogues.value
    }

    return {
      isActiveModalCatalogues,
      toggleModal
    }
  }
}
</script>
