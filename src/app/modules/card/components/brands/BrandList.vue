<template>
  <div class="card-technicals__brandList">
    <Brand
        v-for="brand in getAllBrands"
        :key="brand.id"
        :idBrand="brand.id"
        :brandName="brand.name"
        @active-brand="brandToSearch"
    />
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  components: {
    Brand: defineAsyncComponent(() => import('./Brand.vue'))
  },
  emits: ['brand-to-search'],
  setup (_, { emit }) {
    const store = useStore()
    const router = useRouter()

    const brandToSearch = (brand) => {
      emit('brand-to-search', brand)
    }

    const getBrands = async () => {
      try {
        await store.dispatch('card/getAllBrands')
      } catch (error) {
        console.log(error)
        router.push({ name: 'not-found' })
      }
    }

    getBrands()

    return {
      getAllBrands: computed(() => store.getters['card/getBrands']),
      brandToSearch
    }
  }
}
</script>

<style>

</style>
