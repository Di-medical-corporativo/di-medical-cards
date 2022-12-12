<template>
  <div class="card-products">
    <Header />
    <Products/>
    <Paginate/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Header: defineAsyncComponent(() =>
      import('../components/products/Header.vue')),
    Products: defineAsyncComponent(() => import('../components/products/ListProducts.vue')),
    Paginate: defineAsyncComponent(() => import('../components/products/LoadProducts.vue'))
  }
}
</script>

<style>
</style>
