<template>
  <div class="card-technicals__modal">
    <div
        @click.self="closeModal"
        class="card-technicals__modal__background outer">

        <v-lazy-image
            class="card-technicals__modal__background__image inner"
            :src="imageToOpen"
        />
        <div
            :style="buttonBackground"
            class="card-technicals__modal__background__close"
            @click="closeModal"
        >
            <i class="bi bi-x-lg icon"></i>
        </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import VLazyImage from 'v-lazy-image'

export default {
  props: {
    imageToOpen: {
      type: String
    }
  },

  emits: ['closeModal'],

  setup (_, { emit }) {
    const route = useRoute()

    const closeModal = () => {
      emit('closeModal')
    }

    return {
      closeModal,
      buttonBackground: computed(() => {
        return route.params.sucursal === 'sur'
          ? { background: '#218d9b' }
          : { background: '#c28400' }
      })
    }
  },

  components: {
    VLazyImage
  }
}
</script>

<style>

</style>
