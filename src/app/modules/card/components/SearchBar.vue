<template>
  <div
    class="search__bar"
  >
    <input
        type="text"
        class="search__bar__input"
        placeholder="Buscar la Ficha técnica por código del producto"
        v-model="codeToSearch"
        @keyup.enter="searchTechnicalSheetByCode"
    >
    <button
        class="search__bar__button"
        :style="dimedicalBackgroundforComponent"
        @click="searchTechnicalSheetByCode"
    >
        <i class="bi bi-search icon"></i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useDimedical from '../composables/useDimedical'

export default {
  setup (_, { emit }) {
    const route = useRoute()
    const { dimedicalBackgroundforComponent } = useDimedical(route.params.sucursal)
    const codeToSearch = ref('')

    const searchTechnicalSheetByCode = () => {
      if (!codeToSearch.value || codeToSearch.value.trim().length === 0) return
      emit('code-to-search', codeToSearch.value)
    }

    return {
      dimedicalBackgroundforComponent,
      codeToSearch,
      searchTechnicalSheetByCode
    }
  }
}
</script>
