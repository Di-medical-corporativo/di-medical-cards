<template>
  <div class="card-technicals">
    <div class="card-technicals__list">
        <TechnicalSheet
            v-for="i in TechnicalSheetPaginated"
            :key="i"
            :image="i.image"
        />
    </div>
    <Pagination elementToPaginate="technicals"/>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    TechnicalSheet: defineAsyncComponent(() => import('../components/products/TechnicalSheet.vue')),
    Pagination: defineAsyncComponent(() => import('../components/products/Paginate.vue'))

  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const getTechnicalSheets = async () => {
      try {
        await store.dispatch('card/getTechnicalSheets')
      } catch (e) {
        console.log(e)
        router.push({ name: 'not-found' })
      }
    }

    getTechnicalSheets()

    return {
      TechnicalSheetPaginated: computed(() => store.getters['card/getTechnicalSheets'])
    }
  }
}
</script>

<style>

</style>
