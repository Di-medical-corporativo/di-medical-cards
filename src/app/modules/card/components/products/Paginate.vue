<template>
  <div class="products__load">
    <button
        class="products__load__button"
        @click="loadMoreElements"
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
  props: {
    elementToPaginate: {
      type: String
    }
  },
  setup (props) {
    const store = useStore()
    const route = useRoute()
    const showButton = ref(true)

    return {
      loadMoreElements: async () => {
        let elements = null
        if (props.elementToPaginate === 'products') {
          elements = await store.dispatch('card/getAllProducts')
        }

        if (props.elementToPaginate === 'technicals') {
          elements = await store.dispatch('card/getTechnicalSheets')
        }

        if (props.elementToPaginate === 'catalogues') {
          elements = await store.dispatch('card/getCatalogues')
        }

        if (!elements) {
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
