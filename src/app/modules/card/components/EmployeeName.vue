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
    <button
        class="newYear__access"
        :style="sucursalColor"
        @click="$router.push({ name: 'newYear' })"
    >
        <img
            class="newYear__access__icon"
            src="../../../assets/newYearIcon.png"
            alt=""
        >
        <span class="newYear__access__text">2023</span>
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
