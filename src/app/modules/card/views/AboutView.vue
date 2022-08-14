<template>
  <div class="card-about">
    <div class="card-about__logo">
      <Logo :sucursal="sucursal" />
    </div>
    <div class="card-about__image">
      <button
        class="card-about__image__button"
        :style="buttonBackground"
        @click="$router.push({ name: 'contact-card' })"
      >
        <i class="bi bi-arrow-left icon"></i>
      </button>
      <div class="card-about__image__outline" :style="sucursalBackground">
        <img
          alt=""
          class="card-about__image__employee"
          src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/cards%2FCrist%C3%B3bal%2FCrist%C3%B3bal-image.jpg?alt=media&token=cd2dabfe-cbe4-4c24-b8bb-dd699e032d41"
        />
      </div>
    </div>
    <div class="card-about__info">
      <div class="card-about__info__paragraph" :style="sucursalBackground">
        <p class="card-about__info__paragraph__text">
          Lic. en Relaciones Internacionales Egresada de la Universidad Nacional
          Autónoma de México, Especialidad en Tráfico de Mercancías y
          Tramitación Aduanal Egresada del Instituto de Formación Aduanal.
        </p>
      </div>
      <div class="card-about__info__paragraph" :style="sucursalBackground">
        <p class="card-about__info__paragraph__text">
          Lic. en Terapia Respiratoria, Egresada de la U. Manuela Beltrán Bogotá
          Colombia - Especialista en Cuidado Crítico - Maestrante de Fisiatría y
          Kinesiología Cardiorrespiratoria de la U. Gran Rosario de Argentina -
          Docente y Ponente Internacional
        </p>
      </div>
      <div class="card-about__info__paragraph" :style="sucursalBackground">
        <p class="card-about__info__paragraph__text">
          Lo más selecto de las mejores marcas para el mercado hospitalario
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  components: {
    Logo: defineAsyncComponent(() => import('../components/Logo.vue'))
  },

  setup () {
    const route = useRoute()
    const { sucursal } = route.params
    return {
      sucursal,
      buttonBackground: computed(() => {
        const backgroundColor = sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: backgroundColor }
      }),
      sucursalBackground: computed(() => {
        const backgrounds = {
          sur: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoSur.webp?alt=media&token=eb8461a2-b4e0-4578-ad86-a4f6d3f008f0',
          corporativo:
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoCorp.webp?alt=media&token=acdc5457-d064-490b-bf1a-2f6787b8c0a8'
        }

        return { 'background-image': `url(${backgrounds[sucursal]})` }
      })
    }
  }
}
</script>

<style>
</style>
