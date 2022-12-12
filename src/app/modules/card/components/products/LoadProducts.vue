<template>
  <div class="products__load">
    <button
        class="products__load__button"
        @click="loadMoreProducts"
        :style="backgroundButton"
        v-show="showButton"
    >
    Cargar más
    </button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    const showButton = ref(true)

    return {
      loadMoreProducts: async () => {
        const products = await store.dispatch('card/getAllProducts')
        if (!products) {
          showButton.value = false
        }
      },
      backgroundButton: computed(() => {
        return route.params.sucursal === 'sur'
          ? { background: '#218d9b' }
          : { background: '#c28400' }
      }),
      showButton
    }
  }
}
</script>

<style>

</style>
