<template>
  <main class="card__content" :class="globalBackground">
    <router-view v-slot="{ Component, route }">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const { sucursal } = route.params
    return {
      globalBackground: computed(() => {
        return sucursal == 'sur'
          ? 'card__content--sur'
          : 'card__content--corporativo'
      })
    }
  }
}
</script>
