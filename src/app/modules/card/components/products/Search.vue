<template>
  <div class="products__search">
    <input
        class="products__search--input"
        type="text"
        placeholder="Buscar producto por nombre, código, marca o descripción"
        v-model="input"/>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  emits: ['input'],
  setup (_, { emit }) {
    const input = ref('')
    watch(input, (value) => {
      emit('input', value)
    })
    return {
      input
    }
  }
}
</script>

<style>
</style>
