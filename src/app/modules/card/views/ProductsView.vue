<template>
  <div class="card--products">
    <Header />
    <Search/>
    <Products/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Header: defineAsyncComponent(() =>
      import('../components/products/Header.vue')),
    Search: defineAsyncComponent(() => import('../components/products/Search.vue')),
    Products: defineAsyncComponent(() => import('../components/products/ListProducts.vue'))
  }
}
</script>

<style>
</style>
