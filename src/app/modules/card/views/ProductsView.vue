<template>
  <div class="card-products">
    <Products/>
    <Paginate elementToPaginate="products"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Products: defineAsyncComponent(() => import('../components/products/ListProducts.vue')),
    Paginate: defineAsyncComponent(() => import('../components/products/Paginate.vue'))
  }
}
</script>
