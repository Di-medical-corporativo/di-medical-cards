<template>
  <div class="card-contact__name">
    <p class="card-contact__name__employee">{{ employee.firstName || ''}} {{employee.lastName || ''}}</p>
    <h4 class="card-contact__name__job">{{ employee.job }}</h4>
    <button
      class="card-contact__name__button"
      @click="$router.push({ name: 'about-card' })"
      :style="sucursalColor"
    >
      <i class="bi bi-person-fill icon"></i>
      Sobre mí
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    sucursal: {
      type: String
    },
    employee: {
      type: Object,
      default: () => {}
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
