<template>
  <div class="products__list">
    <Product :product="testProduct" v-for="i in 10" :key="i"/>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from '@vue/runtime-core'
export default {
  components: {
    Product: defineAsyncComponent(() => import('./Product.vue'))
  },
  setup () {
    const testProduct = ref({
      title: 'Antifaz para fototerapia con correa pediátrico'
    })

    return {
      testProduct
    }
  }
}
</script>

<style>

</style>
