<template>
  <div class="newYear">
    <Logo :sucursal="sucursal"/>
    <div class="newYear__title">
        <p class="newYear__title__text">
            ¡<span
                :style="nameColor"
                class="dimedical">Di medical</span>
                te desea Feliz Año Nuevo !
        </p>
    </div>
    <div class="contentglass">
      <div class="glass1">
        <div class="b1"></div>
        <div class="b2"></div>
        <div class="champagne"></div>
      </div>
      <div class="glass2">
        <div class="b1"></div>
        <div class="b2"></div>
        <div class="champagne"></div>
      </div>
    </div>
    <button
        class="newYear__button"
        :style="buttonColor"
        @click="$router.go(-1)"
    >
    <i class="bi bi-arrow-left"></i>
    </button>

    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const sucursal = route.params.sucursal
    return {
      nameColor: computed(() => {
        return sucursal === 'sur'
          ? { color: '#218d9b' }
          : { color: '#c28400' }
      }),
      buttonColor: computed(() => {
        return sucursal === 'sur'
          ? { backgroundColor: '#218d9b' }
          : { backgroundColor: '#c28400' }
      }),
      sucursal
    }
  },

  components: {
    Logo: defineAsyncComponent(() => import('../components/Logo.vue'))
  }
}
</script>
