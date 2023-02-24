<template>
  <div
    class="search__bar"
  >
    <input
        type="text"
        class="search__bar__input"
        placeholder="Buscar la Ficha técnica por código del producto"
    >
    <button
        class="search__bar__button"
        :style="dimedicalBackgroundforComponent"
    >
        <i class="bi bi-search icon"></i>
    </button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import useDimedical from '../composables/useDimedical'

export default {
  setup () {
    const route = useRoute()
    const { dimedicalBackgroundforComponent } = useDimedical(route.params.sucursal)

    return {
      dimedicalBackgroundforComponent
    }
  }
}
</script>
