<template>
  <div class="sharer">
    <button class="sharer__button" :style="sucursalColor">
      <i class="bi bi-share-fill icon"></i>
      Compartir
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    sucursal: {
      type: String
    }
  },

  setup (props) {
    return {
      sucursalColor: computed(() => {
        const color = props.sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: color }
      })
    }
  }
}
</script>

<style>
</style>
