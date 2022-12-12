<template>
  <div class="products__load">
    <button class="products__load__button" @click="loadMoreProducts">Cargar más</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      loadMoreProducts: async () => {
        return await store.dispatch('card/getAllProducts')
      }
    }
  }
}
</script>

<style>

</style>
