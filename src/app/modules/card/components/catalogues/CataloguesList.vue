<template>
  <div class="card-catalogues">
    <div class="card-catalogues__background">
        <div class="card-catalogues__background__content">
            <div
                @click="closeModal"
                :style="backgroundButton"
                class="card-catalogues__background__content__x">
                x
            </div>
            <Brands
                @brandToSearch="getCataloguesByBrand"
            />
            <div
                v-if="!isLoadingCatalogues"
                class="card-catalogues__background__content__list"
                >
                <Catalogue
                    v-for="catalogue in getAllCatalagues"
                    :key="catalogue.id"
                    :data="catalogue"
                />
            </div>
            <p v-else>Cargando catálogos...</p>

            <p v-if="getAllCatalagues.length === 0">
                No se encontraron catálogos
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {
    Brands: defineAsyncComponent(() => import('../brands/BrandList.vue')),
    Catalogue: defineAsyncComponent(() => import('./Catalogue.vue'))
  },
  setup (_, { emit }) {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()

    const closeModal = () => {
      emit('closeModal')
    }

    const getCataloguesByBrand = async (brand) => {
      try {
        await store.dispatch('card/getCataloguesByBrand', brand)
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    const getCatalogues = async () => {
      try {
        if (store.getters['card/getCatalogues'].length > 0) {
          return
        }

        await store.dispatch('card/getCatalogues')
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    getCatalogues()

    return {
      closeModal,
      getCataloguesByBrand,
      backgroundButton: computed(() => {
        return route.params.sucursal === 'sur'
          ? { background: '#218d9b' }
          : { background: '#c28400' }
      }),
      getAllCatalagues: computed(() => {
        return store.getters['card/getCatalogues']
      }),
      isLoadingCatalogues: computed(() => {
        return store.getters['card/getIsLoadingCatalogues']
      })

    }
  }
}
</script>

<style>

</style>
