<template>
  <div class="card-products">
    <Header />
    <Search/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Header: defineAsyncComponent(() =>
      import('../components/products/Header.vue')),
    Search: defineAsyncComponent(() => import('../components/products/Search.vue'))
  }
}
</script>

<style>
</style>
