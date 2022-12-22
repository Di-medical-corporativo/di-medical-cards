<template>
  <div class="card-products">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Header: defineAsyncComponent(() =>
      import('../components/products/Header.vue')
    )
  }
}
</script>
