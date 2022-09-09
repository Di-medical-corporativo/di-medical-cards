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
      <button class="products__header--actions__stories button_header" :style="backgroundSucursal">
        Stories
        <i class="bi bi-file-image"></i>
      </button>

      <button class="products__header--actions__catalogue button_header" :style="backgroundSucursal">
        Catálogos
        <i class="bi bi-book-fill"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    return {
      backgroundSucursal: computed(() => {
        const sucursal = route.params.sucursal
        const background = sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: background }
      }),
      goToMainView: () => router.go(-1)
    }
  }
}
</script>

<style>
</style>
