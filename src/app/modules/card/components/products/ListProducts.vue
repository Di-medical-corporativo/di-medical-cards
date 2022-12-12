<template>
  <div class="products__list" v-if="productsPaginated">
    <TransitionGroup name="list">
        <Product
        :product="product"
        :sucursal="sucursal"
        v-for="product in productsPaginated"
        :key="product.id"
    />
    </TransitionGroup>
  </div>
  <div v-else>cargando...</div>
</template>

<script>
import { computed, defineAsyncComponent } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    Product: defineAsyncComponent(() => import('./Product.vue'))
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()

    const getProducts = async () => {
      try {
        await store.dispatch('card/getAllProducts')
      } catch (e) {
        router.push({ name: 'not-found' })
      }
    }

    getProducts()

    return {
      sucursal: route.params.sucursal,
      productsPaginated: computed(() => store.getters['card/getProducts']),
      getProducts
    }
  }
}
</script>

<style>

</style>
