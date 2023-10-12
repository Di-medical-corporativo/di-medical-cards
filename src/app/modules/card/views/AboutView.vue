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
        <v-lazy-image
            class="card-about__image__employee"
            :src="employeeDescription.image"
            src-placeholder="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/imagePlaceholder.jpg?alt=media&token=54bf0bb5-962b-4795-8902-3e090ba358f6"
        />
      </div>
    </div>
    <div class="card-about__info">
      <div class="card-about__info__paragraph" :style="sucursalBackground">
        <p class="card-about__info__paragraph__text">
          {{employeeDescription.description1}}
        </p>
      </div>
      <div class="card-about__info__paragraph" :style="sucursalBackground">
        <p class="card-about__info__paragraph__text">
          {{employeeDescription.description2}}
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
import { computed, ref, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useEmployee from '../composables/useEmployee'
import meta from '../../../services/metatags'
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    Logo: defineAsyncComponent(() => import('../components/Logo.vue')),
    VLazyImage
  },

  setup () {
    const route = useRoute()
    const router = useRouter()
    const { sucursal } = route.params
    const { getEmployee } = useEmployee()
    const employeeDescription = ref({})

    const getEmployeeFromDataBaseOrSavedInLocalStorage = async () => {
      try {
        employeeDescription.value = await getEmployee(route.params.id)
        meta.update('title', employeeDescription.value.firstName + ' ' + employeeDescription.value.lastName)
        meta.update('url', `https://card.dimedicalcorporativo.mx${route.path}`)
      } catch (error) {
        router.push({ name: 'not-found' })
      }
    }

    getEmployeeFromDataBaseOrSavedInLocalStorage()

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
      }),
      employeeDescription
    }
  }
}
</script>
