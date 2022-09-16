<template>
  <div class="products__list">
    <Product
        :product="testProduct"
        :sucursal="sucursal"
        v-for="i in 10"
        :key="i"
    />
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  components: {
    Product: defineAsyncComponent(() => import('./Product.vue'))
  },
  setup () {
    const route = useRoute()
    const testProduct = ref({
      title: 'Antifaz para fototerapia con correa pediátrico',
      description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
      photos: ['.jpg', '.jpg', '.mp4'],
      brand: 'Brand',
      stock: true
    })

    return {
      testProduct,
      sucursal: route.params.sucursal
    }
  }
}
</script>

<style>

</style>
