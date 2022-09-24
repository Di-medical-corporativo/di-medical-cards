<template>
  <main class="card__content" :class="globalBackground" v-if="!isLoading">
    <router-view v-slot="{ Component, route }">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
  <Loader v-else/>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import useEmployee from '../composables/useEmployee'

export default {
  setup () {
    const route = useRoute()
    const { sucursal } = route.params
    const { isLoading } = useEmployee()
    return {
      globalBackground: computed(() => {
        return sucursal === 'sur'
          ? 'card__content--sur'
          : 'card__content--corporativo'
      }),
      isLoading
    }
  },
  components: {
    Loader: defineAsyncComponent(() => import('../../../components/Loader.vue'))
  }
}
</script>
