<template>
  <button
    :style="buttonBackground"
    @click="openStoriesModal"
    class="stories__button">
    <i class="bi bi-file-image-fill icon"></i>
    Anuncios
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    sucursal: {
      type: String,
      required: true
    }
  },

  emits: ['openModal'],

  setup (props, { emit }) {
    return {
      buttonBackground: computed(() => {
        const backgroundSucursal =
          props.sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: backgroundSucursal }
      }),
      openStoriesModal: () => emit('openModal')
    }
  }
}
</script>
