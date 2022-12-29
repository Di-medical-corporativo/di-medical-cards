<template>
  <div class="card-technicals__brandList__brand">
    <button
        @click="addOrRemoveActiveBrand"
        :id="idBrand"
        class="card-technicals__brandList__brand__name"
    >
        {{brandName}}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    brandName: {
      type: String
    },
    idBrand: {
      type: String
    }
  },

  emits: ['activeBrand'],

  setup (props, { emit }) {
    const isActive = ref(false)
    const addOrRemoveActiveBrand = () => {
      emit('activeBrand', props.brandName)
      const brandsButton = document.querySelectorAll('.card-technicals__brandList__brand__name')
      brandsButton.forEach(e => e.classList.remove('currentBrand'))

      const currentBrand = document.getElementById(`${props.idBrand}`)
      currentBrand.classList.add('currentBrand')
    }

    return {
      addOrRemoveActiveBrand,
      isActive
    }
  }
}
</script>
