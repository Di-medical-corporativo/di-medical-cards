<template>
  <div class="products__header">
    <div class="products__header--back">
      <button
            class="products__header--back__button button_header"
            :style="backgroundSucursal"
            @click="goToMainView"
        >
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>

    <div class="products__header--actions">
        <router-link
            class="products__header--actions__action"
            :style="backgroundSucursal"
            :to="{ name: 'products-technicals' }"
        >
            Fichas Técnicas
        </router-link>
        <button
            class="products__header--actions__action"
            :style="backgroundSucursal"
            @click="openModalCatalogues"
        >
            Catálogos
        </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup (_, { emit }) {
    const route = useRoute()
    const router = useRouter()

    const openModalCatalogues = () => {
      emit('open-modal')
    }

    return {
      backgroundSucursal: computed(() => {
        const sucursal = route.params.sucursal
        const background = sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: background }
      }),
      goToMainView: () => router.go(-1),
      openModalCatalogues
    }
  }
}
</script>

<style>
</style>
